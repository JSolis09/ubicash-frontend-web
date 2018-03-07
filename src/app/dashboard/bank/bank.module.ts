import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { BankComponent } from './bank.component';
import { BankService } from './bank.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [ BankComponent ],
    providers: [ BankService ]
})
export class BankModule { }
