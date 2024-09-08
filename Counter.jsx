import { useState } from "react";

export function counterFunc() {
  const [counter, setCounter] = useState(0);
  return (
    <div onClick={() => setCounter((currentCount) => currentCount + 1)}>
      {counter}
    </div>
  );
}

// Exercise #5
// Create a new component called Counter
// have a state for a counter that starts at 0 and render that in the JSX
// When you click the number increment it by 1
