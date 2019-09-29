import { ComponentFactoryResolver, OnInit, OnDestroy, ViewContainerRef } from '@angular/core';
import { Location } from '@angular/common';
import { Traverser } from './traverser';
import { Target } from './interfaces';
export declare class TraverserOutlet implements OnInit, OnDestroy {
    private traverser;
    private location;
    private container;
    private resolver;
    private viewInstance;
    constructor(traverser: Traverser, location: Location, container: ViewContainerRef, resolver: ComponentFactoryResolver);
    ngOnInit(): void;
    ngOnDestroy(): void;
    render(target: Target): void;
}
