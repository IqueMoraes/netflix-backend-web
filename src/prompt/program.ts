import inquirer from "inquirer";
import { Bruno, Luana, Pedro } from "../db/users";
import { Movie } from "../interfaces/movies.interface";
import { User } from "../interfaces/user.types";
import MovieService from "../services/Movie.service";
import { findMovie, listByName, listByRating, orderByAverageRate } from "../utils/movies.utils";
import { updateManyMoviesAtUsersList } from "../utils/user.utils";
import { login } from "./login/login.promt";
import { chooseMovie, chooseRate, navOptions, updateListQuestion } from "./questions";

let user: User;
let movies: Movie[] = [];



async function navigation() {
  const menu = await inquirer.prompt(navOptions(user));
  const movieService = new MovieService();
  movies = await movieService.listAll()

  switch(menu.option) {
    case '1':
      listByName(movies);
      navigation()
      break;    

    case '2':
      const pickMovie = await inquirer.prompt(chooseMovie);
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
      movies[(pickMovie.option -1)] = {...movieToRate, ratings: [...movieToRate.ratings, rate.option]};
      navigation()
      break;

    case '3':
      const orderByRating = orderByAverageRate(movies);
      console.log(listByRating(orderByRating));
      navigation()
      break

    case '4':
      if (user.myList.length < 1) {
        console.log("Você ainda não possui filmes em sua lista de favoritos.")
        navigation()
      }
      listByName(user.myList);
      navigation()
      break

    case '5':
      if(user.myList.length > 0){
        console.log("Sua atual lista de filmes:");
        console.log(listByName(user.myList));
      }
      const updateUserList = await inquirer.prompt(updateListQuestion);
      const idsString = updateUserList.option;
      if (idsString === '0') navigation()
      console.log(idsString);
      const idsList = idsString.split(',');
      idsList.forEach((id:string) => parseInt(id.trim()));

      updateManyMoviesAtUsersList(user, movies, idsList);

      navigation()
      break

    case '0':
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
  
      case '0':
        break;
    }
}

export default startProgram;
