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
      <button onClick={() => console.log(kyleRef.current)}>Print Ref</button>
    </>
  );
}

export default App;

function App() {
  const [name, setName] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <label>
        Name:
        <input
          ref={inputRef}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
    </>
  );
}
