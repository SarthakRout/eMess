import { HttpClient, HttpHeaders } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/shared/backend.service';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit, OnDestroy {
  constructor(
    private backendService: BackendService,
    private router: Router,
  ) {}
  user = {
    u : '',
    i : '',
    n : '',
    g : '',
    h : ''
  };
  link = "";
  links = []
  ngOnInit(): void {
    console.log('Initialised Student Profile Component');
    if (this.backendService.currentUser !== null) {
      this.user = this.backendService.currentUser;
      this.links.push(this.gen(this.user['g']), this.oa(this.user['i']))
      this.link = this.dp(this.user['u']);
    }

  }
  dp(ccid: string): string {
   return 'https://home.iitk.ac.in/~' + ccid + '/dp';
  }
  oa(roll: string): string {
    return 'https://oa.cc.iitk.ac.in/Oa/Jsp/Photo/' + roll +'_0.jpg'
  }
  gen(g : string): string{
    if(g == 'M'){
      return 'https://search.pclub.in/assets/images/GenericMale.png'
    }
    else{
      return 'https://search.pclub.in/assets/images/GenericFemale.png'
    }
  }
  handle(e){
    // console.log("Changing src", e)
    if(this.links.length > 0){
      e.target.src = this.links[this.links.length-1];
      // console.log(e.target.src)
      this.links.pop()
    }
    else{
      e.target.src = 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
    }
  }

  ngOnDestroy(): void {
      // console.log(stringify(this.backendService.username), stringify(this.backendService.authToken));
  }
}
