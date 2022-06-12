import { Movie } from "../interfaces/movies.interface";
import {v4 as uuidv4} from 'uuid';

class User {
  name: string;
  age: number;
  myList: Movie[];
  id: string;

  constructor(name:string, age: number, myList = []) {
      this.name = name;
      this.age = age;
      this.myList = myList;
      this.id = uuidv4();
  }
}

const Bruno: User = new User("Bruno Benicio", 17);
const Pedro: User = new User("Pedro", 25);
const Luana: User = new User("Luana", 22);
const Cris: User = new User("Cris", 30);

export { Bruno, Pedro, Luana, Cris };
