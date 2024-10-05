import ActionTypes from "../actionTypes";

const initialState = {
  genres: [],
  isLoading: true,
  error: null,
};

const genreReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GENRE_LOADING:
      return state;

    case ActionTypes.GENRE_ERROR:
      return { ...state, isLoading: false, error: true };

    case ActionTypes.GENRE_SUCCESS:
      return { genres: action.payload, isLoading: false, error: null };

    default:
      return state;
  }
};

export default genreReducer;
