import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {
    private host = `${environment.host}/${environment.prefix}/`;
    constructor(private http: Http) { }

    public get(url: string, config?: RequestOptions): Observable<any> {
        const api = `${this.host}${url}`;
        return this.http.get(api, config);
    }

    public post(url: string, data: any, config?: RequestOptions): Observable<any> {
        const api = `${this.host}${url}`;
        return this.http
            .post(api, data, config)
            .map((response) => response.json());
    }

}
