import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { BackendService } from 'src/app/shared/backend.service';

@Component({
  selector: 'app-admin-hallmgmt',
  templateUrl : './admin-hallmgmt.component.html',
  styleUrls: ['./admin-hallmgmt.component.css'],
  // changeDetection: ChangeDetectionStrategy.Default
})

export class AdminHallMgmtComponent implements OnInit {
  @Input() hall_no = 0;
  idx = null;
  days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  currentDay = null;
  mealsB = [];
  mealsL = [];
  mealsD = [];
  constructor(
    private backendService: BackendService,
  ){}
  async ngOnInit() {
    console.log('Initialized admin hallmgmt component!');
    await this.backendService.getextras(String(this.hall_no));
    this.backendService.dataSubject.subscribe(
      async val => {
        if( Object.keys(val).length > 0 && this.hall_no != 0 && this.idx !== null){
          setTimeout( ()=> {
            // console.log(this.backendService.hallmeals);
            document.getElementById(JSON.stringify(this.hall_no) +  "_" + JSON.stringify((this.idx)%7)).click();
          }, 500);
        }
      }
    );
  }
  Show(index : number){
    this.idx = index;
    this.currentDay = this.days[index];
    const allmeals = this.backendService.hallmeals[this.hall_no];
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

  trackElem(index, element : any){
    return element ? element[1]['id'] : null;
  }
}
