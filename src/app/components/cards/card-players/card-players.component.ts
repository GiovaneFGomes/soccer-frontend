import {Component, Input, OnInit} from '@angular/core';
import {PlayerResponse} from "../../../services/player/model/player-response";

@Component({
  selector: 'app-card-players',
  templateUrl: './card-players.component.html',
  styleUrls: ['./card-players.component.scss']
})
export class CardPlayersComponent implements OnInit {

  @Input() player?: PlayerResponse

  constructor() { }

  ngOnInit(): void { }

}
