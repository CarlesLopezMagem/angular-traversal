import { OnInit } from '@angular/core';
import { Traverser } from './traverser';
import { Normalizer } from './normalizer';
export declare class TraverserButton {
    private traverser;
    traverseTo: string;
    constructor(traverser: Traverser);
    onClick(): boolean;
}
export declare class TraverserLink extends TraverserButton implements OnInit {
    private privateTraverser;
    private normalizer;
    href: string;
    constructor(privateTraverser: Traverser, normalizer: Normalizer);
    ngOnInit(): void;
}
