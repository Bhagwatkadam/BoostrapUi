import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  data = [
    { name: 'test1', number: 1234567890 },
    { name: 'test2', number: 2234567890 },
    { name: 'test3', number: 3234567890 },
    { name: 'test4', number: 4234567890 },
    { name: 'test5', number: 5234567890 }];

  obserData: any = []
  constructor() { }

  ngOnInit(): void {

  }

}
