import React from "react";
import qs from "qs";

const About = ({ location }) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true // 문자열 맨앞의 ?를 생략한다
  });
  const showDetail = query.detail === "true";
  return (
    <div>
      <h1>소개d</h1>
      <p>기초 소개</p>
      {showDetail && <p>detail값이 true!</p>}
    </div>
  );
};

export default About;
