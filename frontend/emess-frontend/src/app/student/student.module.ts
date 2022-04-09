import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StudentHomeComponent } from './student-home/student-home.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { StudentRoutingModule } from './student-routing.module';
import { StudentStatComponent } from './student-stat/student-stat.component';
import { StudentComponent } from './student.component';

@NgModule({
  declarations: [
    StudentComponent,
    StudentHomeComponent,
    StudentStatComponent,
    StudentProfileComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    RouterModule
  ],
  exports: [
    StudentComponent,
    StudentHomeComponent,
    StudentStatComponent,
    StudentProfileComponent,
    RouterModule
  ]
})

export class StudentModule {

}
