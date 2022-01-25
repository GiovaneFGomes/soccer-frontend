import { NgModule } from '@angular/core';
// BrowserModule prepara a aplicação para ser executada em um Browser. Com ng g ele já vem padrão.
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { CardComponent } from './card/card.component';
import { TeamComponent } from './team/team.component';
import { PlayerComponent } from './player/player.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { WhiteDirective } from './directive/white.directive';

import {TeamService} from "./team/service/team.service";

// @NgModule é um decorator, assim como @Component. Ou seja, adiciona mais funcionalidades a classe,
// acrescentando esses metadados.
@NgModule({
  // Aqui é onde ficam os components, directives e pipes.
  declarations: [
    AppComponent,
    IndexComponent,
    // Daqui pra baixo são components que eu criei. A importação foi feita automática por causa do ng g.
    CardComponent,
    TeamComponent,
    PlayerComponent,
    NavBarComponent,
    // Diretiva que criei, também importada automaticamente.
    WhiteDirective,
  ],
  // Aqui é onde declaramos outros módulos que queremos usar na aplicação.
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
  ],
  // Aqui é onde colocamos os serviços que vão ficar disponíveis para todos os components.
  providers: [TeamService],
  // O bootstrap diz qual que é o component que deve ser instanciado quando executarmos a aplicação.
  bootstrap: [AppComponent]
})
// AppModule é o módulo root da aplicação. É como se fosse o root do build.gradle em Java.
export class AppModule { }

/*
O que é modulo em Angular ?

O módulo é um arquivo que ajuda a organizar a nossa aplicação. É nele que conseguimos agrupar components,
directives e pipes, além de imports de outros módulos.

 */
