import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ShareService } from '../share.service';

@Component({
  selector: 'app-child-data',
  templateUrl: './child-data.component.html',
  styles: [
  ]
})
export class ChildDataComponent implements OnInit {
  @Input() abc: any;
  private myvar = "serewr ewr ew rew r";
  @Input() xyz: any;
  @Output() childDataByEvent = new EventEmitter();


 
  childData = { name: 'Sup', age: 80 };

  constructor(private shareService: ShareService) { }

  get shareServiceData(){
    return this.shareService.getHelloMessage();
  }

  ngOnInit(): void {
    this.childDataByEvent.emit("my Data Form Child");
  }

  byViewChildCall() {
    this.childDataByEvent.emit("my Data Form Child 111111");
  }

}
