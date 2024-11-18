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
    </>
  );
}

export default App;
