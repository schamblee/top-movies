import { createSelector } from "reselect";
import orderBy from "lodash/orderBy";

const moviesSelector = state => state && state.movies;

export const sortSelector = state => state && state.sortParams;
  
export const getSortedMovies = createSelector(
  moviesSelector,
  sortSelector,
  (movies, sort) => {
    if (sort.length) {
      return orderBy(
        movies,
        sort.slice(-1)[0].data.key,
        sort.slice(-1)[0].data.order
      );
    }
    return movies;
  }
);
