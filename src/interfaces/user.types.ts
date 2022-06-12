import { Movie } from "./movies.interface";

interface User {
  name: string;
  age: number;
  myList: Movie[],
  id: string;
}

export type { User };
