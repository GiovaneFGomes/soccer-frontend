import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import {PlayerService} from "./player/service/player.service";
import {TeamService} from "./team/service/team.service";
import {TeamComponent} from "./team/team.component";
import {PlayerComponent} from "./player/player.component";

@NgModule({

  declarations: [
    TeamComponent,
    PlayerComponent
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
