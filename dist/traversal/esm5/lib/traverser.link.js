/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, HostBinding, Input, } from '@angular/core';
import { Traverser } from './traverser';
import { Normalizer } from './normalizer';
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
export { TraverserButton };
if (false) {
    /** @type {?} */
    TraverserButton.prototype.traverseTo;
    /**
     * @type {?}
     * @private
     */
    TraverserButton.prototype.traverser;
}
var TraverserLink = /** @class */ (function (_super) {
    tslib_1.__extends(TraverserLink, _super);
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
export { TraverserLink };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhdmVyc2VyLmxpbmsuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLXRyYXZlcnNhbC8iLCJzb3VyY2VzIjpbImxpYi90cmF2ZXJzZXIubGluay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsV0FBVyxFQUNYLEtBQUssR0FFTixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFMUM7SUFTRSx5QkFDVSxTQUFvQjtRQUFwQixjQUFTLEdBQVQsU0FBUyxDQUFXO0lBQzNCLENBQUM7Ozs7SUFFSixpQ0FBTzs7O0lBQVA7UUFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDekMsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOztnQkFoQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLElBQUksRUFBRTt3QkFDSixTQUFTLEVBQUUsV0FBVztxQkFDdkI7aUJBQ0Y7Ozs7Z0JBUlEsU0FBUzs7OzZCQVVmLEtBQUs7O0lBVVIsc0JBQUM7Q0FBQSxBQWpCRCxJQWlCQztTQVhZLGVBQWU7OztJQUMxQixxQ0FBNEI7Ozs7O0lBRzFCLG9DQUE0Qjs7QUFTaEM7SUFNbUMseUNBQWU7SUFHaEQsdUJBQ1UsZ0JBQTJCLEVBQzNCLFVBQXNCO1FBRmhDLFlBSUUsa0JBQU0sZ0JBQWdCLENBQUMsU0FDeEI7UUFKUyxzQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQVc7UUFDM0IsZ0JBQVUsR0FBVixVQUFVLENBQVk7O0lBR2hDLENBQUM7Ozs7SUFFRCxnQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN6RCxDQUFDOztnQkFsQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6QixJQUFJLEVBQUU7d0JBQ0osU0FBUyxFQUFFLFdBQVc7cUJBQ3ZCO2lCQUNGOzs7O2dCQTNCUSxTQUFTO2dCQUNULFVBQVU7Ozt1QkE0QmhCLFdBQVc7O0lBWWQsb0JBQUM7Q0FBQSxBQW5CRCxDQU1tQyxlQUFlLEdBYWpEO1NBYlksYUFBYTs7O0lBQ3hCLDZCQUE0Qjs7Ozs7SUFHMUIseUNBQW1DOzs7OztJQUNuQyxtQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgT25Jbml0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRyYXZlcnNlciB9IGZyb20gJy4vdHJhdmVyc2VyJztcbmltcG9ydCB7IE5vcm1hbGl6ZXIgfSBmcm9tICcuL25vcm1hbGl6ZXInO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICc6bm90KGEpW3RyYXZlcnNlVG9dJyxcbiAgaG9zdDoge1xuICAgICcoY2xpY2spJzogJ29uQ2xpY2soKSdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBUcmF2ZXJzZXJCdXR0b24ge1xuICBASW5wdXQoKSB0cmF2ZXJzZVRvOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0cmF2ZXJzZXI6IFRyYXZlcnNlcixcbiAgKSB7fVxuXG4gIG9uQ2xpY2soKSB7XG4gICAgdGhpcy50cmF2ZXJzZXIudHJhdmVyc2UodGhpcy50cmF2ZXJzZVRvKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnYVt0cmF2ZXJzZVRvXScsXG4gIGhvc3Q6IHtcbiAgICAnKGNsaWNrKSc6ICdvbkNsaWNrKCknXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgVHJhdmVyc2VyTGluayBleHRlbmRzIFRyYXZlcnNlckJ1dHRvbiBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBIb3N0QmluZGluZygpIGhyZWY6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHByaXZhdGVUcmF2ZXJzZXI6IFRyYXZlcnNlcixcbiAgICBwcml2YXRlIG5vcm1hbGl6ZXI6IE5vcm1hbGl6ZXIsXG4gICkge1xuICAgIHN1cGVyKHByaXZhdGVUcmF2ZXJzZXIpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5ocmVmID0gdGhpcy5ub3JtYWxpemVyLm5vcm1hbGl6ZSh0aGlzLnRyYXZlcnNlVG8pO1xuICB9XG59XG4iXX0=