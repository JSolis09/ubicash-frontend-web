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
    }

    public login(auth: Auth): Observable<any> {
        return this.http.post('/Users/login', auth);
    }

    public logout(): Observable<any> {
        const headers: Headers = new Headers();
        headers.set('Authorization', this.accessToken.id);
        const requestOptions: RequestOptions = new RequestOptions({
            headers: headers
        });
        return this.http.post('/Users/logout', {}, requestOptions);
    }
}
