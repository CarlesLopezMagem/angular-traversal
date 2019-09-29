/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostBinding, Input, } from '@angular/core';
import { Traverser } from './traverser';
import { Normalizer } from './normalizer';
export class TraverserButton {
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
if (false) {
    /** @type {?} */
    TraverserButton.prototype.traverseTo;
    /**
     * @type {?}
     * @private
     */
    TraverserButton.prototype.traverser;
}
export class TraverserLink extends TraverserButton {
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
if (false) {
    /** @type {?} */
    TraverserLink.prototype.href;
    /**
     * @type {?}
     * @private
     */
    TraverserLink.prototype.privateTraverser;
    /**
     * @type {?}
     * @private
     */
    TraverserLink.prototype.normalizer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhdmVyc2VyLmxpbmsuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLXRyYXZlcnNhbC8iLCJzb3VyY2VzIjpbImxpYi90cmF2ZXJzZXIubGluay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxXQUFXLEVBQ1gsS0FBSyxHQUVOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDeEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQVExQyxNQUFNLE9BQU8sZUFBZTs7OztJQUcxQixZQUNVLFNBQW9CO1FBQXBCLGNBQVMsR0FBVCxTQUFTLENBQVc7SUFDM0IsQ0FBQzs7OztJQUVKLE9BQU87UUFDTCxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDekMsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzs7WUFoQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLElBQUksRUFBRTtvQkFDSixTQUFTLEVBQUUsV0FBVztpQkFDdkI7YUFDRjs7OztZQVJRLFNBQVM7Ozt5QkFVZixLQUFLOzs7O0lBQU4scUNBQTRCOzs7OztJQUcxQixvQ0FBNEI7O0FBZWhDLE1BQU0sT0FBTyxhQUFjLFNBQVEsZUFBZTs7Ozs7SUFHaEQsWUFDVSxnQkFBMkIsRUFDM0IsVUFBc0I7UUFFOUIsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFIaEIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFXO1FBQzNCLGVBQVUsR0FBVixVQUFVLENBQVk7SUFHaEMsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN6RCxDQUFDOzs7WUFsQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6QixJQUFJLEVBQUU7b0JBQ0osU0FBUyxFQUFFLFdBQVc7aUJBQ3ZCO2FBQ0Y7Ozs7WUEzQlEsU0FBUztZQUNULFVBQVU7OzttQkE0QmhCLFdBQVc7Ozs7SUFBWiw2QkFBNEI7Ozs7O0lBRzFCLHlDQUFtQzs7Ozs7SUFDbkMsbUNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUcmF2ZXJzZXIgfSBmcm9tICcuL3RyYXZlcnNlcic7XG5pbXBvcnQgeyBOb3JtYWxpemVyIH0gZnJvbSAnLi9ub3JtYWxpemVyJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnOm5vdChhKVt0cmF2ZXJzZVRvXScsXG4gIGhvc3Q6IHtcbiAgICAnKGNsaWNrKSc6ICdvbkNsaWNrKCknXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgVHJhdmVyc2VyQnV0dG9uIHtcbiAgQElucHV0KCkgdHJhdmVyc2VUbzogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdHJhdmVyc2VyOiBUcmF2ZXJzZXIsXG4gICkge31cblxuICBvbkNsaWNrKCkge1xuICAgIHRoaXMudHJhdmVyc2VyLnRyYXZlcnNlKHRoaXMudHJhdmVyc2VUbyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2FbdHJhdmVyc2VUb10nLFxuICBob3N0OiB7XG4gICAgJyhjbGljayknOiAnb25DbGljaygpJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIFRyYXZlcnNlckxpbmsgZXh0ZW5kcyBUcmF2ZXJzZXJCdXR0b24gaW1wbGVtZW50cyBPbkluaXQge1xuICBASG9zdEJpbmRpbmcoKSBocmVmOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBwcml2YXRlVHJhdmVyc2VyOiBUcmF2ZXJzZXIsXG4gICAgcHJpdmF0ZSBub3JtYWxpemVyOiBOb3JtYWxpemVyLFxuICApIHtcbiAgICBzdXBlcihwcml2YXRlVHJhdmVyc2VyKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaHJlZiA9IHRoaXMubm9ybWFsaXplci5ub3JtYWxpemUodGhpcy50cmF2ZXJzZVRvKTtcbiAgfVxufVxuIl19