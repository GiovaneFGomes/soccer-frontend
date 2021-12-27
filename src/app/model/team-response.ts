import {PlayerResponse} from "./player-response";

export interface TeamResponse {
  id: string,
  name: string,
  stadium: string,
  country: string,
  player?: PlayerResponse[], // ? quando é opcional o atributo
  date: string
}
