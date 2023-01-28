import React, { useContext } from "react";
import { CountContext } from "../../App";

function ComponentB() {
  const {value, method}= useContext(CountContext);
  return (
    <div>
      <h1>Count: {value}</h1>
      <button onClick={() => method("increment")}>Increment</button>
      <button onClick={() => method("decrement")}>Decrement</button>
      <button onClick={() => method("reset")}>Reset</button>
    </div>
  );
}

export default ComponentB;
