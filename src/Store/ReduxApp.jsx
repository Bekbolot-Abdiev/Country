import React from "react";
import { useDispatch, useSelector } from "react-redux";

const ReduxApp = () => {
  const count = useSelector((state) => state.counter.count);
  const dispath = useDispatch();

  const plusCount = () => {
    dispath({ type: "plus" });
  };

  const minusCount = () => {
    dispath({ type: "minus" });
  };

  const restCount = () => {
    dispath({ type: "rest" });
  };

  return (
    <div>
      <h1>Redux COUNT</h1>
      <h1>{count}</h1>
      <button onClick={plusCount}>+</button>
      <button onClick={minusCount}>-</button>
      <button onClick={restCount}>REST</button>
    </div>
  );
};

export default ReduxApp;
