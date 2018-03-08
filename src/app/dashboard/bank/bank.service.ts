import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpService } from '../../common/http/http.service';
import { Bank } from './bank.model';

@Injectable()
export class BankService {

    constructor(private http: HttpService) { }

    public getBanks(): Observable<Bank[]> {
        return this.http.get('Banks');
    }

    public createOrUpdate(bank: Bank): Observable<Bank[]> {
        return this.http.put('Banks', bank);
    }

    public remove(id: string): Observable<Bank[]> {
        return this.http.delete(`Banks/${ id }`);
    }

}
