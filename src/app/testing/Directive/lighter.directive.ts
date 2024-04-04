import { Directive, ElementRef,  HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appLighter]'
})
export class LighterDirective {

  constructor(private el:ElementRef) {
    //  //sets background-color to yellow on loading
    // this.el.nativeElement.style.backgroundColor='yellow';
   }

   //sets background color to yellow on mouseover
   @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }
  
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

  @Input() appLighter='';
  @Input() defaultColor='';

  // @HostListener('mouseenter') onMouseEnter() {
  //   this.highlight(this.appLighter || this.defaultColor || 'red');
  // }
  // @HostListener('mouseleave') onMouseLeave() {
  //     this.highlight('');
  //   }
}