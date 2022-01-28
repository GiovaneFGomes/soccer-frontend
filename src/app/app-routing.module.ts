import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {IndexComponent} from "./components/pages/index/index.component";
import {CardPlayersComponent} from "./components/pages/card-players/card-players.component";
import {PlayerComponent} from "./components/pages/player/player.component";

// É nessa constante routes que são declaradas as rotas do projeto
const routes: Routes = [
  { path: '', component: IndexComponent },
  // Estou utilizando parâmetro nessa rota
  { path: 'app-player/:id', component: PlayerComponent } // ver se nao precisa do app
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
