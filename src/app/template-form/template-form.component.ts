import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { map, reduce, filter } from 'rxjs/operators';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {
  model: any = {};
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {
    alert(JSON.stringify(this.model));
  }

  use() {
    const arr = [1, 2, 3];
    const arr$ = of(arr);
    const arr$1 = from(arr);
    const fromArr$ = from(arr);
    fromArr$.pipe(map((value) => value + 10)).subscribe((value) => console.log(`Emitted Values: `, value));
    let case1 = arr$.pipe(
       filter((x: any) => x % 2 === 0),
       reduce((acc: any, one) => acc + one, 0))
  }


}