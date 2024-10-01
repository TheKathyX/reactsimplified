import React from "react";

export class Child extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      age: 0,
    };
  }

  render() {
    return (
      <div>
        <input
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <br />
        <br />
        <button
          onclick={() =>
            this.setState((currentState) => {
              return {
                age: currentState.age - 1,
              };
            })
          }
        ></button>
      </div>
    );
  }
}
