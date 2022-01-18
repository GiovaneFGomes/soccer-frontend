import {PlayerResponse} from "src/app/player/model/player-response";

export class TeamResponse {
  // ? quando é opcional o atributo
  id?: string
  name?: string
  icon?: string
  bio?: string
  founded?: string
  stadium?: string
  capacity?: string
  country?: string
  manager?: string
  president?: string
  player?: PlayerResponse[]
  date?: string

  constructor(name: string, icon: string) {
    this.name = name
    this.icon = icon
  }

}
