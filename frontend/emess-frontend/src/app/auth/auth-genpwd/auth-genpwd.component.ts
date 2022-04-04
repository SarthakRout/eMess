import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-genpwd',
  templateUrl : './auth-genpwd.component.html',
  styleUrls: ['./auth-genpwd.component.css']
})

export class AuthGenpwdComponent implements OnInit {

  ngOnInit() {
    console.log('Initialized auth genpwd component!');
  }

}
