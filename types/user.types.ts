import { Movie } from "./movies.types";

interface User {
  name: string;
  age: number;
  myList: Movie[],
  id: string;
}

export type { User };
