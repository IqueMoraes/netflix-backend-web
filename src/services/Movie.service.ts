import moviesDatabase from "../db/movies";
import { MoviesFromApiFilmes } from "../interfaces/movies.interface";
import loadMovies from "../utils/load_movies.util";
import BaseService from "./Base.service";


class MovieService extends BaseService{

  constructor() {
    super()
  }

  async listAll() {
    const result = await this.getInstance().get<MoviesFromApiFilmes>("/movies");
    const movies = result.data.data;
    
    return loadMovies(movies)
  }

}

export default MovieService;
