export default function (state = {}, action) {
  switch (action.type) {
    case 'GET': return action.payload;
    default: return state;
  }
}