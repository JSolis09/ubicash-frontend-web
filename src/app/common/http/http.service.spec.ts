import { TestBed, inject } from '@angular/core/testing';
import { Http, BaseRequestOptions, Headers, ResponseOptions, Response } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { HttpService } from './http.service';

describe('HttpService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                MockBackend,
                BaseRequestOptions,
                HttpService,
                {
                    provide: Http,
                    useFactory: (backendInstance: MockBackend, defaultOptions: BaseRequestOptions) => {
                        return new Http(backendInstance, defaultOptions);
                    },
                    deps: [MockBackend, BaseRequestOptions]
                }
            ]
        });
    });

    it('should be created', inject([HttpService], (service: HttpService) => {
        expect(service).toBeTruthy();
    }));
});
