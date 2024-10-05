import { combineReducers, createStore, applyMiddleware } from "redux";
import genreReducer from "./reducers/genreReducer";
import movieReducer from "./reducers/movieReducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  genres: genreReducer,
  movies: movieReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
