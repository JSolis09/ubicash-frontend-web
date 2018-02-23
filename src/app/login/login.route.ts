import { Routes } from '@angular/router';

import { LoginComponent } from './login.component';

export const LoginRoutes: Routes = [
    {
        component: LoginComponent,
        path: 'login'
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    }
];
