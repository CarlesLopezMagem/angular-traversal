import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { BehaviorSubject, of } from 'rxjs';
import { HttpParams, HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, ComponentFactoryResolver, Directive, ViewContainerRef, HostBinding, Input, NgModule, Inject, InjectionToken } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class Resolver {
}
Resolver.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class Marker {
}
Marker.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Normalizer {
    /**
     * @param {?} path
     * @return {?}
     */
    normalize(path) {
        return path;
    }
}
Normalizer.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Traverser {
    /**
     * @param {?} location
     * @param {?} resolver
     * @param {?} marker
     * @param {?} normalizer
     */
    constructor(location, resolver, marker, normalizer) {
        this.location = location;
        this.resolver = resolver;
        this.marker = marker;
        this.normalizer = normalizer;
        this.views = {};
        this.target = new BehaviorSubject({
            component: null,
            context: {},
            contextPath: '',
            path: '',
            query: new HttpParams(),
            view: 'view',
        });
    }
    /**
     * @param {?} path
     * @param {?=} navigate
     * @return {?}
     */
    traverse(path, navigate = true) {
        path = this.normalizer.normalize(path);
        /** @type {?} */
        let contextPath = path;
        /** @type {?} */
        let queryString = '';
        /** @type {?} */
        let view = 'view';
        if (path.indexOf('?') > -1) {
            queryString = contextPath.split('?')[1];
            contextPath = contextPath.split('?')[0];
        }
        if (path.indexOf('@@') > -1) {
            view = contextPath.split('@@')[1];
            contextPath = contextPath.split('@@')[0];
            if (contextPath.slice(-1) === '/') {
                contextPath = contextPath.slice(0, -1);
            }
        }
        if (navigate) {
            /** @type {?} */
            let navigateTo = path;
            if (!contextPath) {
                // if no contextPath, preserve the previous one
                if (navigateTo[0] !== '/') {
                    navigateTo = '/' + navigateTo;
                }
                navigateTo = this.target.value.contextPath + navigateTo;
            }
            this.location.go(navigateTo);
        }
        /** @type {?} */
        const viewComponents = this.views[view];
        if (viewComponents) {
            /** @type {?} */
            let resolver;
            if (!contextPath // if we have no context path
                && Object.keys(this.target.value.context).length > 0 // and we have context
                && queryString === this.target.value.query.toString()) { // and query string did not change
                // then we keep the current context
                resolver = of(this.target.value.context);
                contextPath = this.target.value.contextPath;
            }
            else {
                resolver = this.resolver.resolve(contextPath, view, queryString);
            }
            if (resolver) {
                resolver.subscribe((/**
                 * @param {?} context
                 * @return {?}
                 */
                (context) => {
                    /** @type {?} */
                    const marker = this.marker.mark(context);
                    /** @type {?} */
                    let component;
                    if (marker instanceof Array) {
                        /** @type {?} */
                        const matches = marker.filter((/**
                         * @param {?} m
                         * @return {?}
                         */
                        m => viewComponents[m]));
                        if (matches.length > 0) {
                            component = viewComponents[matches[0]];
                        }
                    }
                    else {
                        component = viewComponents[marker];
                    }
                    if (!component) {
                        component = viewComponents['*'];
                    }
                    if (component) {
                        this.target.next((/** @type {?} */ ({
                            context: context,
                            path: path,
                            contextPath: contextPath,
                            view: view,
                            component: component,
                            query: new HttpParams((/** @type {?} */ ({ fromString: queryString || '' })))
                        })));
                    }
                }));
            }
        }
    }
    /**
     * @return {?}
     */
    traverseHere() {
        this.traverse(this.location.path());
    }
    /**
     * @param {?} name
     * @param {?} target
     * @param {?} component
     * @return {?}
     */
    addView(name, target, component) {
        if (!this.views[name]) {
            this.views[name] = {};
        }
        this.views[name][target] = component;
    }
}
Traverser.decorators = [
    { type: Injectable }
];
/** @nocollapse */
Traverser.ctorParameters = () => [
    { type: Location },
    { type: Resolver },
    { type: Marker },
    { type: Normalizer }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TraverserOutlet {
    /**
     * @param {?} traverser
     * @param {?} location
     * @param {?} container
     * @param {?} resolver
     */
    constructor(traverser, location, container, resolver) {
        this.traverser = traverser;
        this.location = location;
        this.container = container;
        this.resolver = resolver;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.traverser.target.subscribe((/**
         * @param {?} target
         * @return {?}
         */
        (target) => this.render(target)));
        this.traverser.traverse(this.location.path());
        this.location.subscribe((/**
         * @param {?} location
         * @return {?}
         */
        location => {
            this.traverser.traverse(String(location.url), false);
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.viewInstance) {
            this.viewInstance.destroy();
        }
    }
    /**
     * @param {?} target
     * @return {?}
     */
    render(target) {
        if (this.viewInstance) {
            this.viewInstance.destroy();
        }
        if (target.component) {
            /** @type {?} */
            const componentFactory = this.resolver.resolveComponentFactory(target.component);
            this.viewInstance = this.container.createComponent(componentFactory);
        }
    }
}
TraverserOutlet.decorators = [
    { type: Directive, args: [{
                selector: 'traverser-outlet',
            },] }
];
/** @nocollapse */
TraverserOutlet.ctorParameters = () => [
    { type: Traverser },
    { type: Location },
    { type: ViewContainerRef },
    { type: ComponentFactoryResolver }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TraverserButton {
    /**
     * @param {?} traverser
     */
    constructor(traverser) {
        this.traverser = traverser;
    }
    /**
     * @return {?}
     */
    onClick() {
        this.traverser.traverse(this.traverseTo);
        return false;
    }
}
TraverserButton.decorators = [
    { type: Directive, args: [{
                selector: ':not(a)[traverseTo]',
                host: {
                    '(click)': 'onClick()'
                }
            },] }
];
/** @nocollapse */
TraverserButton.ctorParameters = () => [
    { type: Traverser }
];
TraverserButton.propDecorators = {
    traverseTo: [{ type: Input }]
};
class TraverserLink extends TraverserButton {
    /**
     * @param {?} privateTraverser
     * @param {?} normalizer
     */
    constructor(privateTraverser, normalizer) {
        super(privateTraverser);
        this.privateTraverser = privateTraverser;
        this.normalizer = normalizer;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.href = this.normalizer.normalize(this.traverseTo);
    }
}
TraverserLink.decorators = [
    { type: Directive, args: [{
                selector: 'a[traverseTo]',
                host: {
                    '(click)': 'onClick()'
                }
            },] }
];
/** @nocollapse */
TraverserLink.ctorParameters = () => [
    { type: Traverser },
    { type: Normalizer }
];
TraverserLink.propDecorators = {
    href: [{ type: HostBinding }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TraversalModule {
}
TraversalModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    TraverserOutlet,
                    TraverserButton,
                    TraverserLink,
                ],
                imports: [
                    HttpClientModule,
                ],
                providers: [
                    Location,
                    { provide: LocationStrategy, useClass: PathLocationStrategy },
                    Traverser,
                ],
                exports: [
                    TraverserOutlet,
                    TraverserButton,
                    TraverserLink,
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// the actual value will be provided by the module
/** @type {?} */
let BACKEND_BASE_URL = new InjectionToken('backend.base.url');
class BasicHttpResolver extends Resolver {
    /**
     * @param {?} http
     * @param {?} backend
     */
    constructor(http, backend) {
        super();
        this.http = http;
        this.backend = backend;
    }
    /**
     * @param {?} path
     * @param {?} view
     * @param {?=} queryString
     * @return {?}
     */
    resolve(path, view, queryString) {
        /** @type {?} */
        const headers = new HttpHeaders()
            .append('Accept', 'application/json')
            .append('Content-Type', 'application/json');
        return this.http.get(this.backend + path, { headers });
    }
}
BasicHttpResolver.decorators = [
    { type: Injectable }
];
/** @nocollapse */
BasicHttpResolver.ctorParameters = () => [
    { type: HttpClient },
    { type: String, decorators: [{ type: Inject, args: [BACKEND_BASE_URL,] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { TraversalModule, Traverser, TraverserOutlet, TraverserLink, TraverserButton, Normalizer, Resolver, BasicHttpResolver, BACKEND_BASE_URL, Marker };

//# sourceMappingURL=angular-traversal.js.map