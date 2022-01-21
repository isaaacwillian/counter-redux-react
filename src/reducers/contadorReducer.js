export default function contadorReducer(state = 0, action) { //esse é o nosso reducer
  switch (action.type) {
    case "INCREMENT":
      return state + action.payload;
    case "DECREMENT":
      return state - action.payload;
    default:
      return state;
  }
}
