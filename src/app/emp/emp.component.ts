import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { ShareService } from '../share.service';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.scss']
})
export class EmpComponent implements OnInit {
  employees :any= [];
  query = "";

  constructor(private router: Router, private serviceService: ServiceService, private shareService: ShareService) {
    
  }

  ngOnInit(): void {
    this.getEmp();
  }
  getEmp(){
    this.serviceService.getEmp().subscribe((res: any)=>{
      // alert(res.message);
      this.employees = res.data;
      console.log(res);
      console.log(this.employees);
    }, err =>{
      // alert(err.error.message);
    });
  }

  setData(epmName: string){
    this.shareService.setHelloMessage(epmName);
  }


}
