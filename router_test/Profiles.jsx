import React from "react";
import { Link, Route } from "react-router-dom";
import Profile from "./Profile";

const Profiles = () => {
  return (
    <div>
      <h3>사용자 목록</h3>
      <Link to="/profiles/test">test</Link>
      <Link to="/profiles/test02">test02</Link>
      <Route
        path="/profiles"
        exact
        render={() => <div>사용자를 선택하라</div>}
      ></Route>
      <Route path="/profiles/:username" component={Profile}></Route>
    </div>
  );
};

export default Profiles;
