import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';
import { LoginRoutes } from './login.route';

@NgModule({
    imports: [
        RouterModule.forChild([
            ...LoginRoutes
        ])
    ],
    declarations: [LoginComponent]
})
export class LoginModule { }
