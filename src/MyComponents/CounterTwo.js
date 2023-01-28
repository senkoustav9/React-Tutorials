import React, { useReducer } from "react";

// Step 1: Define the Initial State
const initialState = {
  firstCounter: 0,
  secondCounter: 15,
  key: 5,
  name: "Rahul",
};

// Step 2: Define the Reducer function
const reducer = (state, action) => {
  let newState = { ...state };

  switch (action.type) {
    case "increment": {
      newState.firstCounter += action.value;
      break;
    }
    case "decrement": {
      newState.firstCounter -= action.value;
      break;
    }
    case "reset": {
      newState = { ...initialState };
      break;
    }
  }
  return newState;
};

function CounterTwo() {
  // Step 3: Call the useReducer Hook
  const [currentState, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Count: {currentState.firstCounter}</h1>
      {/* Step 4: Call the dispatch function with the proper type and payload */}
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        Increment 1
      </button>
      <button onClick={() => dispatch({ type: "increment", value: 5 })}>
        Increment 5
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Decrement 1
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
        Decrement 5
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <div>{JSON.stringify(currentState)}</div>
    </div>
  );
}
export default CounterTwo;