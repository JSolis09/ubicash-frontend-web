import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { OverviewComponent } from './overview.component';
import { OverviewService } from './overview.service';
import { HttpService } from '../../common/http/http.service';

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule
    ],
    declarations: [ OverviewComponent ],
    providers: [
        HttpService,
        OverviewService
    ]
})
export class OverviewModule { }
