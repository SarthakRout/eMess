import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AdminHallMgmtComponent } from './admin-hallmgmt/admin-hallmgmt.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminComponent } from './admin.component';

@NgModule({
  declarations: [
    AdminComponent,
    AdminHomeComponent,
    AdminHallMgmtComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AdminComponent,
    AdminHomeComponent,
    AdminHallMgmtComponent
  ]
})

export class AdminModule {

}
