import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-stat',
  templateUrl : './student-stat.component.html',
  styleUrls: ['./student-stat.component.css']
})

export class StudentStatComponent implements OnInit {

  ngOnInit() {
    console.log('Initialized student stat component!');
  }

}
