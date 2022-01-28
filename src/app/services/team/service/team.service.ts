import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";
import {delay, Observable} from "rxjs";
import { TeamResponse } from "../model/team-response";

// Esse decorator faz o Angular ter o conhecimento que essa classe pode ser usada como uma injeção de dependência
@Injectable({
  // Esse providedIn diz onde que a injeção pode ser usado. Por exemplo, aqui esta root, então pode ser usada em toda a
  // aplicação. Porém, da para especificar um módulo particular em que só esse módulo pode usar essa injeção.
  providedIn: 'root'
})
// É essa classe que vai buscar e enviar os dados do backend que o component necessita
// A parte de lógica de negócio da aplicação fica nessa classe de serviço
// A classe de serviço também ajuda a não repetir código como, por exemplo, um mesmo método em vários components
export class TeamService {

  // Aqui estou usando a Injeção de Dependência
  // Deixando como private essa variável para ser só dessa classe
  constructor(private http: HttpClient) { }

  // Nome do método / tipo do retorno
  public findTeams(): Observable<TeamResponse[]> {
    // Todos os métodos http, assim como o get, retornam um Observable
    return this.http.get<TeamResponse[]>(`assets/json/team.json`)
      .pipe(
        delay(2000)
      );
  }

}
