import { combineReducers } from 'redux';
import cinemas from './cinemasReducer';
import currentCinema from './setCinemaReducer';
import movies from './movieReducer';
import currentMovie from './setMovieReducer';

export default combineReducers({
  cinemas,
  currentCinema,
  movies,
  currentMovie,
});
