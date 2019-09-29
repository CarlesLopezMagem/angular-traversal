/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ComponentFactoryResolver, Directive, ViewContainerRef, } from '@angular/core';
import { Location } from '@angular/common';
import { Traverser } from './traverser';
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
export { TraverserOutlet };
if (false) {
    /**
     * @type {?}
     * @private
     */
    TraverserOutlet.prototype.viewInstance;
    /**
     * @type {?}
     * @private
     */
    TraverserOutlet.prototype.traverser;
    /**
     * @type {?}
     * @private
     */
    TraverserOutlet.prototype.location;
    /**
     * @type {?}
     * @private
     */
    TraverserOutlet.prototype.container;
    /**
     * @type {?}
     * @private
     */
    TraverserOutlet.prototype.resolver;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhdmVyc2VyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItdHJhdmVyc2FsLyIsInNvdXJjZXMiOlsibGliL3RyYXZlcnNlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx3QkFBd0IsRUFFeEIsU0FBUyxFQUdULGdCQUFnQixHQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUd4QztJQU1FLHlCQUNVLFNBQW9CLEVBQ3BCLFFBQWtCLEVBQ2xCLFNBQTJCLEVBQzNCLFFBQWtDO1FBSGxDLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUMzQixhQUFRLEdBQVIsUUFBUSxDQUEwQjtJQUN4QyxDQUFDOzs7O0lBRUwsa0NBQVE7OztJQUFSO1FBQUEsaUJBTUM7UUFMQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxNQUFjLElBQUssT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFuQixDQUFtQixFQUFDLENBQUM7UUFDekUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUzs7OztRQUFDLFVBQUEsUUFBUTtZQUM5QixLQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3ZELENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELHFDQUFXOzs7SUFBWDtRQUNFLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQzdCO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxnQ0FBTTs7OztJQUFOLFVBQU8sTUFBYztRQUNuQixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUM3QjtRQUNELElBQUksTUFBTSxDQUFDLFNBQVMsRUFBRTs7Z0JBQ2QsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsQ0FDNUQsTUFBTSxDQUFDLFNBQVMsQ0FBQztZQUNuQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLENBQUM7U0FDdEU7SUFDSCxDQUFDOztnQkFwQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7aUJBQzdCOzs7O2dCQUxRLFNBQVM7Z0JBRFQsUUFBUTtnQkFGZixnQkFBZ0I7Z0JBTGhCLHdCQUF3Qjs7SUFnRDFCLHNCQUFDO0NBQUEsQUFyQ0QsSUFxQ0M7U0FsQ1ksZUFBZTs7Ozs7O0lBQzFCLHVDQUEwQjs7Ozs7SUFHeEIsb0NBQTRCOzs7OztJQUM1QixtQ0FBMEI7Ozs7O0lBQzFCLG9DQUFtQzs7Ozs7SUFDbkMsbUNBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBDb21wb25lbnRSZWYsXG4gIERpcmVjdGl2ZSxcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3ksXG4gIFZpZXdDb250YWluZXJSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgVHJhdmVyc2VyIH0gZnJvbSAnLi90cmF2ZXJzZXInO1xuaW1wb3J0IHsgVGFyZ2V0IH0gZnJvbSAnLi9pbnRlcmZhY2VzJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAndHJhdmVyc2VyLW91dGxldCcsXG59KVxuZXhwb3J0IGNsYXNzIFRyYXZlcnNlck91dGxldCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSB2aWV3SW5zdGFuY2U6IGFueTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRyYXZlcnNlcjogVHJhdmVyc2VyLFxuICAgIHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uLFxuICAgIHByaXZhdGUgY29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHByaXZhdGUgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnRyYXZlcnNlci50YXJnZXQuc3Vic2NyaWJlKCh0YXJnZXQ6IFRhcmdldCkgPT4gdGhpcy5yZW5kZXIodGFyZ2V0KSk7XG4gICAgdGhpcy50cmF2ZXJzZXIudHJhdmVyc2UodGhpcy5sb2NhdGlvbi5wYXRoKCkpO1xuICAgIHRoaXMubG9jYXRpb24uc3Vic2NyaWJlKGxvY2F0aW9uID0+IHtcbiAgICAgIHRoaXMudHJhdmVyc2VyLnRyYXZlcnNlKFN0cmluZyhsb2NhdGlvbi51cmwpLCBmYWxzZSk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy52aWV3SW5zdGFuY2UpIHtcbiAgICAgIHRoaXMudmlld0luc3RhbmNlLmRlc3Ryb3koKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIodGFyZ2V0OiBUYXJnZXQpIHtcbiAgICBpZiAodGhpcy52aWV3SW5zdGFuY2UpIHtcbiAgICAgIHRoaXMudmlld0luc3RhbmNlLmRlc3Ryb3koKTtcbiAgICB9XG4gICAgaWYgKHRhcmdldC5jb21wb25lbnQpIHtcbiAgICAgIGNvbnN0IGNvbXBvbmVudEZhY3RvcnkgPSB0aGlzLnJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KFxuICAgICAgICB0YXJnZXQuY29tcG9uZW50KTtcbiAgICAgIHRoaXMudmlld0luc3RhbmNlID0gdGhpcy5jb250YWluZXIuY3JlYXRlQ29tcG9uZW50KGNvbXBvbmVudEZhY3RvcnkpO1xuICAgIH1cbiAgfVxufVxuIl19