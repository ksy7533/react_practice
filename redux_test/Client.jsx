import { hot } from "react-hot-loader/root";
import React from "react";
import ReactDom from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import App from "./App";
import rootReducer from "./modules";

const store = createStore(rootReducer, composeWithDevTools());

const Hot = hot(App);

ReactDom.render(
  <Provider store={store}>
    <Hot />
  </Provider>,
  document.querySelector("#root")
);
