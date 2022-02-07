import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  model: any ={};
  constructor(private router:Router) { }

  ngOnInit(): void {

  }
  onSubmit() {
    debugger
    if(this.model.UserName  == "" ||  this.model.UserName  == undefined){
      return
    }
    if(this.model.Password == "" || this.model.Password == undefined){
      return
    }    
    localStorage.setItem("userName",this.model.UserName);
    this.router.navigate(['home']);

  }

}
