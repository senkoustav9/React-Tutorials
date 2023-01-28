import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  )
}

export default Counter;

// import React, { Component } from "react";

// export class Counter extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       count: 0,
//     };
//   }
//   increment = () => {
//     this.setState({
//       count: this.state.count + 1,
//     });
//   };
//   decrement = () => {
//     this.setState({
//       count: this.state.count - 1,
//     });
//   };
//   render() {
//     return (
//       <div>
//         <h1>{`${this.state.count}`}</h1>
//         <button onClick={this.increment}>+</button>
//         <button onClick={this.decrement}>-</button>
//       </div>
//     );
//   }
// }

// export default Counter;
