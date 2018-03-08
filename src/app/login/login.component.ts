import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from './login.model';

import { LoginService } from './login.service';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    public auth: Auth = new Auth();
    public errorMessage: string;
    public loading: boolean;
    public success: boolean;

    constructor(private loginService: LoginService,
                private router: Router) { }

    public static path(): string[] {
        return ['login'];
    }

    ngOnInit() { }

    private cleanMessage() {
        this.errorMessage = null;
        this.loginService.setAccessToken(null);
        this.loginService.setLogged(false);
    }

    public showSuccessMessage(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.success = true;
            setTimeout(() => {
                this.success = false;
                resolve();
            }, 1500);
        });
    }

    public login(): void {
        this.loading = true;
        this.cleanMessage();
        this.loginService.login(this.auth)
            .subscribe((response) => {
                this.loginService.setAccessToken(response);
                this.loginService.setLogged(true);
                this.loading = false;
                this.showSuccessMessage()
                    .then(() => {
                        this.router
                            .navigate(DashboardComponent.path());
                    });
            }, (error) => {
                this.success = false;
                this.loading = false;
                this.errorMessage = 'Usuario y/o contraseña son incorrectos';
            });
    }

}
