import { TestBed, inject } from '@angular/core/testing';
import { HttpService } from '../common/http/http.service';

import { LoginService } from './login.service';

describe('LoginService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                LoginService,
                { provide: HttpService, useValue: { } }
            ]
        });
    });

    it('should be created', inject([LoginService], (service: LoginService) => {
        expect(service).toBeTruthy();
    }));
});
