export default function (state = 0, action) {
  switch (action.type) {
    case 'setCinema': return action.payload;
    default: return state;
  }
}
