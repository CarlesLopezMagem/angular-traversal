import { Location } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { Resolver } from './resolver';
import { Marker } from './marker';
import { Normalizer } from './normalizer';
import { Target } from './interfaces';
export declare class Traverser {
    private location;
    private resolver;
    private marker;
    private normalizer;
    target: BehaviorSubject<Target>;
    private views;
    constructor(location: Location, resolver: Resolver, marker: Marker, normalizer: Normalizer);
    traverse(path: string, navigate?: boolean): void;
    traverseHere(): void;
    addView(name: string, target: string, component: any): void;
}
