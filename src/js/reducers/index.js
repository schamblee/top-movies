
import { ADD_MOVIE, LOAD_DATA } from "../constants/action-types";

const initialState = {
  movies: [],
  remoteMovies: []
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_MOVIE) {
    return Object.assign({}, state, {
      movies: state.movies.concat(action.payload)
    });
  }

  if (action.type === LOAD_DATA) {
    return Object.assign({}, state, {
      remoteMovies: state.remoteMovies.concat(action.payload)
    });
  }

  return state;
}

export default rootReducer;
