import {PlayerResponse} from "src/app/player/model/player-response";

// Essa classe corresponde a minha entidade Team
// Mais especificamente, é aqui onde vai ser recebido os dados de reposta do JSON
export class TeamResponse {
  // Se coloca a interrogação ? quando o atributo pode ser non-null
  // Se nao tivesse ?, se o atributo fosse null, seria lançado uma exceção
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

  // Porque esse construtor aqui ?
  constructor(name: string, icon: string) {
    this.name = name
    this.icon = icon
  }

}
