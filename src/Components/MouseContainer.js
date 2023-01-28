import React, { useState, useEffect } from "react";
import HookMouse from "./HookMouse";

function MouseContainer() {
  const [display, setDisplay] = useState(true);

  return (
    <div>
        MouseContainer
        <button onClick={() => setDisplay(!display)}>Toggle</button>
        {display && <HookMouse/>}
    </div>
    );
}

export default MouseContainer;
