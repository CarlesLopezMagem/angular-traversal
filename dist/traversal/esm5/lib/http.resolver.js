/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Resolver } from './resolver';
// the actual value will be provided by the module
/** @type {?} */
export var BACKEND_BASE_URL = new InjectionToken('backend.base.url');
var BasicHttpResolver = /** @class */ (function (_super) {
    tslib_1.__extends(BasicHttpResolver, _super);
    function BasicHttpResolver(http, backend) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.backend = backend;
        return _this;
    }
    /**
     * @param {?} path
     * @param {?} view
     * @param {?=} queryString
     * @return {?}
     */
    BasicHttpResolver.prototype.resolve = /**
     * @param {?} path
     * @param {?} view
     * @param {?=} queryString
     * @return {?}
     */
    function (path, view, queryString) {
        /** @type {?} */
        var headers = new HttpHeaders()
            .append('Accept', 'application/json')
            .append('Content-Type', 'application/json');
        return this.http.get(this.backend + path, { headers: headers });
    };
    BasicHttpResolver.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    BasicHttpResolver.ctorParameters = function () { return [
        { type: HttpClient },
        { type: String, decorators: [{ type: Inject, args: [BACKEND_BASE_URL,] }] }
    ]; };
    return BasicHttpResolver;
}(Resolver));
export { BasicHttpResolver };
if (false) {
    /**
     * @type {?}
     * @private
     */
    BasicHttpResolver.prototype.http;
    /**
     * @type {?}
     * @private
     */
    BasicHttpResolver.prototype.backend;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5yZXNvbHZlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItdHJhdmVyc2FsLyIsInNvdXJjZXMiOlsibGliL2h0dHAucmVzb2x2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVuRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sWUFBWSxDQUFDOzs7QUFHdEMsTUFBTSxLQUFLLGdCQUFnQixHQUFHLElBQUksY0FBYyxDQUFDLGtCQUFrQixDQUFDO0FBRXBFO0lBQ3VDLDZDQUFRO0lBRTdDLDJCQUNVLElBQWdCLEVBQ1UsT0FBZTtRQUZuRCxZQUlFLGlCQUFPLFNBQ1I7UUFKUyxVQUFJLEdBQUosSUFBSSxDQUFZO1FBQ1UsYUFBTyxHQUFQLE9BQU8sQ0FBUTs7SUFHbkQsQ0FBQzs7Ozs7OztJQUVELG1DQUFPOzs7Ozs7SUFBUCxVQUFRLElBQVksRUFBRSxJQUFZLEVBQUUsV0FBb0I7O1lBQ2hELE9BQU8sR0FBRyxJQUFJLFdBQVcsRUFBRTthQUM5QixNQUFNLENBQUMsUUFBUSxFQUFFLGtCQUFrQixDQUFDO2FBQ3BDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUM7UUFDN0MsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksRUFBRSxFQUFFLE9BQU8sU0FBQSxFQUFFLENBQUMsQ0FBQztJQUN6RCxDQUFDOztnQkFmRixVQUFVOzs7O2dCQVJGLFVBQVU7NkNBYWQsTUFBTSxTQUFDLGdCQUFnQjs7SUFXNUIsd0JBQUM7Q0FBQSxBQWhCRCxDQUN1QyxRQUFRLEdBZTlDO1NBZlksaUJBQWlCOzs7Ozs7SUFHMUIsaUNBQXdCOzs7OztJQUN4QixvQ0FBaUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFJlc29sdmVyIH0gZnJvbSAnLi9yZXNvbHZlcic7XG5cbi8vIHRoZSBhY3R1YWwgdmFsdWUgd2lsbCBiZSBwcm92aWRlZCBieSB0aGUgbW9kdWxlXG5leHBvcnQgbGV0IEJBQ0tFTkRfQkFTRV9VUkwgPSBuZXcgSW5qZWN0aW9uVG9rZW4oJ2JhY2tlbmQuYmFzZS51cmwnKTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJhc2ljSHR0cFJlc29sdmVyIGV4dGVuZHMgUmVzb2x2ZXIge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgICBASW5qZWN0KEJBQ0tFTkRfQkFTRV9VUkwpIHByaXZhdGUgYmFja2VuZDogc3RyaW5nLFxuICApIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgcmVzb2x2ZShwYXRoOiBzdHJpbmcsIHZpZXc6IHN0cmluZywgcXVlcnlTdHJpbmc/OiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKVxuICAgICAgLmFwcGVuZCgnQWNjZXB0JywgJ2FwcGxpY2F0aW9uL2pzb24nKVxuICAgICAgLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmJhY2tlbmQgKyBwYXRoLCB7IGhlYWRlcnMgfSk7XG4gIH1cbn1cbiJdfQ==