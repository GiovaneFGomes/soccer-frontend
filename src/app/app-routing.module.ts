import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {IndexComponent} from "./index/index.component";
import {CardPlayersComponent} from "./card-players/card-players.component";

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'card-players/:id', component: CardPlayersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
