import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: [
  ]
})
export class AboutComponent implements OnInit {
  dataVariable: any = new Date();
  
  constructor(private router: Router, private route: Route) { }

  ngOnInit(): void {
    setInterval(() => {
      this.dataVariable = new Date();
    }, 1000)
  }

}
