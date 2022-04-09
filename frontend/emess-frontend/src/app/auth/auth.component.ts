import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { BackendService } from '../shared/backend.service';
@Component({
  selector: 'app-auth',
  templateUrl : './auth.component.html',
  styleUrls: ['./auth.component.css']
})

export class AuthComponent implements OnInit {

  constructor(
    private backendService: BackendService,
    private router: Router
  ) {}

  async ngOnInit() {
    const user = this.backendService.currentUser;
    if (user !== null) {
      if (this.backendService.userType === 'student') {
        this.router.navigate(['/', 'student']);
      } else {
        this.router.navigate(['/', 'messadmin']);
      }
    }
    else{
      await this.backendService.autologin();
    }
  }

}
