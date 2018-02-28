import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpService } from '../common/http/http.service';
import { Auth } from './login.model';

@Injectable()
export class LoginService {

    constructor(private http: HttpService) { }

    login(auth: Auth): Observable<any> {
        return this.http.post('/Users/login', auth);
    }
}
