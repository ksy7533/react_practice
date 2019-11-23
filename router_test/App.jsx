import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Profiles from "./Profiles";
import HistorySample from "./HistorySample";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Link to="/">홈</Link>
        <Link to="/about">소개</Link>
        <Link to="/profiles">test</Link>
        <Link to="/history">history</Link>
      </div>
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} />
      <Route path="/profiles" component={Profiles} />
      <Route path="/history" component={HistorySample} />
    </BrowserRouter>
  );
};

export default App;
