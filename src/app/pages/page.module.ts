import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './nav/header/header.component'
import { AppRoutingModule } from "src/app/app-routing.module";
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
import { LeftMenuComponent } from './menu/left-menu/left-menu.component';
import { FirstComponent } from './first/first.component';
import { HttpClientModule } from "@angular/common/http"
import { OrnekComponent } from '../ornek/ornek.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    GalleryComponent,
    ContactComponent,
    HeaderComponent,
    LayoutComponent,
    LeftMenuComponent,
    FirstComponent,
    OrnekComponent
  ],
  imports: [CommonModule,RouterModule,HttpClientModule],
  exports:[
    HomeComponent,
    AboutComponent,
    GalleryComponent,
    ContactComponent,
    HeaderComponent,
    FirstComponent,
    OrnekComponent
  ]
})
export class PageModule {}
