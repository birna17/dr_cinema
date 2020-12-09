import { combineReducers } from 'redux';
import cinemas from './cinemasReducer';
import setCinema from './setCinemaReducer';

export default combineReducers({
  cinemas,
  setCinema,
});
