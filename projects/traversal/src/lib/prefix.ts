import { Injectable, Optional, Inject, InjectionToken } from '@angular/core';

export const NAVIGATION_PREFIX = new InjectionToken<string>('traversal.prefix');


@Injectable()
export class Prefix {
    protected prefix: string;
    constructor(
        @Optional() @Inject(NAVIGATION_PREFIX) prefix: string,
    ) {
        this.prefix = prefix || '';
    }

    getPrefix(): string {
        return this.prefix;
    }
}
