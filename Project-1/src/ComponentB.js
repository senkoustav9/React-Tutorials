import React, {useContext} from "react";
import ComponentC from "./ComponentC";
import { UserContext } from "./App";
function ComponentB() {
    const user = useContext(UserContext);
  return (
    <div>
      <h2>ComponentB</h2>
      {user}
      <ComponentC />
    </div>
  );
}

export default ComponentB;
