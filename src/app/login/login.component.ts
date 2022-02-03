import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  myform: any = { name: '', password: '' };
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  onsubmit() {
    debugger;
    if (this.myform.name != "a" || this.myform.password != "a") {
      alert("user or password wrong");
      return
    }
    sessionStorage.setItem('cerrentUser', this.myform.name);
    this.router.navigate(['home']);
  }

}
