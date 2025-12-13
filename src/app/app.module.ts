import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageModule } from './pages/page.module';
import { AdminModule } from './admin-pages/admin.module';
import { OrnekComponent } from './ornek/ornek.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { CustomerrorInterceptor } from './interceptors/customerror.interceptor';
import {ReactiveFormsModule} from '@angular/forms'


@NgModule({
  declarations: [AppComponent,],
  imports: [BrowserModule, AppRoutingModule, PageModule, AdminModule,ReactiveFormsModule],
  providers: [
    // { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    // {provide:HTTP_INTERCEPTORS,useClass:CustomerrorInterceptor,multi:true},

  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
 