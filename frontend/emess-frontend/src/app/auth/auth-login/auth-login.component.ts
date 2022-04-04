import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BackendService } from 'src/app/shared/backend.service';

@Component({
  selector: 'app-auth-login',
  templateUrl : './auth-login.component.html',
  styleUrls: ['./auth-login.component.css']
})

export class AuthLoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private backendService: BackendService
  ) {}
  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });
    console.log('Initialized auth login component!');
  }

  login() {
    const username: string = this.loginForm.get('username').value;
    const password: string = this.loginForm.get('password').value;
    this.backendService.login(username, password);
  }
}
