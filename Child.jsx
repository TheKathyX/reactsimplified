import { useState, useEffect } from "react";
import { render } from "react-dom";

export function Child() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    console.log("Name or count was changed", name, count);
  }, [name, count]);

  // showing the number of the width of the page
  useEffect(() => {
    window.addEventListener("resize", () => {
      console.log("Here");
      setWidth(window.innerWidth);
    });
  }, []);

  // updating effect
  useEffect(() => {
    const handler = () => {
      console.log(name);
    };
    document.addEventListener("click", handler);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, [name]);

  // adding new event listeners everytime the use effect runs, showing the updated version -> fixed version
  useEffect(() => {
    const handler = () => {
      console.log(name);
    };
    doucment.addEventListener("click", handler);
    console.log("inside effect");

    return () => {
      document.removeEventListener("click", handler);
      console.log("cleanup");
    };
  }, [name]);

  // Lifecycle Methods
  componentDidMount() {
    console.log("Mount")
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.name != this.state.name) {
      console.log("Name has changed")
    }
  }

  componentWillUnmount() {
    console.log("Unmount")
  }

  return (
    <div className="child">
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <br />
      <br />
      <button onClick={() => setAge((currentAge) => currentAge - 1)}>-</button>
      {age}
      <button onClick={() => setAge((currentAge) => currentAge + 1)}>+</button>
      <br />
      <br />
      My name is {name} and I am {age} years old.
      <br />
      <br />
      Width: {width}
    </div>
  );
}
