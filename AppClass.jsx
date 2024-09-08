import React from "react";

export default class Appclass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Kyle",
      age: 27,
    };
  }

  render() {
    <h1 onclick={() => this.setState({ name: "Sally" })}>
      Hi {this.state.name} {this.state.age}
    </h1>;
  }

  /*
  render() {
    function handleClick() {
        this.setState({ name: "Sally"})
    }
    return <h1 onClick={HandleClick}>Hi {this.state.name}</h1>;
  }
*/
}
