import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGenpwdComponent } from './auth-genpwd/auth-genpwd.component';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { AuthComponent } from './auth.component';

@NgModule({
  declarations: [
    AuthComponent,
    AuthLoginComponent,
    AuthGenpwdComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    AuthComponent,
    AuthLoginComponent,
    AuthGenpwdComponent
  ]
})
export class AuthModule {

}
