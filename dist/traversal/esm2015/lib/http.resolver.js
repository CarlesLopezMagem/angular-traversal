/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Resolver } from './resolver';
// the actual value will be provided by the module
/** @type {?} */
export let BACKEND_BASE_URL = new InjectionToken('backend.base.url');
export class BasicHttpResolver extends Resolver {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5yZXNvbHZlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItdHJhdmVyc2FsLyIsInNvdXJjZXMiOlsibGliL2h0dHAucmVzb2x2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDL0QsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5FLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxZQUFZLENBQUM7OztBQUd0QyxNQUFNLEtBQUssZ0JBQWdCLEdBQUcsSUFBSSxjQUFjLENBQUMsa0JBQWtCLENBQUM7QUFHcEUsTUFBTSxPQUFPLGlCQUFrQixTQUFRLFFBQVE7Ozs7O0lBRTdDLFlBQ1UsSUFBZ0IsRUFDVSxPQUFlO1FBRWpELEtBQUssRUFBRSxDQUFDO1FBSEEsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNVLFlBQU8sR0FBUCxPQUFPLENBQVE7SUFHbkQsQ0FBQzs7Ozs7OztJQUVELE9BQU8sQ0FBQyxJQUFZLEVBQUUsSUFBWSxFQUFFLFdBQW9COztjQUNoRCxPQUFPLEdBQUcsSUFBSSxXQUFXLEVBQUU7YUFDOUIsTUFBTSxDQUFDLFFBQVEsRUFBRSxrQkFBa0IsQ0FBQzthQUNwQyxNQUFNLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDO1FBQzdDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQ3pELENBQUM7OztZQWZGLFVBQVU7Ozs7WUFSRixVQUFVO3lDQWFkLE1BQU0sU0FBQyxnQkFBZ0I7Ozs7Ozs7SUFEeEIsaUNBQXdCOzs7OztJQUN4QixvQ0FBaUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFJlc29sdmVyIH0gZnJvbSAnLi9yZXNvbHZlcic7XG5cbi8vIHRoZSBhY3R1YWwgdmFsdWUgd2lsbCBiZSBwcm92aWRlZCBieSB0aGUgbW9kdWxlXG5leHBvcnQgbGV0IEJBQ0tFTkRfQkFTRV9VUkwgPSBuZXcgSW5qZWN0aW9uVG9rZW4oJ2JhY2tlbmQuYmFzZS51cmwnKTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJhc2ljSHR0cFJlc29sdmVyIGV4dGVuZHMgUmVzb2x2ZXIge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgICBASW5qZWN0KEJBQ0tFTkRfQkFTRV9VUkwpIHByaXZhdGUgYmFja2VuZDogc3RyaW5nLFxuICApIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgcmVzb2x2ZShwYXRoOiBzdHJpbmcsIHZpZXc6IHN0cmluZywgcXVlcnlTdHJpbmc/OiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKVxuICAgICAgLmFwcGVuZCgnQWNjZXB0JywgJ2FwcGxpY2F0aW9uL2pzb24nKVxuICAgICAgLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmJhY2tlbmQgKyBwYXRoLCB7IGhlYWRlcnMgfSk7XG4gIH1cbn1cbiJdfQ==