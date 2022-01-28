import {Component, Input, OnInit} from '@angular/core';
import {PlayerResponse} from "../../../services/player/model/player-response";

// @Component é um decorator, ou seja, adiciona mais funcionalidades a classe.
@Component({
  selector: 'app-card-players',                 // Nome do component
  templateUrl: './card-players.component.html',  // Documento para o HTML
  styleUrls: ['./card-players.component.scss']    // Documento para o CSS
})
export class CardPlayersComponent implements OnInit {

  @Input() player?: PlayerResponse

  constructor() { }

  ngOnInit() { }

}
