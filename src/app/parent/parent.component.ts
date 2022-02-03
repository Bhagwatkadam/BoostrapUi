import { AfterViewChecked, Component, OnInit, ViewChild } from '@angular/core';
import { ChildDataComponent } from '../child-data/child-data.component';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit, AfterViewChecked {
  pData = "g7trtyre6rfg ugtft7f gtf";
  arr = [1, 2, 4, 5, 7];
  childData = "";

  byViewGetData = "";

  @ViewChild(ChildDataComponent, { static: false }) child: any;
  // @ViewChild(ChildDataComponent) childDataComponent!: ChildDataComponent;

  constructor(private stud: StudentService ) { }

  ngOnInit(): void {

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
    this.child.byViewChildCall();
    // this.childDataComponent.byViewChildCall();
  }

}
