import api from "../../utils/api";
import ActionTypes from "../actionTypes";

export const getMovies = () => (dispatch) => {
  dispatch({ type: ActionTypes.MOVIE_LOADING });

  api
    .get("/account/21489861/watchlist/movies")
    .then((res) =>
      dispatch({
        type: ActionTypes.MOVIE_SUCCESS,
        payload: res.data.results,
      }),
    )
    .catch((err) =>
      dispatch({
        type: ActionTypes.MOVIE_ERROR,
        payload: err.message,
      }),
    );
};

export const toggleMovie = (movie, isAdd, loading, text) => (dispatch) => {
  dispatch({ type: ActionTypes.MOVIE_LOADING });
  loading(true);
  text(isAdd ? "Adding to watchlist" : "Removing from watchlist");

  api
    .post("/account/21489861/watchlist", {
      media_id: movie.id,
      media_type: "movie",
      watchlist: isAdd,
    })
    .then(() => {
      loading(false);
      isAdd
        ? dispatch({
            type: ActionTypes.MOVIE_ADD,
            payload: movie,
          })
        : dispatch({
            type: ActionTypes.MOVIE_DELETE,
            payload: movie.id,
          });
    })
    .catch((err) =>
      dispatch({
        type: ActionTypes.MOVIE_ERROR,
        payload: err.message,
      }),
    );
};
