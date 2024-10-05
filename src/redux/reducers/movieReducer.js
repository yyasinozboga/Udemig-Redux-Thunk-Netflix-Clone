import ActionTypes from "../actionTypes";

const initialState = {
  movies: [],
  isLoading: true,
  error: null,
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.MOVIE_LOADING:
      return state;

    case ActionTypes.MOVIE_ERROR:
      return { ...state, isLoading: false, error: true };

    case ActionTypes.MOVIE_SUCCESS:
      return { movies: action.payload, isLoading: false, error: null };

    case ActionTypes.MOVIE_ADD:
      const added = state.movies.concat(action.payload);
      return { ...state, movies: added, isLoading: false };

    case ActionTypes.MOVIE_DELETE:
      const filtered = state.movies.filter(
        (movie) => movie.id !== action.payload,
      );
      return { ...state, movies: filtered, isLoading: false };

    default:
      return state;
  }
};

export default movieReducer;
