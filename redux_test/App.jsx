import React from "react";
import CounterContainer from "./src/containers/CounterContainer";
import TodosContainer from "./src/containers/TodosContainer";

const App = () => {
  return (
    <div>
      <CounterContainer />
      <hr />
      <TodosContainer />
    </div>
  );
};

export default App;
