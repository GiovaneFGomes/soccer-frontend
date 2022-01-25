import {TeamResponse} from "src/app/team/model/team-response";

// Essa classe corresponde a minha entidade Player.
// Mais especificamente, é aqui onde vai ser recebido os dados de reposta do JSON.
export interface PlayerResponse {
  // Se coloca a interrogação ? para dizer que o atributo pode ser null.
  // Se nao tivesse ? e o atributo fosse non-null, seria lançado uma exceção.
  id?: string,
  name?: string,
  age?: number,
  nationality?: string,
  actualTeam?: TeamResponse,
  number?: number,
  position?: string,
  height?: number
}
