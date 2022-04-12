import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AdminExtraComponent } from './admin-extra/admin-extra.component';
import { AdminHallMgmtComponent } from './admin-hallmgmt/admin-hallmgmt.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminSearchComponent } from './admin-search/admin-search.component';
import { AdminStatComponent } from './admin-stat/admin-stat.component';
import { AdminComponent } from './admin.component';

@NgModule({
  declarations: [
    AdminComponent,
    AdminHomeComponent,
    AdminHallMgmtComponent,
    AdminStatComponent,
    AdminExtraComponent,
    AdminSearchComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    AdminComponent,
    AdminHomeComponent,
    AdminHallMgmtComponent,
    AdminStatComponent,
    AdminExtraComponent,
    AdminSearchComponent,
    RouterModule
  ]
})

export class AdminModule {

}
