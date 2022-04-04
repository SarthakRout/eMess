import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StudentHomeComponent } from './student-home/student-home.component';
import { StudentStatComponent } from './student-stat/student-stat.component';
import { StudentComponent } from './student.component';

@NgModule({
  declarations: [
    StudentComponent,
    StudentHomeComponent,
    StudentStatComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StudentComponent,
    StudentHomeComponent,
    StudentStatComponent
  ]
})

export class StudentModule {

}
