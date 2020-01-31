import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { TraverserOutlet } from './traverser.directive';
import { TraverserLink, TraverserButton } from './traverser.link';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Traverser } from "./traverser";

@NgModule({
    declarations: [
        TraverserOutlet,
        TraverserButton,
        TraverserLink,
    ],
    imports: [
        HttpClientModule,
    ],
    exports: [
        TraverserOutlet,
        TraverserButton,
        TraverserLink,
    ],
    providers: [
        Location,
        { provide: LocationStrategy, useClass: PathLocationStrategy },
    ]
})
export class TraversalModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: TraversalModule,
            providers: [
                Traverser,
            ]
        };
    }
}
