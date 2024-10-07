import { useEffect, useState } from "react";

export function Child() {
  const [age, setAge] = useState(0);
  const [name, setName] = useState("");

  globalVar = globalVar + 1;
  console.log(globalVar);

  // going to douible execute a bunch of things in your code to check for bugs

  useEffect(() => {
    document.addEventListener("click", () => {
      console.log("Click");
    });

    return () => {
      console.log("Unmount");
    };
  }, []);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <br />
      <button onClick={() => setAge((a) => a - 1)}>-</button>
    </div>
  );
}

// note
