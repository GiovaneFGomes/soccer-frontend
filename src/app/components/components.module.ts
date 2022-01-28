import { NgModule } from '@angular/core';

// Importação automática do CommonModule na criação do módulo com o Angular CLI
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "../app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { MatCardModule } from "@angular/material/card";

import { CardPlayersComponent } from "./card-players/card-players.component";
import { CarrouselComponent } from "./carrousel/carrousel.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { PlayerComponent } from "./player/player.component";
import { IndexComponent } from "./index/index.component";
import { CardComponent } from "./card/card.component";
import { TeamComponent } from "./team/team.component";

import { TeamService } from "./team/service/team.service";
import { PlayerService } from "./player/service/player.service";
import { DirectivesModule } from "../directives/directives.module";

// O @NgModule é um decorator, assim como o @Component. Ou seja, vai adicionar mais funcionalidades a classe,
// acrescentando esses metadados (declarations, imports, providers e bootstrap).
@NgModule({

  // Aqui é onde ficam todos os components, directives e pipes que queremos utilizar nesse módulo.
  declarations: [
    CardComponent,
    CardPlayersComponent,
    CarrouselComponent,
    IndexComponent,
    NavBarComponent,
    PlayerComponent,
    TeamComponent
  ],

  // Aqui é onde declaramos outros módulos (que contém outros components) que queremos utilizar dentro desse módulo.
  imports: [
    CommonModule,
    MatCardModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // Importando módulo das diretivas
    DirectivesModule
  ],

  // Aqui é onde colocamos os serviços que vão ficar disponíveis para todos os components declarados nesse módulo.
  providers: [
    TeamService,
    PlayerService
  ],

  // Esse metadado diz ao Angular quais são os components, directives ou pipes desse módulo que nós queremos
  // expor para outros módulos. Isso é bom, pois pode ter algum que queremos que seja privado, ou seja, só para o
  // módulo que estamos trabalhando.
  exports: [
    CardComponent,
    CardPlayersComponent,
    CarrouselComponent,
    IndexComponent,
    NavBarComponent,
    PlayerComponent,
    TeamComponent
  ]
})
export class ComponentsModule { }
