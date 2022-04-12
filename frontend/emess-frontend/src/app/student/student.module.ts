import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AdminExtraComponent } from '../admin/admin-extra/admin-extra.component';
import { AdminModule } from '../admin/admin.module';
import { StudentHomeComponent } from './student-home/student-home.component';
import { StudentOrdersComponent } from './student-orders/student.orders.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { StudentRoutingModule } from './student-routing.module';
import { StudentStatComponent } from './student-stat/student-stat.component';
import { StudentComponent } from './student.component';

@NgModule({
  declarations: [
    StudentComponent,
    StudentHomeComponent,
    StudentStatComponent,
    StudentProfileComponent,
    StudentOrdersComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    AdminModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    StudentComponent,
    StudentHomeComponent,
    StudentStatComponent,
    StudentProfileComponent,
    StudentOrdersComponent,
    RouterModule
  ]
})

export class StudentModule {

}
