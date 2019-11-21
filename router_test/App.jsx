import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Profile from "./Profile";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Link to="/">홈</Link>
        <Link to="/about">소개</Link>
        <Link to="/profile/test">test</Link>
        <Link to="/profile/test02">test02</Link>
      </div>
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} />
      <Route path="/profile/:username" component={Profile} />
    </BrowserRouter>
  );
};

export default App;
