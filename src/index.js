import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { Router, browserHistory } from "react-router";
import { BrowserRouter, Route } from "react-router-dom";
import routes from "./routes";
import App from "./components/App";
import promise from "redux-promise";

// import createBrowserHistory from "history/createBrowserHistory";
// const newHistory = createBrowserHistory();

import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history="browserHistory" routes={routes} />
  </Provider>,
  document.querySelector(".container")
);
