import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BackendService } from 'src/app/shared/backend.service';

@Component({
  selector: 'app-auth-genpwd',
  templateUrl : './auth-genpwd.component.html',
  styleUrls: ['./auth-genpwd.component.css']
})

export class AuthGenpwdComponent implements OnInit {

  genpwdForm: FormGroup;

  constructor(
    private backendService: BackendService
  ) {}
  ngOnInit() {
    this.genpwdForm = new FormGroup({
      username: new FormControl(''),
    });
    console.log('Initialized auth genpwd component!');
  }

  async genpwd() {
    const username: string = this.genpwdForm.get('username').value;
    await this.backendService.genpwd(username);
  }
}
