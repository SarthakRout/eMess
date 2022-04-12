import { Component, OnInit } from "@angular/core";
import { FormArray, FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BackendService } from "src/app/shared/backend.service";

@Component({
  selector: 'app-student-orders',
  templateUrl : './student-orders.component.html',
  styleUrls: ['./student-orders.component.css']
})
export class StudentOrdersComponent implements OnInit{
  orders = [];
  fca: FormArray;
  constructor(
    private backendService: BackendService
  ){}

  async ngOnInit() {
    this.fca = new FormArray([]);
    this.getOrder();
    // console.log(this.fca);
    this.backendService.dataSubject.subscribe(
      async val => {
        setTimeout( ()=> {
          this.getOrder();
          // console.log(this.fca);
        }, 200)
      }
    )
  }

  getOrder(){
    this.backendService.getOrders().subscribe(
      (res: any) => {
        if(res.code == 'success'){
          console.log("Fetched orders successfully", res.data);
          this.orders = res.data;
          this.fca.clear();
          for (let index = 0; index < this.orders.length; index++) {
            this.fca.push(new FormControl(parseInt(this.orders[index]['quantity'])))
          }
          // console.log("Orders: ", this.orders);
        } else {
          console.log("Err", res);
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  Update(order, i){
    // console.log(order, this.fca.controls[parseInt(i)]);
    order['delta'] = parseInt(this.fca.controls[parseInt(i)].value) - parseInt(order['quantity'])
    order['quantity'] = this.fca.controls[parseInt(i)].value
    this.backendService.updateOrder(order);
  }
  Delete(order){
    this.backendService.deleteOrder(order);
  }

  canModify(order){
    let md = new Date(order['meal_date'])
    let today = new Date();
    today.setHours(today.getHours() + 5);
    today.setMinutes(today.getMinutes() + 30);
    return md >= new Date(today.getDate() + 1);
  }
}
