import { User } from "../interfaces/user.types"

const navOptions = (user: User) => {
  return  [
  {
    type: "input",
    name: "option",
    message: `${user.name}, escolha uma oção: \n1 - Acessar catálogo \n2 - Avaliar filme  \n3 - Listar filmes com base em avaliações \n4 - Listar filmes favoritos \n5 - Atualizar lista de filmes favoritos \n0 - sair\n`
  }
]
}

const chooseMovie = [
  {
    type: "number",
    name: "option",
    message: "Digite a numeração do filme. \n"
  }
]

const chooseRate = [
  {
    type: "number",
    name: "option",
    message: "Digite sua avaliação com nota de 1 a 5.\n"
  }
]

const updateListQuestion = [
  {
    type: "input",
    name: "option",
    message: "Com base no catálogo disponível, digite as numerações dos filmes separados por vírgula.\nExemplo: 23, 8, 15\nNúmeros diferentes de sua lista serão adicionados. Caso já possua o filme em sua lista, este será removido dos favoritos. \nDigite '0' para voltar ao menu principal.\n"
  }
]


export { navOptions, chooseMovie, chooseRate, updateListQuestion };
