import {
  ADD_MOVIE_TO_FAVORITES,
  LOAD_DATA,
  SET_SORT_PARAMS
} from "../constants/action-types";

export function addMovie(payload) {
  return { type: ADD_MOVIE_TO_FAVORITES, payload };
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

export function setSortParams(sortKey) {
  return (dispatch, getState) => {
    const { sortParams } = getState();
    const order = sortParams.length && sortParams.slice(-1)[0].data.order

    dispatch({
      type: SET_SORT_PARAMS,
      payload: {
        data: {
          key: sortKey,
          order: order === "desc" ? "asc" : "desc"
        }
      }
    });
  };
};
