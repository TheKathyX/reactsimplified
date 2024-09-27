import { useEffect } from "react";

export function ChildExercise() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  // the text render each time the component re-renders
  useEffect(() => {
    console.log("Re-render");
  });

  // the text Hi when the component mounts
  useEffect(() => {
    console.log("Hi");
  }, []);

  // the texxt My name is {name} and I am {age} years old whenever the name or age changes
  useEffect(() => {
    console.log(`My name is ${name} and I am ${age} years old`);
  }, [name, age]);

  // update the document title to be equal to name whenever the name changes
  useEffect(() => {
    document.title = name;
  }, [name]);

  // the text Bye when the component unmounts
  useEffect(() => {
    console.log("Hi");

    return () => {
      console.log("Bye");
    };
  }, []);
{
  // Create a timeout that console.log's the text My name is {name} only after there has been a 1 second delay since the last time the name was changed
  useEffect(() => {
    setTimeout(() => {
      console.log(`my name is ${name}`);
    }, 1000)

    return () => {
        clearTimeout(timeout)
    }
  }, [name])

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
      {age}
      <button onClick={() => setAge((a) => a + 1)}>+</button>
      <br />
      <br />
      My name is {name} and I am {age} years old.
    </div>
  );
}
