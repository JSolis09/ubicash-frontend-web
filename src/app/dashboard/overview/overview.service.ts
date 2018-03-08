import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpService } from '../../common/http/http.service';
import { Log } from './overview.model';

@Injectable()
export class OverviewService {

    constructor(private http: HttpService) { }

    public getLogs(): Observable<Log[]> {
        return this.http.get('Logs');
    }

}