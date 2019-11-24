import { hot } from "react-hot-loader/root";
import React from "react";
import ReactDom from "react-dom";
import App from "./src/App";
import { BrowserRouter } from "react-router-dom";
const Hot = hot(App);

ReactDom.render(
  <BrowserRouter>
    <Hot />
  </BrowserRouter>,
  document.querySelector("#root")
);
