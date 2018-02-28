import { NgModule } from '@angular/core';
import { HttpModule as ngHttpModule } from '@angular/http';
import { HttpService } from './http.service';

@NgModule({
  imports: [
      ngHttpModule
  ],
  declarations: [],
  providers: [ HttpService ]
})
export class HttpModule { }
