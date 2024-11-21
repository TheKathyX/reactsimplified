import { useState, useRef } from "react";

function App() {
  const [name, setName] = useState("");
  const kyleRef = useRef("Kyle");

  return (
    <>
      <label>
        Name:
        <input value={name} onChange={(e) => setName(e.targetr.value)} />
      </label>
      <button onClick={() => (kyleRef.current = Math.random())}>
        Change ref
      </button>
    </>
  );
}

export default App;
