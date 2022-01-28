import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appWhite]'  // Nome da diretiva
})
export class WhiteDirective {

  // Estou utilizando injeção de dependência para eu trabalhar em cima do elemento
  // Atributo el do tipo ElementRef
  constructor(private el: ElementRef) {
    el.nativeElement.style.color = '#ffffff'
    // Pego o elemento nativo e aplico a cor branca a ele
  }

}
