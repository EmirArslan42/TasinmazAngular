import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageModule } from './pages/page.module';
import { AdminModule } from './admin-pages/admin.module';
import { OrnekComponent } from './ornek/ornek.component';

@NgModule({
  declarations: [AppComponent,],
  imports: [BrowserModule, 
    AppRoutingModule,
    PageModule,
    AdminModule,
  ],
  providers: [],

  bootstrap: [AppComponent],
})
export class AppModule {}
