import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Ng2Webstorage } from 'ngx-webstorage';

import { AppComponent } from './app.component';
import { CommonModule } from './common/common.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { LoginModule } from './login/login.module';
import * as $ from 'jquery';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        DashboardModule,
        LoginModule,
        Ng2Webstorage.forRoot({
            prefix: 'uc-storage',
            separator: '.',
            caseSensitive: true
        }),
        RouterModule.forRoot([])
    ],
    providers: [
        { provide: LOCALE_ID, useValue: 'es-ES' }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
