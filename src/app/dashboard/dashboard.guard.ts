import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { LoginService } from '../login/login.service';
import { LoginComponent } from '../login/login.component';


@Injectable()
export class DashboardGuard implements CanActivate {
    constructor(private loginService: LoginService,
        private router: Router) {

    }

    canActivate(next: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if (!this.loginService.isLogged()) {
            this.router
                .navigate(LoginComponent.path());
            return false;
        }
        return true;
    }
}

