import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { OverviewModule } from './overview/overview.module';

import { DashboardGuard } from './dashboard.guard';
import { DashboardRoutes } from './dashboard.route';
import { BankModule } from './bank/bank.module';
import { BankDetailModule } from './bank-detail/bank-detail.module';

@NgModule({
    imports: [
        RouterModule.forChild([
            ...DashboardRoutes
        ]),
        OverviewModule,
        BankModule,
        BankDetailModule
    ],
    declarations: [ DashboardComponent ],
    providers: [ DashboardGuard ]
})
export class DashboardModule { }
