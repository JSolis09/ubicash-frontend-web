import { Component, OnInit } from '@angular/core';

import { OverviewService } from './overview.service';
import { Log } from './overview.model';

@Component({
    selector: 'app-overview',
    templateUrl: './overview.component.html',
    styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
    public logs: Log[];
    constructor(private overviewService: OverviewService) { }

    ngOnInit() {
        this.overviewService
            .getLogs()
            .subscribe((response) => {
                this.logs = response.splice(0);
            });
    }

}
