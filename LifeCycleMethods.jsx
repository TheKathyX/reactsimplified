import React from "react";

export class Child extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      age: 0,
    };

    this.handleDocumentClick = () => {
      console.log(this.state.name);
    };
  }

  componentDidMount() {
    console.log("mount");
  }

  componentWillMount() {
    console.log("Unmount");
    document.removeEventListener("click", this.handleDocumentClick);
  }

  // only gets called on update
  // also takes snapshot but it is almost never used
  componentDidUpdate(prevProps, prevState) {
    if (prevState.name !== this.state.name) {
      document.removeEventListener("click", this.handleDocumentClick);
      document.addEventListener("click", this.handleDocumentClick);
    }
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
