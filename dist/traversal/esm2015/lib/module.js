/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TraverserOutlet } from './traverser.directive';
import { TraverserLink, TraverserButton } from './traverser.link';
import { Traverser } from './traverser';
export class TraversalModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci10cmF2ZXJzYWwvIiwic291cmNlcyI6WyJsaWIvbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNuRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUV4RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBc0J4QyxNQUFNLE9BQU8sZUFBZTs7O1lBcEIzQixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFO29CQUNaLGVBQWU7b0JBQ2YsZUFBZTtvQkFDZixhQUFhO2lCQUNkO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxnQkFBZ0I7aUJBQ2pCO2dCQUNELFNBQVMsRUFBRTtvQkFDVCxRQUFRO29CQUNSLEVBQUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxvQkFBb0IsRUFBRTtvQkFDN0QsU0FBUztpQkFDVjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsZUFBZTtvQkFDZixlQUFlO29CQUNmLGFBQWE7aUJBQ2Q7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMb2NhdGlvbiwgTG9jYXRpb25TdHJhdGVneSwgUGF0aExvY2F0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgVHJhdmVyc2VyT3V0bGV0IH0gZnJvbSAnLi90cmF2ZXJzZXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IFRyYXZlcnNlckxpbmssIFRyYXZlcnNlckJ1dHRvbiB9IGZyb20gJy4vdHJhdmVyc2VyLmxpbmsnO1xuaW1wb3J0IHsgVHJhdmVyc2VyIH0gZnJvbSAnLi90cmF2ZXJzZXInO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBUcmF2ZXJzZXJPdXRsZXQsXG4gICAgVHJhdmVyc2VyQnV0dG9uLFxuICAgIFRyYXZlcnNlckxpbmssXG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBMb2NhdGlvbixcbiAgICB7IHByb3ZpZGU6IExvY2F0aW9uU3RyYXRlZ3ksIHVzZUNsYXNzOiBQYXRoTG9jYXRpb25TdHJhdGVneSB9LFxuICAgIFRyYXZlcnNlcixcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFRyYXZlcnNlck91dGxldCxcbiAgICBUcmF2ZXJzZXJCdXR0b24sXG4gICAgVHJhdmVyc2VyTGluayxcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBUcmF2ZXJzYWxNb2R1bGUge1xufVxuIl19