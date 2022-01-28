import {Component, Input, OnInit} from '@angular/core';

import {PlayerService} from "../../../services/player/service/player.service";

// @Component é um decorator, ou seja, adiciona mais funcionalidades a classe.
@Component({
  selector: 'app-players',                 // Nome do component
  templateUrl: './players.component.html',  // Documento para o HTML
  styleUrls: ['./players.component.scss']    // Documento para o CSS
})
export class PlayersComponent implements OnInit {

  player$ = this.playerService.findPlayers()

  //  Aqui estou usando a injeção de dependência
  constructor(private playerService: PlayerService) { }

  ngOnInit() { }
}
