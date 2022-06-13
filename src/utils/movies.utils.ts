import { Movie, Average, MoviesFromApiDTO } from "../interfaces/movies.interface";


function findMovie(movies: Movie[], id: number): Movie | undefined{
  const movie = movies.find((m: Movie) => m.id === id)
  return movie;
}

// function filterMoviesByIndicativeRating(movies: Movie[], user: User): Movie[] {
  //   return movies.filter((movie) => {
    //     return movie.indicativeRating <= user.age;
    //   });
    // }
    
function removeMovieWithoutRatings(movies: Movie[]) {
  return movies.filter((movie) => movie.ratings.length !== 0);
}
function calculateAverage(movie: Movie): number {
  const initialValue = 0;
  const length = movie.ratings.length;
  const sumFn = (previous: number, current: number) => previous + current;
  
  const average = movie.ratings.reduce(sumFn, initialValue) / length;
  return average;
}

function calculateMoviesAverage(movies: Movie[]): Average[] {
  const sanitizedMovies = removeMovieWithoutRatings(movies);
  
  return sanitizedMovies.map((movie) => {
    console.log(movie);
    const average = calculateAverage(movie);
    
    return {
      ...movie,
      average,
    };
  });
}

function orderByAverageRate(movies: Movie[]) {
  const moviesWithAverage = calculateMoviesAverage(movies);

  const moviesOrdered = moviesWithAverage.sort((a, b) => {
    if (a.average > b.average) {
      return 1;
    }

    if (a.average < b.average) {
      return -1;
    }

    return 0;
  });
  console.log("este é o movies ordered", moviesOrdered );
  return moviesOrdered;
}

function listByName(movies: Movie[]): void {
  movies.map((movie) => {
    return console.log(`${movie.id}- ${movie.name}`)
  })

}

function listByRating(movies: Movie[]): void {
  movies.map((movie) => {
    return console.log(`${movie.name} - Avaliação: ${calculateAverage(movie)} - Numeração: ${movie.id}`)
  })
}


export {
  orderByAverageRate,
  removeMovieWithoutRatings,
  calculateMoviesAverage,
  findMovie,
  listByName,
  listByRating
};
