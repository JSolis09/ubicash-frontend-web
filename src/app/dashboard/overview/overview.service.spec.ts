import { TestBed, inject } from '@angular/core/testing';

import { HttpService } from '../../common/http/http.service';
import { OverviewService } from './overview.service';

describe('OverviewService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                { provide: HttpService, useValue: {} },
                OverviewService
            ]
        });
    });

    it('should be created', inject([OverviewService], (service: OverviewService) => {
        expect(service).toBeTruthy();
    }));
});
