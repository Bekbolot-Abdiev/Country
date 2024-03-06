import React from "react";
import ReduxApp from "./Store/ReduxApp";
import ReduxTodo from "./ReduxTodo";
import CityRedux from "./CityRedux";

const App = () => {
  return (
    <div>
      <ReduxApp />
      <hr />
      <ReduxTodo />
      <hr />
      <CityRedux />
    </div>
  );
};

export default App;
