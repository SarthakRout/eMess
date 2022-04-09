import { Component, OnInit } from '@angular/core';
import { BackendService } from '../shared/backend.service';

@Component({
  selector: 'app-admin',
  templateUrl : './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {

  constructor(
    private backendService : BackendService
  ){}
  ngOnInit() {
    console.log('Initialized admin component!');
  }

  async Logout(){
    await this.backendService.logout();
  }
}
