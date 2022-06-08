import uuidv4 from "uuid";
import { Movie } from "../types/movies.types";
import IndicativeRating from "./parental_rating";

const movies: Movie[] = [
  {
      id: "657c2374-45c6-4ae2-8312-e3982e0748da",
      name: 'Spider Man',
      ratings: [1, 5, 3],
      indicativeRating: IndicativeRating.AL
  },
  {
      id: "12936173-3cb2-46b2-80d6-4301d509f352",
      name: 'Doctor Strange',
      ratings: [5, 5, 3],
      indicativeRating: IndicativeRating.A18
  },
  {
      id: "399b6167-6e44-4eba-8fb1-0ac31e0497bc",
      name: 'Avengers',
      ratings: [],
      indicativeRating: IndicativeRating.A12
  }
];

export default movies;
