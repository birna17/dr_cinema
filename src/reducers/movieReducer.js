export default function (state = {}, action) {
  switch (action.type) {
    case 'getMovies': return action.payload;
    case 'setMovie': return action.payload;
    default: return state;
  }
}
