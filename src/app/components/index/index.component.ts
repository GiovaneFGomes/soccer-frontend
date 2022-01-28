import {Component, OnInit} from '@angular/core';
import {TeamService} from "../team/service/team.service";

// @Component é um decorator, ou seja, adiciona mais funcionalidades a classe.
@Component({
  selector: 'app-index',                // Nome do component
  templateUrl: './index.component.html', // Documento para o HTML
  styleUrls: ['./index.component.scss']   // Documento para o CSS
})
export class IndexComponent implements OnInit{

  team$ = this.teamService.findTeams()

  //  Aqui estou usando a injeção de depenência
  constructor(private teamService: TeamService) { }

  ngOnInit() { }

}
