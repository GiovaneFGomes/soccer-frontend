import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import {PlayerService} from "./player/service/player.service";
import {TeamService} from "./team/service/team.service";
import {PlayerComponent} from "./player/player.component";
import {TeamComponent} from "./team/team.component";

@NgModule({

  declarations: [
    PlayerComponent,
    TeamComponent
  ],

  imports: [
    CommonModule
  ],
  providers: [
    PlayerService,
    TeamService
  ]


})
export class ServicesModule { }
