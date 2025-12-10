import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminHomeComponent } from './admin-pages/home/home.component';
import { MemberComponent } from './admin-pages/member/member.component';
import { ReportComponent } from './admin-pages/report/report.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { AdminLayoutComponent } from './admin-pages/admin-layout/admin-layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'hakkimizda', component: AboutComponent },
      { path: 'iletisim', component: ContactComponent },
      { path: 'galeri', component: GalleryComponent },
    ],
  },

  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      { path: '', component: AdminHomeComponent },
      { path: 'uyeler', component: MemberComponent },
      { path: 'raporlar', component: ReportComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
