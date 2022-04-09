import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl : './student.component.html',
  styleUrls: ['./student.component.css']
})

export class StudentComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    console.log('Initialized student component!');
  }

  Show(comp: string) {
    // this.router.navigate([comp], {
    //   relativeTo: this.route
    // });
  }
}
