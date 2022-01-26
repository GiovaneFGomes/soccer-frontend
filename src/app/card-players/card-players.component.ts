import {Component, Input, OnInit} from '@angular/core';
import {TeamResponse} from "../team/model/team-response";
import {PlayerResponse} from "../player/model/player-response";
import {PlayerService} from "../player/service/player.service";

// @Component é um decorator, ou seja, adiciona mais funcionalidades a classe.
@Component({
  selector: 'app-card-players',                 // Nome do component
  templateUrl: './card-players.component.html',  // Documento para o HTML
  styleUrls: ['./card-players.component.scss']    // Documento para o CSS
})
export class CardPlayersComponent implements OnInit {

  @Input() team?: TeamResponse
  @Input() player?: PlayerResponse

  player$ = this.playerService.findPlayers()

  //  Aqui estou usando a injeção de depenência
  constructor(private playerService: PlayerService) { }

  ngOnInit() { }

}
