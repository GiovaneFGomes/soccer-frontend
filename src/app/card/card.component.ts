import {Component, Input, OnInit} from '@angular/core';
import {TeamResponse} from "../team/model/team-response";

// @Component é um decorator, ou seja, adiciona mais funcionalidades a classe.
@Component({
  selector: 'app-card',                // Nome do component
  templateUrl: './card.component.html', // Documento para o HTML
  styleUrls: ['./card.component.scss']   // Documento para o CSS
})
// OnInit já vem padrão com a criação de um component com o ng g c.
// Ele é um dos ciclos de vidas do component.
export class CardComponent implements OnInit {

  // Utilizando o decorator @Input no atributo.
  // É ele quem vai disponibilizar a comunicação desse componente com outros componentes,
  // é quem permite que o pai se comunique com o componente filho.
  @Input() team?: TeamResponse

  constructor() { }

  // Esse método já vem padrão quando se se cria um component com ng g c
  ngOnInit(): void { }

}

/*
O que é component em Angular?

Um component são novas tags (seletores) customizados que você poderá utilizar no seu HTML.

Alguns dos ciclos de vida de um component:

ngOnChanges
ngOnInit
ngOnDestroy
ngDoCheck

*/
