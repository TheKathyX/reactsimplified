import { useState } from "react";
import { render } from "react-dom";

export function Child() {
  const [name, setName] = useState("");

  console.log("render child");

  return <div className="child"></div>;
}
