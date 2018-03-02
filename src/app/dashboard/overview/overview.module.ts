import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { OverviewComponent } from './overview.component';
import { OverviewService } from './overview.service';
import { HttpService } from '../../common/http/http.service';

@NgModule({
    imports: [ BrowserModule ],
    declarations: [ OverviewComponent ],
    providers: [
        HttpService,
        OverviewService
    ]
})
export class OverviewModule { }
