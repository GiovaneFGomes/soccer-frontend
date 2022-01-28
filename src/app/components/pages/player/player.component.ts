import {Component, Input, OnInit} from '@angular/core';
import {PlayerResponse} from "../../../services/player/model/player-response";
import {PlayerService} from "../../../services/player/service/player.service";

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  // @Input() team?: TeamResponse
  @Input() player?: PlayerResponse

  player$ = this.playerService.findPlayers()

  //  Aqui estou usando a injeção de depenência
  constructor(private playerService: PlayerService) { }

  ngOnInit() { }
}
