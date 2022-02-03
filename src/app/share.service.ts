import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ShareService {
  
  helloMessage: any = "Bhagwat";
  
  constructor() { }

  getHelloMessage() {
    return this.helloMessage;
  }


  setHelloMessage(newMessage: any) {
    this.helloMessage = newMessage;
  }

}
