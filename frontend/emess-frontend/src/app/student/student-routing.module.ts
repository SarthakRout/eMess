import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentHomeComponent } from './student-home/student-home.component';
import { StudentOrdersComponent } from './student-orders/student.orders.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { StudentStatComponent } from './student-stat/student-stat.component';
import { StudentComponent } from './student.component';

const route: Routes = [
  {
    path: 'student',
    component: StudentComponent,
    children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: StudentHomeComponent},
      {path: 'stat', component: StudentStatComponent},
      {path: 'profile', component: StudentProfileComponent},
      {path: 'orders', component: StudentOrdersComponent},
      {path: '**', redirectTo: 'home'}
    ]
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(route)
  ],
  exports: [
    RouterModule
  ]
})
export class StudentRoutingModule {}
