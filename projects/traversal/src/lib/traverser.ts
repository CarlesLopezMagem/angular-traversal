import {
    Injectable,
    ComponentFactoryResolver,
    ComponentFactory,
    Inject,
    InjectionToken,
    Optional,
    Type,
} from '@angular/core';
import { Location } from '@angular/common';
import { HttpParams } from '@angular/common/http';
import { BehaviorSubject, of, Observable } from 'rxjs';
import { Resolver } from './resolver';
import { Marker } from './marker';
import { Normalizer } from './normalizer';
import { Target, HttpParamsOptions } from './interfaces';

export type ModuleWithViews = Type<any> & {
    traverserViews: {name: string, components: {[target: string]: Type<any>}}[]
};
export type LazyView = () => Promise<Type<any>>;

export const NAVIGATION_PREFIX = new InjectionToken<string>('traversal.prefix');

@Injectable({
    providedIn: 'root'
})
export class Traverser {

    public target: BehaviorSubject<Target>;
    private views: { [name: string]: {[target: string]: Type<any> | string }} = {};
    private lazy: { [id: string]: LazyView} = {};
    private prefix: string;

    constructor(
        private location: Location,
        private resolver: Resolver,
        private marker: Marker,
        private normalizer: Normalizer,
        private ngResolver: ComponentFactoryResolver,
        @Optional() @Inject(NAVIGATION_PREFIX) prefix: string,
    ) {
        this.prefix = prefix || '';
        this.target = new BehaviorSubject({
            component: null,
            context: {},
            contextPath: '',
            prefixedContextPath: this.prefix,
            path: '',
            prefixedPath: this.prefix,
            query: new HttpParams(),
            view: 'view',
        });
    }

    traverse(path: string, navigate: boolean = true) {
        path = this.normalizer.normalize(this.getFullPath(path));
        let contextPath: string = path;
        let queryString = '';
        let view = 'view';
        if (path.indexOf('?') > -1) {
            [contextPath, queryString] = contextPath.split('?');
        } else if (path.indexOf(';') > -1) {
            [contextPath, queryString] = contextPath.split(';');
        }
        if (path.indexOf('@@') > -1) {
            view = contextPath.split('@@')[1];
            contextPath = contextPath.split('@@')[0];
            if (contextPath.length > 1 && contextPath.slice(-1) === '/') {
                contextPath = contextPath.slice(0, -1);
            }
        }
        if (navigate) {
            let navigateTo = path;
            if (!contextPath) {
                // if no contextPath, preserve the previous one
                if (navigateTo[0] !== '/') {
                    navigateTo = '/' + navigateTo;
                }
                navigateTo = this.target.value.contextPath + navigateTo;
            }
            this.location.go(this.prefix + navigateTo);
        }
        const viewComponents = this.views[view];
        if (viewComponents) {
            let resolver;
            if (!contextPath  // if we have no context path
            && Object.keys(this.target.value.context).length > 0  // and we have context
            // and query string did not change
            && !!this.target.value.query && queryString === Object.assign(new HttpParams(), this.target.value.query).toString()) {
                // then we keep the current context
                resolver = of(this.target.value.context);
                contextPath = this.target.value.contextPath;
            } else {
                resolver = this._resolve(contextPath, view, queryString);
            }
            if (resolver) {
                resolver.subscribe((context: any) => {
                    const marker = this.marker.mark(context);
                    let component: Type<any> | string;
                    if (marker instanceof Array) {
                        const matches = marker.filter(m => viewComponents[m]);
                        if (matches.length > 0) {
                            component = viewComponents[matches[0]];
                        }
                    } else {
                        component = viewComponents[marker];
                    }
                    if (!component) {
                        component = viewComponents['*'];
                    }
                    if (component) {
                        const promise = typeof(component) === 'string' ?
                            this.loadLazyView(component) :
                            Promise.resolve(component);
                        promise.then(comp => {
                            this.target.next({
                                context,
                                path,
                                prefixedPath: this.prefix + path,
                                contextPath,
                                prefixedContextPath: this.prefix + contextPath,
                                view,
                                component: comp,
                                query: new HttpParams({ fromString: queryString || '' } as HttpParamsOptions)
                            } as Target);
                        });
                    }
                });
            }
        }
    }

    traverseHere() {
        this.traverse(this.location.path().slice(this.prefix.length));
    }

    addView(name: string, target: string, component: Type<any>) {
        if (!this.views[name]) {
            this.views[name] = {};
        }
        this.views[name][target] = component;
    }

    addLazyView(name: string, target: string, loader: LazyView) {
        if (!this.views[name]) {
            this.views[name] = {};
        }
        const id = name + ';' + target;
        this.views[name][target] = id;
        this.lazy[id] = loader;
    }

    loadLazyView(id: string): Promise<Type<any>> {
        return this.lazy[id]().then(module => {
            const moduleViews = (module as ModuleWithViews).traverserViews;
            moduleViews.forEach(view => {
                this.views[view.name] = !!this.views[view.name] ?
                    {...this.views[view.name], ...view.components} :
                    view.components;
            });
            const [viewName, target] = id.split(';');
            return this.views[viewName][target] as Type<any>;
        });
    }

    _resolve(path: string, view?: any, queryString?: string): Observable<any> {
        return this.resolver.resolve(path, view, queryString);
    }

    resolve(path: string, view?: any, queryString?: string): Observable<any> {
        return this._resolve(this.normalizer.normalize(this.getFullPath(path)), view, queryString);
    }

    getFullPath(path: string): string {
        if (path === '.') {
            path = this.target.value.contextPath;
        } else if (path.startsWith('./')) {
            path = this.target.value.contextPath === '/' ? path.slice(1) : this.target.value.contextPath + path.slice(1);
        } else if (path.startsWith('../')) {
            const current = this.target.value.contextPath.split('/');
            path = path.split('/').reduce((all, chunk) => {
                if (chunk === '..') {
                    all.pop();
                } else {
                    all.push(chunk);
                }
                return all;
            }, current).join('/');
        }
        return path;
    }

    getComponent(component: any): ComponentFactory<unknown> {
        return this.ngResolver.resolveComponentFactory(component);
    }
}
