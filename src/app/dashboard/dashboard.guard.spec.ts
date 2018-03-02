import { TestBed, async, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { DashboardGuard } from './dashboard.guard';
import { LoginService } from '../login/login.service';

describe('DashboardGuard', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule
            ],
            providers: [
                { provide: LoginService, useValue: {} },
                DashboardGuard
            ]
        });
    });

    it('should ...', inject([DashboardGuard], (guard: DashboardGuard) => {
        expect(guard).toBeTruthy();
    }));
});
