import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { AdminHallMgmtComponent } from './admin-hallmgmt/admin-hallmgmt.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminStatComponent } from './admin-stat/admin-stat.component';
import { AdminComponent } from './admin.component';

@NgModule({
  declarations: [
    AdminComponent,
    AdminHomeComponent,
    AdminHallMgmtComponent,
    AdminStatComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    Router
  ],
  exports: [
    AdminComponent,
    AdminHomeComponent,
    AdminHallMgmtComponent,
    AdminStatComponent,
    Router
  ]
})

export class AdminModule {

}
