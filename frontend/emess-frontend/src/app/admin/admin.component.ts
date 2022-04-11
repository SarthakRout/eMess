import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from '../shared/backend.service';

@Component({
  selector: 'app-admin',
  templateUrl : './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {

  constructor(
    private backendService : BackendService,
    private router: Router
  ){}
  ngOnInit() {
    console.log('Initialized admin component!');
    if (this.backendService.currentUser === null || this.backendService.userType !== 'messAdmin') {
      this.router.navigate(['/', 'auth']);
    }
  }

  async Logout(){
    await this.backendService.logout();
  }
}
