import React, { useReducer, useEffect } from "react";

const getInitialState = () => {
  const saved = localStorage.getItem("counter");
  return saved ? { count: JSON.parse(saved) } : { count: 0 };
};

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };

    case "DECREMENT":
      return { count: state.count - 1 };

    case "RESET":
      return { count: 0 };

    default:
      return state;
  }
}

export default function Counter1() {
  const [state, dispatch] = useReducer(reducer, undefined, getInitialState);

  useEffect(() => {
    localStorage.setItem("counter", JSON.stringify(state.count));
  }, [state.count]);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Counter: {state.count}</h1>

      <button onClick={() => dispatch({ type: "INCREMENT" })}>
        Increment
      </button>

      <button onClick={() => dispatch({ type: "DECREMENT" })}>
        Decrement
      </button>

      <button onClick={() => dispatch({ type: "RESET" })}>
        Reset
      </button>
    </div>
  );
}