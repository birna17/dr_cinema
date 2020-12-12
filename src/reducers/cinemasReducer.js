export default function (state = [], action) {
  switch (action.type) {
    case 'getCinemas': return action.payload;
    default: return state;
  }
}
