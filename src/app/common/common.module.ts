import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserModule } from './user/user.module';
import { HttpModule } from './http/http.module';

@NgModule({
    imports: [
        UserModule,
        HttpModule,
        RouterModule
    ],
    declarations: []
})
export class CommonModule { }
