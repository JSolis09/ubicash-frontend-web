import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { OverviewModule } from './overview/overview.module';

import { DashboardGuard } from './dashboard.guard';
import { DashboardRoutes } from './dashboard.route';

@NgModule({
    imports: [
        RouterModule.forChild([
            ...DashboardRoutes
        ]),
        OverviewModule
    ],
    declarations: [DashboardComponent],
    providers: [ DashboardGuard ]
})
export class DashboardModule { }
