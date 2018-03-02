import { Injectable } from '@angular/core';
import { RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { HttpService } from '../common/http/http.service';
import { Auth, AccessToken } from './login.model';

@Injectable()
export class LoginService {
    private logged: boolean;
    private accessToken: AccessToken;

    constructor(private http: HttpService) { }

    public isLogged(): boolean {
        return this.logged;
    }

    public setLogged(logged: boolean): void {
        this.logged = logged;
    }

    public setAccessToken(accessToken: AccessToken): void {
        this.accessToken = Object.assign({}, accessToken);
        this.http.setAccessToken(this.accessToken.id);
    }

    public getAccessToken( ): AccessToken {
        return this.accessToken;
    }

    public login(auth: Auth): Observable<any> {
        return this.http.post('/Users/login', auth);
    }

    public logout(): Observable<any> {
        return this.http.post('/Users/logout', {});
    }
}
