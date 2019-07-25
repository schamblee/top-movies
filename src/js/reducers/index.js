
import {
  ADD_MOVIE_TO_FAVORITES,
  LOAD_DATA,
  SET_SORT_PARAMS
} from "../constants/action-types";

const initialState = {
  movies: [],
  sortParams: [],
  favoriteMovies: []
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_MOVIE_TO_FAVORITES) {
    // TODO: Implement favorites table
    return Object.assign({}, state, {
      favoriteMovies: state.favoriteMovies.concat(action.payload)
    });
  }

  if (action.type === LOAD_DATA) {
    return Object.assign({}, state, {
      movies: state.movies.concat(action.payload)
    });
  }

  if (action.type === SET_SORT_PARAMS) {
    return Object.assign({}, state, {
      sortParams: state.sortParams.concat(action.payload)
    });
  }

  return state;
}

export default rootReducer;
