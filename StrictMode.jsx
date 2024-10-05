import { useEffect, useState } from "react";

export function Child() {
  const [age, setAge] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    document.addEventListener("click", () => {
      console.log("Click");
    });
    console.log("Mount");

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
