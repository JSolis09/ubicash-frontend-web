import { Component, OnInit } from '@angular/core';
import { Auth } from './login.model';

import { LoginService } from './login.service';

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

    constructor(private loginService: LoginService) { }

    ngOnInit() { }

    public cleanMessage() {
        this.errorMessage = null;
    }

    public showSuccessMessage(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.success = true;
            setTimeout(() => {
                this.success = false;
                resolve();
            }, 2000);
        });
    }

    public login(): void {
        this.loading = true;
        this.cleanMessage();
        this.loginService.login(this.auth)
            .subscribe((response) => {
                console.log(response);
                this.loading = false;
                this.showSuccessMessage()
                    .then(() => {
                        // TODO: redirect to home o landing
                    });
            }, (error) => {
                this.success = false;
                this.loading = false;
                this.errorMessage = 'Usuario y/o contraseña son incorrectos';
            });
    }

}
