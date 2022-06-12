import inquirer from "inquirer";
import { Bruno, Luana, Pedro } from "../db/users";
import { Movie } from "../interfaces/movies.interface";
import { User } from "../interfaces/user.types";
import MovieService from "../services/Movie.service";
import { findMovie, orderByAverageRate } from "../utils/movies.utils";
import { login } from "./login/login.promt";

let user: User;
let movies: Movie[] = [];


const navOptions = (user: User) => {
  return  [
  {
    type: "input",
    name: "option",
    message: `${user.name}, escolha uma oção: \n1 - Acessar catálogo \n2 - Avaliar filme  \n3 - Listar filmes com base em avaliações \n4 - sair\n`
  }
]
}

const chooseMovie = [
  {
    type: "input",
    name: "option",
    message: "Digite o id do filme. \n"
  }
]

const chooseRate = [
  {
    type: "input",
    name: "option",
    message: "Digite sua avaliação com nota de 1 a 5.\n"
  }
]


async function navigation() {
  const menu = await inquirer.prompt(navOptions(user));
  const movieService = new MovieService();

  switch(menu.option) {
    case '1':
      if(movies.length < 1){
        movies = await movieService.listAll();
      }
      console.log(movies);
      navigation()
      break;    

    case '2':
      if(movies.length < 1){
        movies = await movieService.listAll();
      }
      const pickMovie = await inquirer.prompt(chooseMovie);
      // const movieToRate = findMovie(movies, pickMovie.option);
      const movieToRate = movies[(pickMovie.option - 1)];

      if(!movieToRate) {
        console.log("Este filme não existe.");
        navigation()
        break;
      }

      const rate = await inquirer.prompt(chooseRate);
      if(rate.option < 0 || rate.option > 5) {
        console.log("Número invalido para avaliação do filme.")
        navigation()
        break;
      }
      movieToRate.ratings.push(parseInt(rate.option));
      navigation()
      break;

    case '3':
      console.log(orderByAverageRate(movies));
      navigation()
      break

    case '4':
      return
  }
}


async function startProgram() {
  const answers = await inquirer.prompt(login);

  switch(answers.option) {
    case '1':
      user = Luana;
      navigation();
      break;
          
    case '2':
      user = Pedro;
      navigation();
      break;

    case '3':
      user = Bruno;
      navigation();
      break;
    
    case '4':
      user = Pedro;
      navigation();
      break;

    case '5':
      break;
  }
}

export default startProgram;