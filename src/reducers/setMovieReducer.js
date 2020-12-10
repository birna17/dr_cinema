export default function (state = {}, action) {
  switch (action.type) {
    case 'setMovie': return action.payload;
    default: return state;
  }
}
