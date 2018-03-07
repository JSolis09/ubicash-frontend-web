import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, URLSearchParams } from '@angular/http';
import {LocalStorage } from 'ngx-webstorage';

import { AccessToken } from '../../login/login.model';
import { LoginService } from '../../login/login.service';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {
    private host = `${environment.host}/${environment.prefix}/`;
    @LocalStorage() private accessToken: AccessToken;

    constructor(private http: Http) { }

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

    public put(url: string, data: any, config?: RequestOptions): Observable<any> {
        url = url || '';
        config = config || new RequestOptions();
        this.validRequestOptions(url, config, 'put');
        const api = `${this.host}${url}`;
        return this.http
            .put(api, data, config)
            .map((response) => response.json());
    }

    public delete(url: string, config?: RequestOptions): Observable<any> {
        url = url || '';
        config = config || new RequestOptions();
        this.validRequestOptions(url, config, 'delete');
        const api = `${this.host}${url}`;
        return this.http
            .delete(api, config)
            .map((response) => response.json());
    }

    private validRequestOptions(url: string, config: RequestOptions, verb: 'get' | 'post' | 'put' | 'delete') {
        if (!!this.accessToken && !!this.accessToken.id) {
            if (url.indexOf('login') === -1) {
                if (verb === 'get' || verb === 'delete') {
                    config.params = config.params || new URLSearchParams();
                    config.params.set('access_token', this.accessToken.id);
                }
                if (verb === 'post' || verb === 'put') {
                    config.headers = config.headers || new Headers();
                    config.headers.set('Authorization', this.accessToken.id);
                }
            }
        }
    }
}
