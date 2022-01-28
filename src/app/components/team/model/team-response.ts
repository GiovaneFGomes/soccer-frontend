import {PlayerResponse} from "src/app/components/player/model/player-response";

// Essa classe corresponde a minha entidade Team.
// Mais especificamente, é aqui onde vai ser recebido os dados de reposta do JSON, pela parte do backend.
export interface TeamResponse {
  // Se coloca a interrogação '?' para dizer que o atributo pode ser null.
  // Se nao tivesse '?' e o atributo fosse null, seria lançado uma exceção.
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
}
