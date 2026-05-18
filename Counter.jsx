import React, { useReducer } from "react";

// initial state
const initialState = { count: 0 };

// reducer function
function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };

    case "DECREMENT":
      return { count: state.count - 1 };

    case "RESET":
      return initialState;

    default:
      return state;
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Counter: {state.count}</h1>

      <button onClick={() => dispatch({ type: "INCREMENT" })}>
        INCREMENT
      </button>

      <button onClick={() => dispatch({ type: "DECREMENT" })}>
        DECREMENT
      </button>

      <button onClick={() => dispatch({ type: "RESET" })}>
        RESET
      </button>
    </div>
  );
}