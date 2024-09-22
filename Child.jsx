import { useState } from "react";
import { render } from "react-dom";

export function Child() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  console.log("render child");

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
    </div>
  );
}
