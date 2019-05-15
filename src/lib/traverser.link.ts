import {
    Directive,
    Input,
    OnInit,
    HostListener,
    HostBinding,
} from '@angular/core';
import { Traverser } from './traverser';
import { Normalizer } from './normalizer';

@Directive({
    selector: ':not(a)[traverseTo]',
})
export class TraverserButton {
    @Input() traverseTo?: string;

    constructor(
        private traverser: Traverser,
    ) { }

    @HostListener('click')
    onClick() {
        if (!!this.traverseTo) {
            this.traverser.traverse(this.traverseTo);
        }
        return false;
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
    ) {
        super(privateTraverser);
    }

    ngOnInit() {
        if (!!this.traverseTo) {
            this.href = this.normalizer.normalize(this.traverseTo);
        }
    }
}
