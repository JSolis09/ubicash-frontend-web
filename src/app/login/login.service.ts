import { Injectable } from '@angular/core';
import { RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import {LocalStorage, LocalStorageService} from 'ngx-webstorage';

import { HttpService } from '../common/http/http.service';
import { Auth, AccessToken } from './login.model';

@Injectable()
export class LoginService {
    private logged: boolean;
    @LocalStorage() private accessToken: AccessToken;

    constructor(private http: HttpService,
                private localStorageService: LocalStorageService) { }

    public isLogged(): boolean {
        return this.logged || !!(this.accessToken || {} as AccessToken).id;
    }

    public setLogged(logged: boolean): void {
        this.logged = logged;
    }

    public setAccessToken(accessToken: AccessToken): void {
        this.accessToken = Object.assign({}, accessToken);
    }

    public getAccessToken( ): AccessToken {
        return this.accessToken;
    }

    public login(auth: Auth): Observable<any> {
        return this.http.post('Users/login', auth);
    }

    public logout(): Observable<any> {
        return this.http
            .post('Users/logout', {})
            .map(() => this.localStorageService.clear());
    }
}
