import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, URLSearchParams } from '@angular/http';

import { LoginService } from '../../login/login.service';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {
    private host = `${environment.host}/${environment.prefix}/`;
    private accessToken: string;

    constructor(private http: Http) { }

    public setAccessToken(accessToken: string): void {
        this.accessToken = accessToken;
    }

    public get(url: string, config?: RequestOptions): Observable<any> {
        url = url || '';
        config = config || new RequestOptions();
        this.validRequestOptions(url, config, 'get');
        const api = `${this.host}${url}`;
        return this.http
            .get(api, config)
            .map((response) => response.json() );
    }

    public post(url: string, data: any, config?: RequestOptions): Observable<any> {
        url = url || '';
        config = config || new RequestOptions();
        this.validRequestOptions(url, config, 'post');
        const api = `${this.host}${url}`;
        return this.http
            .post(api, data, config)
            .map((response) => response.json());
    }

    private validRequestOptions(url: string, config: RequestOptions, verb: 'get' | 'post') {
        if (!!this.accessToken) {
            if (url.indexOf('login') === -1) {
                if (verb === 'get') {
                    config.params = config.params || new URLSearchParams();
                    config.params.set('access_token', this.accessToken);
                }
                if (verb === 'post') {
                    config.headers = config.headers || new Headers();
                    config.headers.set('Authorization', this.accessToken);
                }
            }
        }
    }
}
