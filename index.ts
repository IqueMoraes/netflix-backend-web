import { filterMoviesByIndicativeRating, orderByAverageRate } from "./utils/movies.utils";
import movies from './db/movies';
import user from './db/users';
import { updateMovieAtUsersList } from "./utils/update_list.controller";
import IndicativeRating from "./db/parental_rating";

const orderedMovies = orderByAverageRate(movies);

const filteredMoviesByIndicativeRating = filterMoviesByIndicativeRating(orderedMovies, user)

console.log(filteredMoviesByIndicativeRating)

console.log(user);



updateMovieAtUsersList(
    {   
        id:"e96cc50a-f60a-4922-bf50-df0ac0b491f3",
        name: "Toy Story",
        ratings: [5, 5, 5],
        indicativeRating: IndicativeRating.AL
    },
    user
)

updateMovieAtUsersList(
    {
        id: "c84b98d8-bf44-4cc8-8b82-5e999e0de417",
        name: "Toy Story 2",
        ratings: [5, 5, 5],
        indicativeRating: IndicativeRating.AL
    },
    user
)

console.log(user);

