import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminSearchComponent } from './admin-search/admin-search.component';
import { AdminStatComponent } from './admin-stat/admin-stat.component';
import { AdminComponent } from './admin.component';

const route: Routes = [
  {
    path: 'messadmin',
    component: AdminComponent,
    children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: AdminHomeComponent},
      {path: 'stat', component: AdminStatComponent},
      {path: 'search', component: AdminSearchComponent},
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
export class AdminRoutingModule {}
