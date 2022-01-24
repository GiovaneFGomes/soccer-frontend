import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appWhite]'
})
export class WhiteDirective {

  // atributo el do tipo ElementRef
  constructor(private el: ElementRef) {
    el.nativeElement.style.color = '#ffffff'
  }

}
