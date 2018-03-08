import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { BankComponent } from './bank.component';
import { BankService } from './bank.service';

describe('BankComponent', () => {
    let component: BankComponent;
    let fixture: ComponentFixture<BankComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ BankComponent ],
            imports: [
                FormsModule,
                BrowserModule
            ],
            providers: [
                { provide: BankService, useValue: {} }
            ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BankComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
