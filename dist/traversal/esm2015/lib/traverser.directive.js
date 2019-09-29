/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ComponentFactoryResolver, Directive, ViewContainerRef, } from '@angular/core';
import { Location } from '@angular/common';
import { Traverser } from './traverser';
export class TraverserOutlet {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhdmVyc2VyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItdHJhdmVyc2FsLyIsInNvdXJjZXMiOlsibGliL3RyYXZlcnNlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx3QkFBd0IsRUFFeEIsU0FBUyxFQUdULGdCQUFnQixHQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQU14QyxNQUFNLE9BQU8sZUFBZTs7Ozs7OztJQUcxQixZQUNVLFNBQW9CLEVBQ3BCLFFBQWtCLEVBQ2xCLFNBQTJCLEVBQzNCLFFBQWtDO1FBSGxDLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUMzQixhQUFRLEdBQVIsUUFBUSxDQUEwQjtJQUN4QyxDQUFDOzs7O0lBRUwsUUFBUTtRQUNOLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLE1BQWMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVM7Ozs7UUFBQyxRQUFRLENBQUMsRUFBRTtZQUNqQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3ZELENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUM3QjtJQUNILENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLE1BQWM7UUFDbkIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDN0I7UUFDRCxJQUFJLE1BQU0sQ0FBQyxTQUFTLEVBQUU7O2tCQUNkLGdCQUFnQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENBQzVELE1BQU0sQ0FBQyxTQUFTLENBQUM7WUFDbkIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1NBQ3RFO0lBQ0gsQ0FBQzs7O1lBcENGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2FBQzdCOzs7O1lBTFEsU0FBUztZQURULFFBQVE7WUFGZixnQkFBZ0I7WUFMaEIsd0JBQXdCOzs7Ozs7O0lBZXhCLHVDQUEwQjs7Ozs7SUFHeEIsb0NBQTRCOzs7OztJQUM1QixtQ0FBMEI7Ozs7O0lBQzFCLG9DQUFtQzs7Ozs7SUFDbkMsbUNBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBDb21wb25lbnRSZWYsXG4gIERpcmVjdGl2ZSxcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3ksXG4gIFZpZXdDb250YWluZXJSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgVHJhdmVyc2VyIH0gZnJvbSAnLi90cmF2ZXJzZXInO1xuaW1wb3J0IHsgVGFyZ2V0IH0gZnJvbSAnLi9pbnRlcmZhY2VzJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAndHJhdmVyc2VyLW91dGxldCcsXG59KVxuZXhwb3J0IGNsYXNzIFRyYXZlcnNlck91dGxldCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSB2aWV3SW5zdGFuY2U6IGFueTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRyYXZlcnNlcjogVHJhdmVyc2VyLFxuICAgIHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uLFxuICAgIHByaXZhdGUgY29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHByaXZhdGUgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnRyYXZlcnNlci50YXJnZXQuc3Vic2NyaWJlKCh0YXJnZXQ6IFRhcmdldCkgPT4gdGhpcy5yZW5kZXIodGFyZ2V0KSk7XG4gICAgdGhpcy50cmF2ZXJzZXIudHJhdmVyc2UodGhpcy5sb2NhdGlvbi5wYXRoKCkpO1xuICAgIHRoaXMubG9jYXRpb24uc3Vic2NyaWJlKGxvY2F0aW9uID0+IHtcbiAgICAgIHRoaXMudHJhdmVyc2VyLnRyYXZlcnNlKFN0cmluZyhsb2NhdGlvbi51cmwpLCBmYWxzZSk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy52aWV3SW5zdGFuY2UpIHtcbiAgICAgIHRoaXMudmlld0luc3RhbmNlLmRlc3Ryb3koKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIodGFyZ2V0OiBUYXJnZXQpIHtcbiAgICBpZiAodGhpcy52aWV3SW5zdGFuY2UpIHtcbiAgICAgIHRoaXMudmlld0luc3RhbmNlLmRlc3Ryb3koKTtcbiAgICB9XG4gICAgaWYgKHRhcmdldC5jb21wb25lbnQpIHtcbiAgICAgIGNvbnN0IGNvbXBvbmVudEZhY3RvcnkgPSB0aGlzLnJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KFxuICAgICAgICB0YXJnZXQuY29tcG9uZW50KTtcbiAgICAgIHRoaXMudmlld0luc3RhbmNlID0gdGhpcy5jb250YWluZXIuY3JlYXRlQ29tcG9uZW50KGNvbXBvbmVudEZhY3RvcnkpO1xuICAgIH1cbiAgfVxufVxuIl19