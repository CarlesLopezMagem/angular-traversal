import { Observable } from 'rxjs';
export declare abstract class Resolver {
    abstract resolve(path: string, view: string, queryString?: string): Observable<any>;
}
