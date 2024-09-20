import { useState } from "react";
import { render } from "react-dom";

export function Child() {
  const [name, setName] = useState("");

  console.log("render child");

  return (
    <div className="child">
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <br />
      My name is {name}.
    </div>
  );
}
