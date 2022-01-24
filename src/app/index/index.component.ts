import {Component, OnInit} from '@angular/core';
import {TeamService} from "../team/service/team.service";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit{

  team$ = this.teamService.findTeams()

  constructor(private teamService: TeamService) { }
  // Por que o construtor só recebe paramêtro ?

  ngOnInit(): void {
  }

}
