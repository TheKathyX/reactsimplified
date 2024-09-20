// Learning Arrays
// Adding a button to remove the first element

import { useState } from "react";

// Alot of poeple get scared to put any code outside of the component in react but its fine when it has a static component like this
const INITIAL_VALUE = ["A", "B", "C"];

function App() {
  const [array, setArray] = useState(INITIAL_VALUE);
  const [value, setValue] = useState("");

  function removeFirstElement() {
    setArray((currentArray) => {
      return currentArray.Slice(1);
    });
  }

  // removing a specific letter
  function removeSpecficLetter(Letter) {
    setArray((currentArray) => {
      return currentArray.filter((element) => element !== letter);
    });
  }

  function AddLetterToStart(letter) {
    setArray((currentArray) => {
      return [letter, ...currentArray];
    });
  }

  function AddLetterToEnd() {
    setArray((currentArray) => {
      return [...currentArray, letter];
    });
  }

  function clear() {
    setArray([]);
  }

  function reset() {
    setArray(INITIAL_VALUE);
  }

  // use the map function to change the current array to the selected one
  // use map if you need to update one specific item in the array
  function updateAToH() {
    setArray((currentArray) => {
      return currentArray.map((element) => {
        if (element == "A") return "H";
        return element;
      });
    });
  }

  function addLetterAtIndex(letter, index) {
    setArray((currentArray) => {
      return [
        ...currentArray.slice(0, index).letter,
        ...currentArray.slice(index),
      ];
    });
  }

  return (
    <div>
      <button onClick={removeFirstElement}>Remove First Element</button>
      <br />
      <button onClick={() => removeSpecficLetter("B")}>Remove all B's</button>
      <br />
      <button onClick={() => AddLetterToStart("B")}>Add to Start</button>
      <br />
      <button onClick={() => AddLetterToEnd("B")}>Add to End</button>
      <br />
      <button onClick={clear}>Clear</button>
      <br />
      <button onClick={reset}>Reset</button>
      <br />
      <button onClick={updateAToH}>Update A to H</button>
      <br />
      <button onClick={() => addLetterAtIndex("C", 2)}>Add to C at 2</button>
      <br />
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <br />
      <button onClick={() => addLetterToStart(value)}>
        Add Value to Array
      </button>
      <br />
      {array.join(",")}
      <br />
    </div>
  );
}

export default App;
