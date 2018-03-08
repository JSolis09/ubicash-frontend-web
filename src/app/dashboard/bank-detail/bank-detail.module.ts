import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { BankDetailService } from './bank-detail.service';
import { BankService } from '../bank/bank.service';
import { BankDetailComponent } from './bank-detail.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [ BankDetailComponent ],
    providers: [
        BankService,
        BankDetailService
    ]
})
export class BankDetailModule { }
