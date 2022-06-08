import IndicativeRating from "../db/parental_rating";

interface Movie {

  id: string;

  name: string;

  ratings: number[];

  indicativeRating: IndicativeRating;
}

interface Average {
  average: number;
}

type MovieWithAverage = Movie & Average;

export type { Movie, Average, MovieWithAverage };
