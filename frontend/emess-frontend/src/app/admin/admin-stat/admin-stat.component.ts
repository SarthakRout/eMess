import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/shared/backend.service';

@Component({
  selector: 'app-admin-stat',
  templateUrl : './admin-stat.component.html',
  styleUrls: ['./admin-stat.component.css']
})

export class AdminStatComponent implements OnInit {
  studacc = null;
  halls = [];
  constructor(
    private backendService: BackendService
  ){}
  async ngOnInit() {
    console.log('Initialized admin stat component!');
    if(this.backendService.currentUser !== null){
      this.halls = this.backendService.currentUser['halls'];
      this.studacc = {};
      for (const hall of this.halls) {
        await (await this.backendService.getTot(hall)).subscribe(
          (res:any) => {
            if(res.code == 'success'){
              this.studacc[hall] = res.data;
            } else {
              console.log("Err", res);
            }
          },
          err => {
            console.log("Err", err)
          }
        );
      }
    }

  }

}
