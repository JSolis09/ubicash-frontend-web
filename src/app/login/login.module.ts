import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
import { LoginRoutes } from './login.route';
import { LoginService } from './login.service';
import { HttpService } from '../common/http/http.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forChild([
            ...LoginRoutes
        ])
    ],
    declarations: [LoginComponent],
    providers: [
        HttpService,
        LoginService
    ]
})
export class LoginModule { }
