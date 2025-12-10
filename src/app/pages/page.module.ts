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

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    GalleryComponent,
    ContactComponent,
    HeaderComponent,
    LayoutComponent,
  ],
  imports: [CommonModule,RouterModule],
  exports:[
    HomeComponent,
    AboutComponent,
    GalleryComponent,
    ContactComponent,
    HeaderComponent,
    
  ]
})
export class PageModule {}
