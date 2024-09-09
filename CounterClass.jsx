import React from "react";

export class CounterClass extends React.Component {
  constructor(prop) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  render() {
    const handleClick = () => {
      this.setState((currentState) => {
        return { counter: currentState.counter + 1 };
      });
    };

    return <div onClick={handleClick}>{this.state.counter}</div>;
  }
}

// Exercise #5
// Create a new component called Counter
// have a state for a counter that starts at 0 and render that in the JSX
// When you click the number increment it by 1
