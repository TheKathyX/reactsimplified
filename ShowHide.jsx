import { useState } from "react";
import { child } from "./Child";

function App() {
  const [isShown, setIsShown] = useState(true);

  const childComponent = isShown ? <Child /> : null;

  return (
    <div>
      <button
        style={{ display: "block", marginBlock: "1rem" }}
        onClick={() => setIsShown((s) => !s)}
      >
        Show/Hide
      </button>
      {childComponent}
    </div>
  );
}

export default App;
