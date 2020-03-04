import {
    Directive,
    OnInit,
    OnDestroy,
    ViewContainerRef,
    Input,
} from '@angular/core';
import { Location } from '@angular/common';
import { Traverser } from './traverser';
import { Target } from './interfaces';
import { Prefix } from "./prefix";

@Directive({
    selector: 'traverser-outlet',
})
export class TraverserOutlet implements OnInit, OnDestroy {
    @Input() noAutoTraverse = false;
    private viewInstance: any;

    constructor(
        private traverser: Traverser,
        private location: Location,
        private container: ViewContainerRef,
        private prefix: Prefix,
    ) {
    }

    ngOnInit() {
        this.traverser.target.subscribe((target: Target) => this.render(target));
        this.traverser.traverse(this.location.path().slice(this.prefix.getPrefix().length));
        if (!this.noAutoTraverse) {
            this.location.subscribe(loc => {
                this.traverser.traverse(loc.url || '', false);
            });
        }
    }

    ngOnDestroy() {
        if (this.viewInstance) {
            this.viewInstance.destroy();
        }
    }

    render(target: Target) {
        if (this.viewInstance) {
            this.viewInstance.destroy();
        }
        if (target.component) {
            const componentFactory = this.traverser.getComponent(target.component);
            this.viewInstance = this.container.createComponent(componentFactory);
        }
    }
}
