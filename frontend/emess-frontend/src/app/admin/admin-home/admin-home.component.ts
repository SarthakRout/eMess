import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/shared/backend.service';

@Component({
  selector: 'app-admin-home',
  templateUrl : './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})

export class AdminHomeComponent implements OnInit {
  halls = [];
  constructor(
    private backendService: BackendService
  ){}
  ngOnInit() {
    console.log('Initialized admin home component!');
    if (this.backendService.currentUser !== null){
      this.halls = this.backendService.currentUser['halls']
    }
  }
  ch(index: number){
    if(index === 0){
      return ""
    }
    return " collapsed"
  }
  cb(index: number){
    if(index === 0){
      return " show"
    }
    return ""
  }
  ae(index: number){
    if(index === 0){
      return "true"
    }
    return "false"
  }
}
