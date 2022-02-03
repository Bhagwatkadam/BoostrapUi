import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: [
  ]
})
export class AboutComponent implements OnInit {
  dataVariable: any = new Date();
  
  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.dataVariable = new Date();
    }, 1000)
  }

}
