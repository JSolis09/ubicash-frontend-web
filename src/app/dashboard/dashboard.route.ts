import { Routes } from '@angular/router';
import { OverviewRoutes } from './overview/overview.route';

import { DashboardGuard } from './dashboard.guard';
import { DashboardComponent } from './dashboard.component';

export const DashboardRoutes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [DashboardGuard],
        children: [
            ...OverviewRoutes
        ]
    },
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    }
];
