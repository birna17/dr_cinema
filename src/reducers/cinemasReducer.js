export default function (state = {}, action) {
  switch (action.type) {
    case 'get': return state.cinemas = action.payload ;
    default: return state;
  }
}
