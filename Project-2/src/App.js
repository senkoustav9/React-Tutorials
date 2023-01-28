import React, { useReducer, useContext } from "react";

import ComponentA from "./Components/ReducerContext/ComponentA";
import ComponentC from "./Components/ReducerContext/ComponentC";
import ComponentE from "./Components/ReducerContext/ComponentE";

export const CountContext = React.createContext();

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return 0;
    default:
      return state;
  }
};

function App() {
  const [count, dipatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <div>{count}</div>
      <CountContext.Provider value={{value: count,method: dipatch}}>
        <ComponentA />
        <ComponentC />
        <ComponentE />
      </CountContext.Provider>
    </div>
  );
}
export default App;
