import React, {useEffect, useState} from "react";

function HookMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  
const logMousePosition = e => {
    console.log('Mouse Event')
    setX(e.clientX);
    setY(e.clientY);
}

// the side effects are not re-rendered as empty dependencies list
  useEffect(() => {
    console.log('Use Effect Called');
    window.addEventListener('mousemove', logMousePosition)

    // component unmount code
    return() => {
      console.log('Component Unmounting Code')
      window.removeEventListener('mousemove', logMousePosition);
    }
  },[])
   
  return (
    <div>
        <h1>{ `X: ${x}`}</h1>
        <h1>{ `Y: ${y}`}</h1>
    </div>
  );
}

export default HookMouse;
