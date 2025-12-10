import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeComponent } from './home/home.component';
import { MemberComponent } from './member/member.component';
import { ReportComponent } from './report/report.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [AdminHomeComponent, MemberComponent, ReportComponent, AdminLayoutComponent,],
  imports: [
    CommonModule,
    RouterModule,
    AppRoutingModule
  ],
  exports:[AdminHomeComponent,MemberComponent,ReportComponent,AdminLayoutComponent]
})
export class AdminModule { }
