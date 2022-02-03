import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) {

   }
   getEmp(){
    return this.http.get('http://dummy.restapiexample.com/api/v1/employees');
   }
}
