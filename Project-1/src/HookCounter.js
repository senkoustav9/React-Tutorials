import React, { useState, useEffect } from "react";

function HookCounter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // useEffect runs after every render of the component
  // [] is a list of props or state we need to watch for if we want conditional side effects only when these values have changed

  useEffect(() => {
    document.title = `You Clicked ${count} times`;
  }, [count]);
  return (
    <div>
      <input
        type="text"
        onChange={(event) => setName(event.target.value)}
        value={name}
      />
      <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
    </div>
  );
}

export default HookCounter;
