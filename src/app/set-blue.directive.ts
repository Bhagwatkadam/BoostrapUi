import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSetBlue]'
})
export class SetBlueDirective {

  constructor(private e: ElementRef ) {
    this.e.nativeElement.style.backgroundColor = "blue";
  }

}
