import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BackendService } from "src/app/shared/backend.service";

@Component({
  selector: 'app-admin-search',
  templateUrl: './admin-search.component.html',
  styleUrls: ['./admin-search.component.css']
})
export class AdminSearchComponent implements OnInit {
  result = null;
  searchForm : FormGroup;
  dates = [];
  halls = [];
  constructor(
    private backendService: BackendService
  ){}
  ngOnInit() {
    this.halls = this.backendService.currentUser['halls'];
    let today = new Date(), dt = new Date();
    today.setHours(today.getHours() + 5);
    today.setMinutes(today.getMinutes() + 30);
    for(let i = -3; i<=7; i++){
      dt.setDate(today.getDate() + i);
      this.dates.push(dt.toDateString());
    }
    this.searchForm = new FormGroup({
      hall: new FormControl(0),
      date: new FormControl(''),
      extra_name: new FormControl('')
    });
  }
  async Submit(){
    console.log("Submitted!");
    const hall = this.searchForm.get('hall').value;
    const date = (new Date(this.searchForm.get('date').value)).toISOString();
    const extra_name = this.searchForm.get('extra_name').value;
    console.log(hall, extra_name, date)
    await (await this.backendService.search(hall, extra_name, date)).subscribe(
      (res:any) => {
        if(res.code == 'success'){
          this.result = res.data;
          console.log(this.result);
        } else {
          console.log("Err", res);
        }
      },
      err => {
        console.log("Err", err);
      }
    );
  }
}
