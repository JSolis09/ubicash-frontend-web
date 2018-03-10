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
    public query: string;
    public loading: boolean;
    constructor(private overviewService: OverviewService) { }

    ngOnInit() {
        this.getLogs();
    }

    private getLogs(query?: string): void {
        this.loading = true;
        this.overviewService
            .getLogs(query)
            .subscribe((response) => {
                this.logs = response.splice(0);
                this.loading = false;
            }, () => {
                this.loading = false;
            });
    }

    public search(): void {
        this.getLogs(this.query);
    }

}
