import { hot } from "react-hot-loader/root";
import React from "react";
import ReactDom from "react-dom";
import App from "./src/App";
const Hot = hot(App);

ReactDom.render(<Hot />, document.querySelector("#root"));
