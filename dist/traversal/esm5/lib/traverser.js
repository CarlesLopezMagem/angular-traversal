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
var Traverser = /** @class */ (function () {
    function Traverser(location, resolver, marker, normalizer) {
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
    Traverser.prototype.traverse = /**
     * @param {?} path
     * @param {?=} navigate
     * @return {?}
     */
    function (path, navigate) {
        var _this = this;
        if (navigate === void 0) { navigate = true; }
        path = this.normalizer.normalize(path);
        /** @type {?} */
        var contextPath = path;
        /** @type {?} */
        var queryString = '';
        /** @type {?} */
        var view = 'view';
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
            var navigateTo = path;
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
        var viewComponents = this.views[view];
        if (viewComponents) {
            /** @type {?} */
            var resolver = void 0;
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
                function (context) {
                    /** @type {?} */
                    var marker = _this.marker.mark(context);
                    /** @type {?} */
                    var component;
                    if (marker instanceof Array) {
                        /** @type {?} */
                        var matches = marker.filter((/**
                         * @param {?} m
                         * @return {?}
                         */
                        function (m) { return viewComponents[m]; }));
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
                        _this.target.next((/** @type {?} */ ({
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
    };
    /**
     * @return {?}
     */
    Traverser.prototype.traverseHere = /**
     * @return {?}
     */
    function () {
        this.traverse(this.location.path());
    };
    /**
     * @param {?} name
     * @param {?} target
     * @param {?} component
     * @return {?}
     */
    Traverser.prototype.addView = /**
     * @param {?} name
     * @param {?} target
     * @param {?} component
     * @return {?}
     */
    function (name, target, component) {
        if (!this.views[name]) {
            this.views[name] = {};
        }
        this.views[name][target] = component;
    };
    Traverser.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    Traverser.ctorParameters = function () { return [
        { type: Location },
        { type: Resolver },
        { type: Marker },
        { type: Normalizer }
    ]; };
    return Traverser;
}());
export { Traverser };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhdmVyc2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci10cmF2ZXJzYWwvIiwic291cmNlcyI6WyJsaWIvdHJhdmVyc2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUN0QyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFHMUM7SUFNRSxtQkFBb0IsUUFBa0IsRUFDbEIsUUFBa0IsRUFDbEIsTUFBYyxFQUNkLFVBQXNCO1FBSHRCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUxsQyxVQUFLLEdBQTJCLEVBQUUsQ0FBQztRQU16QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksZUFBZSxDQUFDO1lBQ2hDLFNBQVMsRUFBRSxJQUFJO1lBQ2YsT0FBTyxFQUFFLEVBQUU7WUFDWCxXQUFXLEVBQUUsRUFBRTtZQUNmLElBQUksRUFBRSxFQUFFO1lBQ1IsS0FBSyxFQUFFLElBQUksVUFBVSxFQUFFO1lBQ3ZCLElBQUksRUFBRSxNQUFNO1NBQ2IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7O0lBRUQsNEJBQVE7Ozs7O0lBQVIsVUFBUyxJQUFZLEVBQUUsUUFBd0I7UUFBL0MsaUJBbUVDO1FBbkVzQix5QkFBQSxFQUFBLGVBQXdCO1FBQzdDLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQzs7WUFDbkMsV0FBVyxHQUFXLElBQUk7O1lBQzFCLFdBQVcsR0FBRyxFQUFFOztZQUNoQixJQUFJLEdBQUcsTUFBTTtRQUNqQixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDMUIsV0FBVyxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEMsV0FBVyxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDekM7UUFDRCxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDM0IsSUFBSSxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEMsV0FBVyxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekMsSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFO2dCQUNqQyxXQUFXLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN4QztTQUNGO1FBQ0QsSUFBSSxRQUFRLEVBQUU7O2dCQUNSLFVBQVUsR0FBRyxJQUFJO1lBQ3JCLElBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBQ2hCLCtDQUErQztnQkFDL0MsSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFO29CQUN6QixVQUFVLEdBQUcsR0FBRyxHQUFHLFVBQVUsQ0FBQztpQkFDL0I7Z0JBQ0QsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7YUFDekQ7WUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUM5Qjs7WUFDSyxjQUFjLEdBQTJCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBQy9ELElBQUksY0FBYyxFQUFFOztnQkFDZCxRQUFRLFNBQUE7WUFDWixJQUFJLENBQUMsV0FBVyxDQUFFLDZCQUE2QjttQkFDMUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFFLHNCQUFzQjttQkFDekUsV0FBVyxLQUFLLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsRUFBRSxFQUFHLGtDQUFrQztnQkFDNUYsbUNBQW1DO2dCQUNuQyxRQUFRLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUN6QyxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDO2FBQzdDO2lCQUFNO2dCQUNMLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsSUFBSSxFQUFFLFdBQVcsQ0FBQyxDQUFDO2FBQ2xFO1lBQ0QsSUFBSSxRQUFRLEVBQUU7Z0JBQ1osUUFBUSxDQUFDLFNBQVM7Ozs7Z0JBQUMsVUFBQyxPQUFZOzt3QkFDeEIsTUFBTSxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQzs7d0JBQ3BDLFNBQVM7b0JBQ2IsSUFBSSxNQUFNLFlBQVksS0FBSyxFQUFFOzs0QkFDckIsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNOzs7O3dCQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsY0FBYyxDQUFDLENBQUMsQ0FBQyxFQUFqQixDQUFpQixFQUFDO3dCQUNyRCxJQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFOzRCQUN0QixTQUFTLEdBQUcsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3lCQUN4QztxQkFDRjt5QkFBTTt3QkFDTCxTQUFTLEdBQUcsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO3FCQUNwQztvQkFDRCxJQUFJLENBQUMsU0FBUyxFQUFFO3dCQUNkLFNBQVMsR0FBRyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7cUJBQ2pDO29CQUNELElBQUksU0FBUyxFQUFFO3dCQUNiLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLG1CQUFTOzRCQUN4QixPQUFPLEVBQUUsT0FBTzs0QkFDaEIsSUFBSSxFQUFFLElBQUk7NEJBQ1YsV0FBVyxFQUFFLFdBQVc7NEJBQ3hCLElBQUksRUFBRSxJQUFJOzRCQUNWLFNBQVMsRUFBRSxTQUFTOzRCQUNwQixLQUFLLEVBQUUsSUFBSSxVQUFVLENBQUMsbUJBQUEsRUFBQyxVQUFVLEVBQUUsV0FBVyxJQUFJLEVBQUUsRUFBQyxFQUFxQixDQUFDO3lCQUM1RSxFQUFBLENBQUMsQ0FBQztxQkFDSjtnQkFDSCxDQUFDLEVBQUMsQ0FBQzthQUNKO1NBQ0Y7SUFDSCxDQUFDOzs7O0lBRUQsZ0NBQVk7OztJQUFaO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7Ozs7OztJQUVELDJCQUFPOzs7Ozs7SUFBUCxVQUFRLElBQVksRUFBRSxNQUFjLEVBQUUsU0FBYztRQUNsRCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNyQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztTQUN2QjtRQUNELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsU0FBUyxDQUFDO0lBQ3ZDLENBQUM7O2dCQWxHRixVQUFVOzs7O2dCQVJGLFFBQVE7Z0JBR1IsUUFBUTtnQkFDUixNQUFNO2dCQUNOLFVBQVU7O0lBc0duQixnQkFBQztDQUFBLEFBbkdELElBbUdDO1NBbEdZLFNBQVM7OztJQUVwQiwyQkFBdUM7Ozs7O0lBQ3ZDLDBCQUEyQzs7Ozs7SUFFL0IsNkJBQTBCOzs7OztJQUMxQiw2QkFBMEI7Ozs7O0lBQzFCLDJCQUFzQjs7Ozs7SUFDdEIsK0JBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFJlc29sdmVyIH0gZnJvbSAnLi9yZXNvbHZlcic7XG5pbXBvcnQgeyBNYXJrZXIgfSBmcm9tICcuL21hcmtlcic7XG5pbXBvcnQgeyBOb3JtYWxpemVyIH0gZnJvbSAnLi9ub3JtYWxpemVyJztcbmltcG9ydCB7IFRhcmdldCwgSHR0cFBhcmFtc09wdGlvbnMgfSBmcm9tICcuL2ludGVyZmFjZXMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVHJhdmVyc2VyIHtcblxuICBwdWJsaWMgdGFyZ2V0OiBCZWhhdmlvclN1YmplY3Q8VGFyZ2V0PjtcbiAgcHJpdmF0ZSB2aWV3czogeyBba2V5OiBzdHJpbmddOiBhbnkgfSA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uLFxuICAgICAgICAgICAgICBwcml2YXRlIHJlc29sdmVyOiBSZXNvbHZlcixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBtYXJrZXI6IE1hcmtlcixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBub3JtYWxpemVyOiBOb3JtYWxpemVyKSB7XG4gICAgdGhpcy50YXJnZXQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHtcbiAgICAgIGNvbXBvbmVudDogbnVsbCxcbiAgICAgIGNvbnRleHQ6IHt9LFxuICAgICAgY29udGV4dFBhdGg6ICcnLFxuICAgICAgcGF0aDogJycsXG4gICAgICBxdWVyeTogbmV3IEh0dHBQYXJhbXMoKSxcbiAgICAgIHZpZXc6ICd2aWV3JyxcbiAgICB9KTtcbiAgfVxuXG4gIHRyYXZlcnNlKHBhdGg6IHN0cmluZywgbmF2aWdhdGU6IGJvb2xlYW4gPSB0cnVlKSB7XG4gICAgcGF0aCA9IHRoaXMubm9ybWFsaXplci5ub3JtYWxpemUocGF0aCk7XG4gICAgbGV0IGNvbnRleHRQYXRoOiBzdHJpbmcgPSBwYXRoO1xuICAgIGxldCBxdWVyeVN0cmluZyA9ICcnO1xuICAgIGxldCB2aWV3ID0gJ3ZpZXcnO1xuICAgIGlmIChwYXRoLmluZGV4T2YoJz8nKSA+IC0xKSB7XG4gICAgICBxdWVyeVN0cmluZyA9IGNvbnRleHRQYXRoLnNwbGl0KCc/JylbMV07XG4gICAgICBjb250ZXh0UGF0aCA9IGNvbnRleHRQYXRoLnNwbGl0KCc/JylbMF07XG4gICAgfVxuICAgIGlmIChwYXRoLmluZGV4T2YoJ0BAJykgPiAtMSkge1xuICAgICAgdmlldyA9IGNvbnRleHRQYXRoLnNwbGl0KCdAQCcpWzFdO1xuICAgICAgY29udGV4dFBhdGggPSBjb250ZXh0UGF0aC5zcGxpdCgnQEAnKVswXTtcbiAgICAgIGlmIChjb250ZXh0UGF0aC5zbGljZSgtMSkgPT09ICcvJykge1xuICAgICAgICBjb250ZXh0UGF0aCA9IGNvbnRleHRQYXRoLnNsaWNlKDAsIC0xKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG5hdmlnYXRlKSB7XG4gICAgICBsZXQgbmF2aWdhdGVUbyA9IHBhdGg7XG4gICAgICBpZiAoIWNvbnRleHRQYXRoKSB7XG4gICAgICAgIC8vIGlmIG5vIGNvbnRleHRQYXRoLCBwcmVzZXJ2ZSB0aGUgcHJldmlvdXMgb25lXG4gICAgICAgIGlmIChuYXZpZ2F0ZVRvWzBdICE9PSAnLycpIHtcbiAgICAgICAgICBuYXZpZ2F0ZVRvID0gJy8nICsgbmF2aWdhdGVUbztcbiAgICAgICAgfVxuICAgICAgICBuYXZpZ2F0ZVRvID0gdGhpcy50YXJnZXQudmFsdWUuY29udGV4dFBhdGggKyBuYXZpZ2F0ZVRvO1xuICAgICAgfVxuICAgICAgdGhpcy5sb2NhdGlvbi5nbyhuYXZpZ2F0ZVRvKTtcbiAgICB9XG4gICAgY29uc3Qgdmlld0NvbXBvbmVudHM6IHsgW2tleTogc3RyaW5nXTogYW55IH0gPSB0aGlzLnZpZXdzW3ZpZXddO1xuICAgIGlmICh2aWV3Q29tcG9uZW50cykge1xuICAgICAgbGV0IHJlc29sdmVyO1xuICAgICAgaWYgKCFjb250ZXh0UGF0aCAgLy8gaWYgd2UgaGF2ZSBubyBjb250ZXh0IHBhdGhcbiAgICAgICAgJiYgT2JqZWN0LmtleXModGhpcy50YXJnZXQudmFsdWUuY29udGV4dCkubGVuZ3RoID4gMCAgLy8gYW5kIHdlIGhhdmUgY29udGV4dFxuICAgICAgICAmJiBxdWVyeVN0cmluZyA9PT0gdGhpcy50YXJnZXQudmFsdWUucXVlcnkudG9TdHJpbmcoKSkgeyAgLy8gYW5kIHF1ZXJ5IHN0cmluZyBkaWQgbm90IGNoYW5nZVxuICAgICAgICAvLyB0aGVuIHdlIGtlZXAgdGhlIGN1cnJlbnQgY29udGV4dFxuICAgICAgICByZXNvbHZlciA9IG9mKHRoaXMudGFyZ2V0LnZhbHVlLmNvbnRleHQpO1xuICAgICAgICBjb250ZXh0UGF0aCA9IHRoaXMudGFyZ2V0LnZhbHVlLmNvbnRleHRQYXRoO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzb2x2ZXIgPSB0aGlzLnJlc29sdmVyLnJlc29sdmUoY29udGV4dFBhdGgsIHZpZXcsIHF1ZXJ5U3RyaW5nKTtcbiAgICAgIH1cbiAgICAgIGlmIChyZXNvbHZlcikge1xuICAgICAgICByZXNvbHZlci5zdWJzY3JpYmUoKGNvbnRleHQ6IGFueSkgPT4ge1xuICAgICAgICAgIGNvbnN0IG1hcmtlciA9IHRoaXMubWFya2VyLm1hcmsoY29udGV4dCk7XG4gICAgICAgICAgbGV0IGNvbXBvbmVudDtcbiAgICAgICAgICBpZiAobWFya2VyIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoZXMgPSBtYXJrZXIuZmlsdGVyKG0gPT4gdmlld0NvbXBvbmVudHNbbV0pO1xuICAgICAgICAgICAgaWYgKG1hdGNoZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICBjb21wb25lbnQgPSB2aWV3Q29tcG9uZW50c1ttYXRjaGVzWzBdXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29tcG9uZW50ID0gdmlld0NvbXBvbmVudHNbbWFya2VyXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFjb21wb25lbnQpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudCA9IHZpZXdDb21wb25lbnRzWycqJ107XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChjb21wb25lbnQpIHtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0Lm5leHQoPFRhcmdldD4ge1xuICAgICAgICAgICAgICBjb250ZXh0OiBjb250ZXh0LFxuICAgICAgICAgICAgICBwYXRoOiBwYXRoLFxuICAgICAgICAgICAgICBjb250ZXh0UGF0aDogY29udGV4dFBhdGgsXG4gICAgICAgICAgICAgIHZpZXc6IHZpZXcsXG4gICAgICAgICAgICAgIGNvbXBvbmVudDogY29tcG9uZW50LFxuICAgICAgICAgICAgICBxdWVyeTogbmV3IEh0dHBQYXJhbXMoe2Zyb21TdHJpbmc6IHF1ZXJ5U3RyaW5nIHx8ICcnfSBhcyBIdHRwUGFyYW1zT3B0aW9ucylcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdHJhdmVyc2VIZXJlKCkge1xuICAgIHRoaXMudHJhdmVyc2UodGhpcy5sb2NhdGlvbi5wYXRoKCkpO1xuICB9XG5cbiAgYWRkVmlldyhuYW1lOiBzdHJpbmcsIHRhcmdldDogc3RyaW5nLCBjb21wb25lbnQ6IGFueSkge1xuICAgIGlmICghdGhpcy52aWV3c1tuYW1lXSkge1xuICAgICAgdGhpcy52aWV3c1tuYW1lXSA9IHt9O1xuICAgIH1cbiAgICB0aGlzLnZpZXdzW25hbWVdW3RhcmdldF0gPSBjb21wb25lbnQ7XG4gIH1cbn1cbiJdfQ==