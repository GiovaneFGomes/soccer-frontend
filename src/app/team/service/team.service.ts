import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TeamResponse} from "../model/team-response";

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient) { }

  public findTeams(): Observable<TeamResponse[]> {
    return this.http.get<TeamResponse[]>(`assets/json/team.json`);
  }


}
