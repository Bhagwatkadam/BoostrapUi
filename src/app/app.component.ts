import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from "rxjs";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  SignupForm!: FormGroup;

  title = 'BoostrapUi';

  ngOnChanges() {
    console.log("ChildComponent:OnChanges");
  }


  ngOnInit() {
    console.log("ChildComponent:OnInit");
  }

  ngDoCheck() {
    console.log("ChildComponent:DoCheck");
  }

  ngAfterContentInit() {
    console.log("ChildComponent:AfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("ChildComponent:AfterContentChecked");
  }

  ngAfterViewInit() {
    console.log("ChildComponent:AfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("ChildComponent:AfterViewChecked");
  }

  ngOnDestroy() {
    console.log("ChildComponent:OnDestroy");
  }

  callTest() {
    const observable = Observable.create((observer: any) => {
      console.log('Text inside an observable');
      observer.next('Hello world!');
      observer.complete();
    });
    observable.subscribe((message: any) => console.log(message));

    const promise = new Promise((resolve, reject) => {
      console.log('Text inside promise');
      resolve('Hello world!');
    });
    promise.then(message => console.log(message));
  }


}
