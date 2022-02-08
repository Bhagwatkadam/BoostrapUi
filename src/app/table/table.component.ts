import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  items1: any =
    [
      { first: "sdfdsfdsafdsf sdfdsfds", secound: "sdfdsfdsafdsf sdfdsfdsafdsf sdfdsfdsafdsf sdfdsfdsafdsf  sdfdsfdsafdsf sdfdsfdsafdsf" },
      { first: "sdfdsfdsafdsf sdfdsfdsafdsf sdfdsfdsafdsf sdfdsfdsafdsf  sdfdsfdsafdsf sdfdsfdsafdsf", secound: "sdfdsfdsafdsf sdfdsfdsafdsf  sdfdsfdsafdsf sdfdsfdsafdsf" },
      { first: "sdfdsfdsafdsf sdfdsfds", secound: "sdfdsfdsafdsf sdfdsfdsafdsf sdfdsfdsafdsf sdfdsfdsafdsf  sdfdsfdsafdsf sdfdsfdsafdsf" },
      { first: "sdfdsfdsafdsf sdfdsfdsafdsf sdfdsfdsafdsf sdfdsfdsafdsf  sdfdsfdsafdsf sdfdsfdsafdsf", secound: "sdfdsfdsafdsf sdfdsfdsafdsf sdfdsfdsafdsf  sdfdsfdsafdsf" }
    ];

  // items2: any = ["adsfdsaf", "dsafdsaf dsfds", "dsfasdf sad fdsa f dsa"];
}
