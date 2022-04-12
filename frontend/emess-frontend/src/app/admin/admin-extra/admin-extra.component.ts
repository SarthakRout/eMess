import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/shared/backend.service';

@Component({
  selector : 'app-admin-extra',
  templateUrl: './admin-extra.component.html',
  styleUrls: ['./admin-extra.component.css']
})
export class AdminExtraComponent implements OnInit, OnChanges {
  @Input() extra = null;
  @Input() mode = 'UPDATE';
  days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  extraForm: FormGroup;
  bookForm: FormGroup;
  constructor(
    private backendService: BackendService,
    private router: Router
  ){}
  ngOnInit(): void {
      if(this.backendService.currentUser == null){
        this.router.navigate(['/', 'auth']);
      }
      console.log('Initialised admin extra component');
      this.extraForm = new FormGroup({
        name : new FormControl(''),
        price: new FormControl(''),
        max_amount: new FormControl(''),
        limit: new FormControl(''),
        weeks: new FormControl(1),
      });
      this.bookForm = new FormGroup({
        quantity: new FormControl(1)
      });
      if(this.extra !== null && this.mode !== 'ADD'){
        this.extraForm = this.groupDict(this.extra);
      }
  }
  ngOnChanges(changes: SimpleChanges): void {
    // console.log("Value changed");
      if ('extra' in changes && this.mode !== 'ADD') {
        this.extraForm = this.groupDict(changes['extra']['currentValue'])
      }
  }
  groupDict(extra){
    // this.extra = extra;
    if(extra === null){
      return null;
    }
    else{
      return new FormGroup({
        name : new FormControl(extra[1]['name']),
        price: new FormControl(extra[1]['price']),
        max_amount: new FormControl(extra[1]['max_amount']),
        limit: new FormControl(extra[1]['limit']),
        weeks: new FormControl(1),
      })
    }
  }
  async Update(){
    console.log("Update");
    await this.backendService.updateExtra(
      this.extra[0],
      {
        id: this.extra[1]['id'],
        name : this.extraForm.get('name').value,
        price : this.extraForm.get('price').value,
        max_amount : this.extraForm.get('max_amount').value,
        limit : this.extraForm.get('limit').value
      }
    )
  }
  async Delete(){
    console.log("Delete");
    await this.backendService.deleteExtra(
      this.extra[0]['hall'],
      this.extra[1]
    )
  }
  async Add(){
    console.log("Add");
    await this.backendService.addExtra(
      {
        hall: this.extra[2],
        meal_type: this.extra[0],
        meal_day: this.extra[1],
        start_date: this.getDate(this.extra[1])
      },
      {
        name : this.extraForm.get('name').value,
        price : this.extraForm.get('price').value,
        max_amount : this.extraForm.get('max_amount').value,
        limit : this.extraForm.get('limit').value,
        weeks: this.extraForm.get('weeks').value
      }
    );
  }
  async Book(){
    console.log("Book");
    // console.log(this.bookForm.get('quantity').value, this.extra);
    await this.backendService.bookExtra(this.extra[1], this.bookForm.get('quantity').value);
  }

  rnum(val: string){
    const num = Number(val);
    return Array(num+1).fill(1).map((x, y) => x+y-1)
  }
  getDate(currentDay){
    let today = new Date();
    for (let i = 0; i < 7; i++) {
      today.setDate(today.getDate() + 1)
      if(this.days[(today.getDay()-1 + 7)%7] === currentDay){
        today.setHours(today.getHours() + 5);
        today.setMinutes(today.getMinutes() + 30);
        // console.log(today.toISOString());
        return today.toISOString();
      }
    }
  }
}
