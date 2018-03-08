import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/filter';

import { LoginService } from '../login/login.service';
import { LoginComponent } from '../login/login.component';

declare var $: any;

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    public currentUrl: string;
    constructor(private loginService: LoginService,
                private router: Router) { }

    public static path(): string[] {
        return ['dashboard'];
    }

    ngOnInit() {
        const $sidebar: any = $('.ui.sidebar');
        $sidebar.sidebar('attach events', '.toc.item');
        this.currentUrl = this.router.url;
        this.router
            .events
            .filter((event: any) => event instanceof NavigationEnd)
            .subscribe((event: NavigationEnd) => {
                this.currentUrl = event.url;
            });
    }

    private logout(): void {
        this.loginService
            .logout()
            .subscribe(() => {
                this.router
                    .navigate(LoginComponent.path());
            });
    }

    public showModal(): void {
        const $modal: any = $('#logout-modal');
        $modal
            .modal({
                closable  : false,
                onApprove : () => {
                    this.logout();
                }
            })
            .modal('show');
    }

}
