import {TeamResponse} from "./team-response";

export interface PlayerResponse {
  id: string,
  name: string,
  age: number,
  nationality: string,
  actualTeam?: TeamResponse,
  number: number,
  position: string,
  height: number
}
