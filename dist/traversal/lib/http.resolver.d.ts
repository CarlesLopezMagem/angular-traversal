import { HttpClient } from '@angular/common/http';
import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { Resolver } from './resolver';
export declare let BACKEND_BASE_URL: InjectionToken<{}>;
export declare class BasicHttpResolver extends Resolver {
    private http;
    private backend;
    constructor(http: HttpClient, backend: string);
    resolve(path: string, view: string, queryString?: string): Observable<any>;
}
