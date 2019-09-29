/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { HttpParams } from '@angular/common/http';
import { BehaviorSubject, of } from 'rxjs';
import { Resolver } from './resolver';
import { Marker } from './marker';
import { Normalizer } from './normalizer';
export class Traverser {
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
if (false) {
    /** @type {?} */
    Traverser.prototype.target;
    /**
     * @type {?}
     * @private
     */
    Traverser.prototype.views;
    /**
     * @type {?}
     * @private
     */
    Traverser.prototype.location;
    /**
     * @type {?}
     * @private
     */
    Traverser.prototype.resolver;
    /**
     * @type {?}
     * @private
     */
    Traverser.prototype.marker;
    /**
     * @type {?}
     * @private
     */
    Traverser.prototype.normalizer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhdmVyc2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci10cmF2ZXJzYWwvIiwic291cmNlcyI6WyJsaWIvdHJhdmVyc2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUN0QyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFJMUMsTUFBTSxPQUFPLFNBQVM7Ozs7Ozs7SUFLcEIsWUFBb0IsUUFBa0IsRUFDbEIsUUFBa0IsRUFDbEIsTUFBYyxFQUNkLFVBQXNCO1FBSHRCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUxsQyxVQUFLLEdBQTJCLEVBQUUsQ0FBQztRQU16QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksZUFBZSxDQUFDO1lBQ2hDLFNBQVMsRUFBRSxJQUFJO1lBQ2YsT0FBTyxFQUFFLEVBQUU7WUFDWCxXQUFXLEVBQUUsRUFBRTtZQUNmLElBQUksRUFBRSxFQUFFO1lBQ1IsS0FBSyxFQUFFLElBQUksVUFBVSxFQUFFO1lBQ3ZCLElBQUksRUFBRSxNQUFNO1NBQ2IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7O0lBRUQsUUFBUSxDQUFDLElBQVksRUFBRSxXQUFvQixJQUFJO1FBQzdDLElBQUksR0FBRyxJQUFJ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QkFBMkM7Ozs7O0lBRS9CLDZCQUEwQjs7Ozs7SUFDMUIsNkJBQTBCOzs7OztJQUMxQiwyQkFBc0I7Ozs7O0lBQ3RCLCtCQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBSZXNvbHZlciB9IGZyb20gJy4vcmVzb2x2ZXInO1xuaW1wb3J0IHsgTWFya2VyIH0gZnJvbSAnLi9tYXJrZXInO1xuaW1wb3J0IHsgTm9ybWFsaXplciB9IGZyb20gJy4vbm9ybWFsaXplcic7XG5pbXBvcnQgeyBUYXJnZXQsIEh0dHBQYXJhbXNPcHRpb25zIH0gZnJvbSAnLi9pbnRlcmZhY2VzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRyYXZlcnNlciB7XG5cbiAgcHVibGljIHRhcmdldDogQmVoYXZpb3JTdWJqZWN0PFRhcmdldD47XG4gIHByaXZhdGUgdmlld3M6IHsgW2tleTogc3RyaW5nXTogYW55IH0gPSB7fTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvbixcbiAgICAgICAgICAgICAgcHJpdmF0ZSByZXNvbHZlcjogUmVzb2x2ZXIsXG4gICAgICAgICAgICAgIHByaXZhdGUgbWFya2VyOiBNYXJrZXIsXG4gICAgICAgICAgICAgIHByaXZhdGUgbm9ybWFsaXplcjogTm9ybWFsaXplcikge1xuICAgIHRoaXMudGFyZ2V0ID0gbmV3IEJlaGF2aW9yU3ViamVjdCh7XG4gICAgICBjb21wb25lbnQ6IG51bGwsXG4gICAgICBjb250ZXh0OiB7fSxcbiAgICAgIGNvbnRleHRQYXRoOiAnJyxcbiAgICAgIHBhdGg6ICcnLFxuICAgICAgcXVlcnk6IG5ldyBIdHRwUGFyYW1zKCksXG4gICAgICB2aWV3OiAndmlldycsXG4gICAgfSk7XG4gIH1cblxuICB0cmF2ZXJzZShwYXRoOiBzdHJpbmcsIG5hdmlnYXRlOiBib29sZWFuID0gdHJ1ZSkge1xuICAgIHBhdGggPSB0aGlzLm5vcm1hbGl6ZXIubm9ybWFsaXplKHBhdGgpO1xuICAgIGxldCBjb250ZXh0UGF0aDogc3RyaW5nID0gcGF0aDtcbiAgICBsZXQgcXVlcnlTdHJpbmcgPSAnJztcbiAgICBsZXQgdmlldyA9ICd2aWV3JztcbiAgICBpZiAocGF0aC5pbmRleE9mKCc/JykgPiAtMSkge1xuICAgICAgcXVlcnlTdHJpbmcgPSBjb250ZXh0UGF0aC5zcGxpdCgnPycpWzFdO1xuICAgICAgY29udGV4dFBhdGggPSBjb250ZXh0UGF0aC5zcGxpdCgnPycpWzBdO1xuICAgIH1cbiAgICBpZiAocGF0aC5pbmRleE9mKCdAQCcpID4gLTEpIHtcbiAgICAgIHZpZXcgPSBjb250ZXh0UGF0aC5zcGxpdCgnQEAnKVsxXTtcbiAgICAgIGNvbnRleHRQYXRoID0gY29udGV4dFBhdGguc3BsaXQoJ0BAJylbMF07XG4gICAgICBpZiAoY29udGV4dFBhdGguc2xpY2UoLTEpID09PSAnLycpIHtcbiAgICAgICAgY29udGV4dFBhdGggPSBjb250ZXh0UGF0aC5zbGljZSgwLCAtMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChuYXZpZ2F0ZSkge1xuICAgICAgbGV0IG5hdmlnYXRlVG8gPSBwYXRoO1xuICAgICAgaWYgKCFjb250ZXh0UGF0aCkge1xuICAgICAgICAvLyBpZiBubyBjb250ZXh0UGF0aCwgcHJlc2VydmUgdGhlIHByZXZpb3VzIG9uZVxuICAgICAgICBpZiAobmF2aWdhdGVUb1swXSAhPT0gJy8nKSB7XG4gICAgICAgICAgbmF2aWdhdGVUbyA9ICcvJyArIG5hdmlnYXRlVG87XG4gICAgICAgIH1cbiAgICAgICAgbmF2aWdhdGVUbyA9IHRoaXMudGFyZ2V0LnZhbHVlLmNvbnRleHRQYXRoICsgbmF2aWdhdGVUbztcbiAgICAgIH1cbiAgICAgIHRoaXMubG9jYXRpb24uZ28obmF2aWdhdGVUbyk7XG4gICAgfVxuICAgIGNvbnN0IHZpZXdDb21wb25lbnRzOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ID0gdGhpcy52aWV3c1t2aWV3XTtcbiAgICBpZiAodmlld0NvbXBvbmVudHMpIHtcbiAgICAgIGxldCByZXNvbHZlcjtcbiAgICAgIGlmICghY29udGV4dFBhdGggIC8vIGlmIHdlIGhhdmUgbm8gY29udGV4dCBwYXRoXG4gICAgICAgICYmIE9iamVjdC5rZXlzKHRoaXMudGFyZ2V0LnZhbHVlLmNvbnRleHQpLmxlbmd0aCA+IDAgIC8vIGFuZCB3ZSBoYXZlIGNvbnRleHRcbiAgICAgICAgJiYgcXVlcnlTdHJpbmcgPT09IHRoaXMudGFyZ2V0LnZhbHVlLnF1ZXJ5LnRvU3RyaW5nKCkpIHsgIC8vIGFuZCBxdWVyeSBzdHJpbmcgZGlkIG5vdCBjaGFuZ2VcbiAgICAgICAgLy8gdGhlbiB3ZSBrZWVwIHRoZSBjdXJyZW50IGNvbnRleHRcbiAgICAgICAgcmVzb2x2ZXIgPSBvZih0aGlzLnRhcmdldC52YWx1ZS5jb250ZXh0KTtcbiAgICAgICAgY29udGV4dFBhdGggPSB0aGlzLnRhcmdldC52YWx1ZS5jb250ZXh0UGF0aDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc29sdmVyID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlKGNvbnRleHRQYXRoLCB2aWV3LCBxdWVyeVN0cmluZyk7XG4gICAgICB9XG4gICAgICBpZiAocmVzb2x2ZXIpIHtcbiAgICAgICAgcmVzb2x2ZXIuc3Vic2NyaWJlKChjb250ZXh0OiBhbnkpID0+IHtcbiAgICAgICAgICBjb25zdCBtYXJrZXIgPSB0aGlzLm1hcmtlci5tYXJrKGNvbnRleHQpO1xuICAgICAgICAgIGxldCBjb21wb25lbnQ7XG4gICAgICAgICAgaWYgKG1hcmtlciBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICBjb25zdCBtYXRjaGVzID0gbWFya2VyLmZpbHRlcihtID0+IHZpZXdDb21wb25lbnRzW21dKTtcbiAgICAgICAgICAgIGlmIChtYXRjaGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgY29tcG9uZW50ID0gdmlld0NvbXBvbmVudHNbbWF0Y2hlc1swXV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbXBvbmVudCA9IHZpZXdDb21wb25lbnRzW21hcmtlcl07XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghY29tcG9uZW50KSB7XG4gICAgICAgICAgICBjb21wb25lbnQgPSB2aWV3Q29tcG9uZW50c1snKiddO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoY29tcG9uZW50KSB7XG4gICAgICAgICAgICB0aGlzLnRhcmdldC5uZXh0KDxUYXJnZXQ+IHtcbiAgICAgICAgICAgICAgY29udGV4dDogY29udGV4dCxcbiAgICAgICAgICAgICAgcGF0aDogcGF0aCxcbiAgICAgICAgICAgICAgY29udGV4dFBhdGg6IGNvbnRleHRQYXRoLFxuICAgICAgICAgICAgICB2aWV3OiB2aWV3LFxuICAgICAgICAgICAgICBjb21wb25lbnQ6IGNvbXBvbmVudCxcbiAgICAgICAgICAgICAgcXVlcnk6IG5ldyBIdHRwUGFyYW1zKHtmcm9tU3RyaW5nOiBxdWVyeVN0cmluZyB8fCAnJ30gYXMgSHR0cFBhcmFtc09wdGlvbnMpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHRyYXZlcnNlSGVyZSgpIHtcbiAgICB0aGlzLnRyYXZlcnNlKHRoaXMubG9jYXRpb24ucGF0aCgpKTtcbiAgfVxuXG4gIGFkZFZpZXcobmFtZTogc3RyaW5nLCB0YXJnZXQ6IHN0cmluZywgY29tcG9uZW50OiBhbnkpIHtcbiAgICBpZiAoIXRoaXMudmlld3NbbmFtZV0pIHtcbiAgICAgIHRoaXMudmlld3NbbmFtZV0gPSB7fTtcbiAgICB9XG4gICAgdGhpcy52aWV3c1tuYW1lXVt0YXJnZXRdID0gY29tcG9uZW50O1xuICB9XG59XG4iXX0=