import { ADD_MOVIE, LOAD_DATA } from "../constants/action-types";

export function addMovie(payload) {
  return { type: ADD_MOVIE, payload };
};

export function getMovies() {
  return function(dispatch) {
    return fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=8806289684a57014fc8d7bffd258a3f4&language=en-US&page=1")
      .then(response => response.json())
      .then(json => {
        dispatch({ type: LOAD_DATA, payload: json.results });
      });
    };
  }
