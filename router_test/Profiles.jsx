import React from "react";
import { NavLink, Route } from "react-router-dom";
import Profile from "./Profile";

const Profiles = () => {
  const activeStyle = {
    color: "red"
  };

  return (
    <div>
      <h3>사용자 목록</h3>
      <NavLink activeStyle={activeStyle} to="/profiles/test">
        test
      </NavLink>
      <NavLink activeStyle={activeStyle} to="/profiles/test02">
        test02
      </NavLink>
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
