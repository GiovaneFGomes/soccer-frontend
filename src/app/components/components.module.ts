import { NgModule } from '@angular/core';

// Importação automática do CommonModule na criação do módulo com o Angular CLI
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "../app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { MatCardModule } from "@angular/material/card";
import { DirectivesModule } from "../directives/directives.module";
import {PipesModule} from "../pipes/pipes.module";
import {ServicesModule} from "../services/services.module";

import { PlayersComponent } from "./pages/players/players.component";
import { NavBarComponent } from "./animations/nav-bar/nav-bar.component";
import { IndexComponent } from "./pages/index/index.component";
import { CardComponent } from "./cards/card/card.component";

import {SpinnerComponent} from "./animations/spinner/spinner.component";
import { ArrowsComponent } from './animations/arrows/arrows.component';
import {CarrouselComponent} from "./animations/carrousel/carrousel.component";
import {CardPlayersComponent} from "./cards/card-players/card-players.component";


// O @NgModule é um decorator, assim como o @Component. Ou seja, vai adicionar mais funcionalidades a classe,
// acrescentando esses metadados (declarations, imports, providers e bootstrap).
@NgModule({

  // Aqui é onde ficam todos os components, directives e pipes que queremos utilizar nesse módulo.
  declarations: [
    CardComponent,
    CarrouselComponent,
    IndexComponent,
    NavBarComponent,
    SpinnerComponent,
    ArrowsComponent,
    CardPlayersComponent,
    PlayersComponent
  ],

  // Aqui é onde declaramos outros módulos (que contém outros components) que queremos utilizar dentro desse módulo.
  imports: [
    CommonModule,
    MatCardModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // Esse é o módulo que criei para agrupar todas as diretivas da minha aplicação
    DirectivesModule,
    // Esse é o módulo que criei para agrupar todos os pipes da minha aplicação
    PipesModule,
    // Esse é o módulo que criei para agrupar todas as services da minha aplicação
    ServicesModule
  ],

  // Aqui é onde colocamos os serviços que vão ficar disponíveis para todos os components declarados nesse módulo.
  providers: [],

  // Esse metadado diz ao Angular quais são os components, directives ou pipes desse módulo que nós queremos
  // expor para outros módulos. Isso é bom, pois pode ter algum que queremos que seja privado, ou seja, só para o
  // módulo que estamos trabalhando.
  exports: [
    CardComponent,
    CarrouselComponent,
    IndexComponent,
    NavBarComponent,
    SpinnerComponent,
    ArrowsComponent,
    CardPlayersComponent,
    PlayersComponent
  ]
})
export class ComponentsModule { }
