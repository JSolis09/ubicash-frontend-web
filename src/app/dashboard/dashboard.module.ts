import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { OverviewModule } from './overview/overview.module';

import { DashboardGuard } from './dashboard.guard';
import { DashboardRoutes } from './dashboard.route';
import { BankModule } from './bank/bank.module';

@NgModule({
    imports: [
        RouterModule.forChild([
            ...DashboardRoutes
        ]),
        OverviewModule,
        BankModule
    ],
    declarations: [ DashboardComponent ],
    providers: [ DashboardGuard ]
})
export class DashboardModule { }
