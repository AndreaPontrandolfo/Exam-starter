import { combineReducers } from "redux";

import fetchTodos from "./todos";

const rootReducer = combineReducers({
  fetchTodos,
});

export default rootReducer;
