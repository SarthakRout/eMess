import { Component, Input, OnInit } from '@angular/core';
import { BackendService } from 'src/app/shared/backend.service';

@Component({
  selector: 'app-student-home',
  templateUrl : './student-home.component.html',
  styleUrls: ['./student-home.component.css']
})

export class StudentHomeComponent implements OnInit {
  user = null;
  days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  currentDay = null;
  idx = null;
  mealsB = [];
  mealsL = [];
  mealsD = [];
  constructor(
    private backendService: BackendService
  ){}
  async ngOnInit() {
    console.log('Initialized student book component!');
    this.user = this.backendService.currentUser;
    if(this.user !== null){
      await this.backendService.getextras(String(this.user['h']));
      setTimeout( ()=> {
        // console.log(this.backendService.hallmeals);
        this.Show(((new Date()).getDay()+ 7)%7)
      }, 200);
    }
    this.backendService.dataSubject.subscribe(
      async val => {
        if( Object.keys(val).length > 0 && this.user !== null && this.idx !== null){
          setTimeout( ()=> {
            // console.log(this.backendService.hallmeals);
            document.getElementById(this.user['h'] +  "_" + JSON.stringify((this.idx)%7)).click();
          }, 200);
        }
      }
    );
  }
  async Show(index : number){
    this.idx = index;
    this.currentDay = this.days[index];
    const allmeals = this.backendService.hallmeals[parseInt(this.user['h'])];
    if(allmeals == null){
      return
    }
    this.mealsB = [];
    this.mealsL = [];
    this.mealsD = [];
    for (let i = 0; i < allmeals.length; i++) {
      if((new Date(allmeals[i][0]['meal_date'])).getDay() == (this.idx+1)%7){
        if(allmeals[i][0]['meal_type'] === 'B'){
          this.mealsB = [...this.mealsB, allmeals[i]];
        }
        if(allmeals[i][0]['meal_type'] === 'L'){
          this.mealsL = [...this.mealsL, allmeals[i]];
        }
        if(allmeals[i][0]['meal_type'] === 'D'){
          this.mealsD = [...this.mealsD, allmeals[i]];
        }
      }
    }
  }
  getDate(currentDay){
    let today = new Date();
    for (let i = 0; i < 7; i++) {
      today.setDate(today.getDate() + 1)
      if(this.days[(today.getDay()-1 + 7)%7] === currentDay){
        return today.toDateString()
      }
    }
  }
}
