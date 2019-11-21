import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Link to="/">홈</Link>
        <Link to="/about">소개</Link>
      </div>
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} />
    </BrowserRouter>
  );
};

export default App;
