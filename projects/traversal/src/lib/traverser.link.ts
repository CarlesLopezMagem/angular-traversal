import {
    Directive,
    HostBinding,
    Input,
    OnInit,
    HostListener,
} from '@angular/core';
import { Traverser } from './traverser';
import { Normalizer } from './normalizer';
import { Prefix } from "./prefix";

@Directive({
    selector: ':not(a)[traverseTo]',
})
export class TraverserButton {
    @Input() traverseTo?: string;

    constructor(
        private traverser: Traverser,
    ) { }

    @HostListener('click', ['$event'])
    onClick(event: MouseEvent) {
        event.preventDefault();
        if (!!this.traverseTo) {
            this.traverser.traverse(this.traverseTo);
        }
    }
}

@Directive({
    selector: 'a[traverseTo]',
})
export class TraverserLink extends TraverserButton implements OnInit {
    @HostBinding() href?: string;

    constructor(
        private privateTraverser: Traverser,
        private normalizer: Normalizer,
        private prefix: Prefix,
    ) {
        super(privateTraverser);
    }

    ngOnInit() {
        if (!!this.traverseTo) {
            this.href = this.prefix.getPrefix() + this.normalizer.normalize(this.traverseTo);
        }
    }
}
