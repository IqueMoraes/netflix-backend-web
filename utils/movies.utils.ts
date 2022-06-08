import { Movie, MovieWithAverage } from "../types/movies.types";
import { User } from "../types/user.types";

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

  return moviesOrdered;
}

function filterMoviesByIndicativeRating(movies: Movie[], user: User): Movie[] {
  return movies.filter((movie) => {
    return movie.indicativeRating <= user.age;
  });
}

function removeMovieWithoutRatings(movies: Movie[]) {
  return movies.filter((movie) => movie.ratings.length !== 0);
}

function calculateMoviesAverage(movies: Movie[]): MovieWithAverage[] {
  const sanitizedMovies = removeMovieWithoutRatings(movies);

  return sanitizedMovies.map((movie) => {
    const initialValue = 0;
    const length = movie.ratings.length;
    const sumFn = (previous: number, current: number) => previous + current;

    const average = movie.ratings.reduce(sumFn, initialValue) / length;

    return {
      ...movie,
      average,
    };
  });
}

export {
  orderByAverageRate,
  filterMoviesByIndicativeRating,
  removeMovieWithoutRatings,
  calculateMoviesAverage,
};
