import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewComponent } from './overview.component';
import { OverviewService } from './overview.service';

describe('OverviewComponent', () => {
    let component: OverviewComponent;
    let fixture: ComponentFixture<OverviewComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ OverviewComponent ],
            providers: [
                { provide: OverviewService, useValue: {} }
            ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(OverviewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
