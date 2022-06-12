import IndicativeRating from "../enums/parental_rating.enum";

interface Movie {
  id: number;
  name: string;
  ratings: number[];
  // indicativeRating: IndicativeRating;
}


interface Average extends Movie {
  average: number;
}
// interface Average {
//   average: number;
// }

// type MovieWithAverage = Movie & Average;


interface MoviesFromApiDTO {
  id: number;
  title: string;
  directed_by: string;
  duration: number;
  ratings: [];
}

interface MoviesFromApiFilmes {
  data: MoviesFromApiDTO[];
}



// type PartMovie = Omit<Movie, "indicativeRating">

export {
  Movie,
  Average,
  MoviesFromApiDTO,
  MoviesFromApiFilmes,
  // PartMovie
};
