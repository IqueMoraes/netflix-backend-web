import { Movie } from "../types/movies.types";
import uuidv4 from 'uuid';

class User {
  name: string;
  age: number;
  myList: Movie[];
  id: string;

  constructor(name, age, myList = []) {
      this.name = name;
      this.age = age;
      this.myList = myList;
      this.id = uuidv4();
  }
}

const user: User = new User("Bruno Benicio", 17);

export default user;
