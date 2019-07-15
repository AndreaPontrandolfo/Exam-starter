import { FETCH_TODOS } from "../actions/types";

const INITIAL_STATE = {};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_TODOS:
      console.log(action.payload);
      return { ...state, todos: action.payload, };
    default:
      return state;
  }
}
