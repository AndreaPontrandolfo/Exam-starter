import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";

import Routes from "./router";
import store /* , { history } */ from "./store";

export const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>{Routes}</Router>
  </Provider>,
  document.getElementById(`root`)
);
