import { Injectable } from '@angular/core';
import { RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { HttpService } from '../../common/http/http.service';
import { BankDetail } from '../bank/bank.model';

@Injectable()
export class BankDetailService {

    constructor(private http: HttpService) { }

    public getBankDetails(bankId: string, query: string): Observable<BankDetail[]> {
        const options: RequestOptions = new RequestOptions();
        if (!!query) {
            const filter: any = {
                where: {
                    or: [
                        {
                            address: {
                                ilike: `%${query}%`
                            }
                        },
                        {
                            detail: {
                                ilike: `%${query}%`
                            }
                        }
                    ]
                }
            };
            options.params = new URLSearchParams();
            options.params.set('filter', JSON.stringify(filter));
        }
        return this.http.get(`Banks/${ bankId }/bankDetails`, options);
    }

    public createOrUpdate(bank: BankDetail): Observable<BankDetail[]> {
        return this.http.put('BankDetails', bank);
    }

    public remove(id: string): Observable<BankDetail[]> {
        return this.http.delete(`BankDetails/${ id }`);
    }

}
