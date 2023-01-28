import React from "react";
function Child(props) {
  return (
    <div>
      <button onClick={() => props.parentHandler("Ramu")}>
        {props.children}
      </button>
    </div>
  );
}

export default Child;
