import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appLighter]'
})
export class LighterDirective {

  constructor(private el:ElementRef) {
    this.el.nativeElement.style.backgroundColor='yellow';
   }

}
