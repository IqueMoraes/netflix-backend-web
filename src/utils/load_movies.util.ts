
import { Movie, MoviesFromApiDTO } from "../interfaces/movies.interface";

function loadMovies(
  data: MoviesFromApiDTO[]
): Movie[] {
  return data.map((movie) => ({
    id: movie.id,
    name: movie.title,
    directedBy: movie.directed_by,
    duration: movie.duration,
    ratings: [],
  }));
}

export default loadMovies;
