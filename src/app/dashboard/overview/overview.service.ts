import { Injectable } from '@angular/core';
import { RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { HttpService } from '../../common/http/http.service';
import { Log } from './overview.model';

@Injectable()
export class OverviewService {

    constructor(private http: HttpService) { }

    public getLogs(query: string): Observable<Log[]> {
        const options: RequestOptions = new RequestOptions();
        if (!!query) {
            const filter: any = {
                where: {
                    or: [
                        {
                            bank_name: {
                                like: `%${query}%`
                            }
                        },
                        {
                            location: {
                                like: `%${query}%`
                            }
                        },
                        {
                            user_email: {
                                like: `%${query}%`
                            }
                        },
                        {
                            branch: {
                                like: `%${query}%`
                            }
                        }
                    ]
                }
            };
            options.params = new URLSearchParams();
            options.params.set('filter', JSON.stringify(filter));
        }
        return this.http.get('Logs', options);
    }

}
