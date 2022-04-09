import { stringify } from '@angular/compiler/src/util';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendService } from '../shared/backend.service';

@Component({
  selector: 'app-student',
  templateUrl : './student.component.html',
  styleUrls: ['./student.component.css']
})

export class StudentComponent implements OnInit, OnDestroy {
  constructor(
    private backendService: BackendService,
    private router: Router
  ) {}
  ngOnInit() {
    console.log('Initialized student component!');
    if (this.backendService.currentUser === null || this.backendService.userType !== 'student') {
      this.router.navigate(['/', 'auth']);
    }
    // console.log(stringify(this.backendService.username), stringify(this.backendService.authToken));
  }
  ngOnDestroy(){
    // console.log(stringify(this.backendService.username), stringify(this.backendService.authToken));
  }
  async Logout(){
    await this.backendService.logout();
  }
}
