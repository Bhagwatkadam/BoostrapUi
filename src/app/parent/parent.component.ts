import { AfterViewChecked, Component, OnInit, ViewChild } from '@angular/core';
import { ChildDataComponent } from '../child-data/child-data.component';
import { ShareService } from '../share.service';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit, AfterViewChecked {
  tagData = "<h1> this tag form data </h1>"
  pData = "g7trtyre6rfg ugtft7f gtf";
  arr = [1, 2, 4, 5, 7];
  obj = {name:"Sup"};
  childData = "";
  byViewGetData = "";
  // shareServiceData = "";
  @ViewChild(ChildDataComponent, { static: false }) child: any;
  // @ViewChild(ChildDataComponent) childDataComponent!: ChildDataComponent;

  constructor(private stud: StudentService, private shareService: ShareService ) { 
    console.log(document.getElementById("img"));
  }

  ngOnInit(): void {
  //  this.shareServiceData = this.shareService.getHelloMessage();
  console.log(document.getElementById("img"));
  }

  get shareServiceData(){
    return this.shareService.getHelloMessage();
  }

  ngAfterViewChecked(): void {
    setTimeout(() => {
      this.byViewGetData = this.child.childData;  
    });

  }

  childByFun(e: any) {
    setTimeout(() => {
      this.childData = e;
    })
  }

  clickButton() {
    // this.child.byViewGetData();
    this.shareService.setHelloMessage("set by paranet");
    // this.childDataComponent.byViewChildCall();
    // this.shareServiceData = this.shareService.getHelloMessage();
  }
  

}
