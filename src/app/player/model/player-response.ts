// Essa classe corresponde a minha entidade Player.
// Mais especificamente, é aqui onde vai ser recebido os dados de reposta do JSON, pela parte do backend
export interface PlayerResponse {
  // Se coloca a interrogação ? para dizer que o atributo pode ser null.
  // Se nao tivesse ? e o atributo fosse null, seria lançado uma exceção.
  id?: string,
  name?: string,
  icon?: string,
  bio?: string,
  age?: number,
  number?: number,
  position?: string,
  height?: number,
  nationality?: string
}
