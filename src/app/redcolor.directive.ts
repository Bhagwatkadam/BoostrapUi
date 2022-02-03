import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appRedcolor]'
})
export class RedcolorDirective {

  constructor(private e: ElementRef) {
    this.e.nativeElement.style.backgroundColor = "red";
    this.e.nativeElement.style.color = "white";
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.e.nativeElement.style.backgroundColor = "green";
    this.e.nativeElement.style.color = "black";
  }
  @HostListener('mouseout') onMouseOut() {
    this.e.nativeElement.style.backgroundColor = "red";
    this.e.nativeElement.style.color = "white";
  }


}
