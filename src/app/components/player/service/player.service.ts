import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PlayerResponse} from "../model/player-response";

// Esse decorator faz o Angular ter o conhecimento que essa classe pode ser usada com a injeção de dependência.
@Injectable({
  providedIn: 'root'
})
// É nessa classe, o serviço, que vai buscar e enviar os dados ao backend
// A parte da lógica de negócio da aplicação fica em uma service
export class PlayerService {

  //  Aqui estou usando a injeção de depenência
  constructor(private http: HttpClient) { }

  // Nome do método / tipo do retorno
  public findPlayers(): Observable<PlayerResponse[]> {
    // Todos os métodos http, assim como o get, retornam um Observable
    return this.http.get<PlayerResponse[]>(`assets/json/player.json`);
  }
}
