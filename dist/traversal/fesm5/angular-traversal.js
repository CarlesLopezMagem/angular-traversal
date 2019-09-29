import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { BehaviorSubject, of } from 'rxjs';
import { __extends } from 'tslib';
import { HttpParams, HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, ComponentFactoryResolver, Directive, ViewContainerRef, HostBinding, Input, NgModule, Inject, InjectionToken } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var Resolver = /** @class */ (function () {
    function Resolver() {
    }
    Resolver.decorators = [
        { type: Injectable }
    ];
    return Resolver;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var Marker = /** @class */ (function () {
    function Marker() {
    }
    Marker.decorators = [
        { type: Injectable }
    ];
    return Marker;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Normalizer = /** @class */ (function () {
    function Normalizer() {
    }
    /**
     * @param {?} path
     * @return {?}
     */
    Normalizer.prototype.normalize = /**
     * @param {?} path
     * @return {?}
     */
    function (path) {
        return path;
    };
    Normalizer.decorators = [
        { type: Injectable }
    ];
    return Normalizer;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TraverserOutlet = /** @class */ (function () {
    function TraverserOutlet(traverser, location, container, resolver) {
        this.traverser = traverser;
        this.location = location;
        this.container = container;
        this.resolver = resolver;
    }
    /**
     * @return {?}
     */
    TraverserOutlet.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.traverser.target.subscribe((/**
         * @param {?} target
         * @return {?}
         */
        function (target) { return _this.render(target); }));
        this.traverser.traverse(this.location.path());
        this.location.subscribe((/**
         * @param {?} location
         * @return {?}
         */
        function (location) {
            _this.traverser.traverse(String(location.url), false);
        }));
    };
    /**
     * @return {?}
     */
    TraverserOutlet.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.viewInstance) {
            this.viewInstance.destroy();
        }
    };
    /**
     * @param {?} target
     * @return {?}
     */
    TraverserOutlet.prototype.render = /**
     * @param {?} target
     * @return {?}
     */
    function (target) {
        if (this.viewInstance) {
            this.viewInstance.destroy();
        }
        if (target.component) {
            /** @type {?} */
            var componentFactory = this.resolver.resolveComponentFactory(target.component);
            this.viewInstance = this.container.createComponent(componentFactory);
        }
    };
    TraverserOutlet.decorators = [
        { type: Directive, args: [{
                    selector: 'traverser-outlet',
                },] }
    ];
    /** @nocollapse */
    TraverserOutlet.ctorParameters = function () { return [
        { type: Traverser },
        { type: Location },
        { type: ViewContainerRef },
        { type: ComponentFactoryResolver }
    ]; };
    return TraverserOutlet;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TraverserButton = /** @class */ (function () {
    function TraverserButton(traverser) {
        this.traverser = traverser;
    }
    /**
     * @return {?}
     */
    TraverserButton.prototype.onClick = /**
     * @return {?}
     */
    function () {
        this.traverser.traverse(this.traverseTo);
        return false;
    };
    TraverserButton.decorators = [
        { type: Directive, args: [{
                    selector: ':not(a)[traverseTo]',
                    host: {
                        '(click)': 'onClick()'
                    }
                },] }
    ];
    /** @nocollapse */
    TraverserButton.ctorParameters = function () { return [
        { type: Traverser }
    ]; };
    TraverserButton.propDecorators = {
        traverseTo: [{ type: Input }]
    };
    return TraverserButton;
}());
var TraverserLink = /** @class */ (function (_super) {
    __extends(TraverserLink, _super);
    function TraverserLink(privateTraverser, normalizer) {
        var _this = _super.call(this, privateTraverser) || this;
        _this.privateTraverser = privateTraverser;
        _this.normalizer = normalizer;
        return _this;
    }
    /**
     * @return {?}
     */
    TraverserLink.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.href = this.normalizer.normalize(this.traverseTo);
    };
    TraverserLink.decorators = [
        { type: Directive, args: [{
                    selector: 'a[traverseTo]',
                    host: {
                        '(click)': 'onClick()'
                    }
                },] }
    ];
    /** @nocollapse */
    TraverserLink.ctorParameters = function () { return [
        { type: Traverser },
        { type: Normalizer }
    ]; };
    TraverserLink.propDecorators = {
        href: [{ type: HostBinding }]
    };
    return TraverserLink;
}(TraverserButton));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TraversalModule = /** @class */ (function () {
    function TraversalModule() {
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
    return TraversalModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// the actual value will be provided by the module
/** @type {?} */
var BACKEND_BASE_URL = new InjectionToken('backend.base.url');
var BasicHttpResolver = /** @class */ (function (_super) {
    __extends(BasicHttpResolver, _super);
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