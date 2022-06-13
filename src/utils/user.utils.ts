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
function updateManyMoviesAtUsersList(user: User,  movies:Movie[], ...ids: number[]): User {
  const newList: Movie[] = [];

  ids.forEach((id: number) => {
    try {
      if (!movies.some((m) => m.id === id)) {
        throw new Error("Filme não está no catálogo disponível");
      }
      if (user.myList.some(m => m.id === id)){
        throw new Error("Filme já está na lista do usuário");
      }
      const movie = movies.find((m) => m.id === id);
      if (movie) newList.push(movie);
    } catch(e){
      console.log(e);
    }

  });

  return {
    ...user,
    myList: [
      ...user.myList,
      ...newList
    ]
  };
}

export { updateMovieAtUsersList, updateManyMoviesAtUsersList };
