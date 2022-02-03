import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styles: [ ]
})

export class NavComponent  {

  constructor(private router: Router) { }
  
  logout( ){
    this.router.navigateByUrl('login');
    sessionStorage.clear();
  }
} 


