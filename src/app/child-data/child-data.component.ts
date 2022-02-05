import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ShareService } from '../share.service';
// Import { Model } from './model';
export interface Model {
  param1: string;
  param2: string;
  param3: number;
  arr: any[];
}


@Component({
  selector: 'app-child-data',
  templateUrl: './child-data.component.html',
  styles: [
  ]
})
export class ChildDataComponent implements OnInit {
  public model: Model = { param1: "wewe", param2: "dsfs", param3: 10, arr: [1, 2, 3, "ee"] };
  @Input() abc: any;
  private myvar = "serewr ewr ew rew r";
  @Input() xyz: any;
  @Output() childDataByEvent = new EventEmitter();

  childData = { name: 'Sup', age: 80 };
  constructor(private shareService: ShareService) { }

  get shareServiceData() {
    return this.shareService.getHelloMessage();
  }

  ngOnInit(): void {
    this.childDataByEvent.emit("my Data Form Child");
  }

  byViewChildCall() {
    this.childDataByEvent.emit("my Data Form Child 111111");
  }

}
