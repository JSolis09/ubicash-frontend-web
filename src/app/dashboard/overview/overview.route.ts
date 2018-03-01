import { Routes } from '@angular/router';

import { OverviewComponent } from './overview.component';

export const OverviewRoutes: Routes = [
    {
        component: OverviewComponent,
        path: 'overview'
    },
    {
        path: '',
        redirectTo: 'overview',
        pathMatch: 'full'
    }
];
