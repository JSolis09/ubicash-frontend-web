import { NgModule } from '@angular/core';
import { UserModule } from './user/user.module';
import { HttpModule } from './http/http.module';

@NgModule({
    imports: [
        UserModule,
        HttpModule
    ],
    declarations: []
})
export class CommonModule { }
