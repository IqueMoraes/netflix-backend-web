import movies from "../db/movies";
import { Movie } from "../interfaces/movies.interface";
import { User } from "../interfaces/user.types";

function updateMovieAtUsersList(movie: Movie, user: User): User {
  if (user.myList.includes(movie)) {
    const [movie, ...rest] = user.myList;

    user.myList = rest;
    return user;
  }

  user.myList = [...user.myList, movie];
  return user;
}

//função pura
function updateManyMoviesAtUsersList(user: User, ...ids: string[]): User {
  const newList: Movie[] = [];

  ids.forEach((id: string) => {
    if (!movies.some((m) => m.id === id)) {
      throw new Error("Filme não está no catálogo disponível");
    }
    if (user.myList.some(m => m.id === id)){
      throw new Error("Filme já está na lista do usuário");
    }
    const movie = movies.find((m) => m.id === id);
    if (movie) newList.push(movie);
  });

  return {
    ...user,
    myList: [
      ...user.myList,
      ...newList
    ]
  };
}

export { updateMovieAtUsersList };
