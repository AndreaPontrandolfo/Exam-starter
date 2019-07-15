import { FETCH_TODOS } from "../actions/types";

const INITIAL_STATE = {};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_TODOS:
      return { ...state, allManufacturers: action.payload, };
    default:
      return state;
  }
}
