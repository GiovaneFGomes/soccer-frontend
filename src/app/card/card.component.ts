import {Component, Input, OnInit} from '@angular/core';
import {TeamResponse} from "../team/model/team-response";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() team?: TeamResponse

  constructor() { }

  ngOnInit(): void {
  }

  // showName: boolean = true;
  //
  // alternar() {
  //   this.showName = !this.showName;
  // }

}
