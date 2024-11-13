import React from "react";
// import { TodoList } from "../ToDoList";
import { Name } from "../name";
import { ToDoListClass } from "../ToDoListClass";
import { ToDoListItem } from "../ToDoListItem";
import "./styles.css";
import img from "./Code.png";

function App() {
  return (
    <div>
      <h1>TodoList</h1>
      <ToDoListClass />
      <Name />
    </div>
  );
}

export default App;

// Exercise #1: Create a div with the class large and the id largeDiv with the text Hi
/*
function App() {
  return (
    <div id="largeDiv" className="large">
      Hi
    </div>
  );
} 
*/

// Exercise #2: Remove the text in hi
// Add a label with the for prop set to inputId and any text
// Add an input with the id InputId, type number, and value of 3 as a number
/*
function App() {
  return (
    <div id="largeDiv" className="large">
    <label htmlFor="inputId">SDfsfa</label>
    <input id="inputId" type="number" defaultValue={3} />
    </div>
  );
} 
*/

// Exercise #3: Create a component that renders and H1 with your name in it.
/*
function App() {
  return (
    <div>
      <Name />
    </div>>
  )
}
  */

// For Props section
/* import React from "react"
import { NameFund } from "./NameFunc"
import { NameClass } from "./NameClass"

function App() {
  return (
    <div>
      <NameFunc name="Different Name" isProgrammer={false} />
      {/* <NameClass /> }
    </div>
  )
} */

// Exercise #4
/*
function App() {
  return <ToDoListItem isComplete>Todo Item 1</ToDoListItem>;
}
*/

// Adding an img
/*
function App() {
  return <img src={img} />
}

export default App;
*/

// Using useState
/*import { useState } from "react"

function App() {
  const values = useState()
  const name = values[0]
  const setName = values[1]

  return <h1>Hi</h1>
}

export default App 


// Handle click
const [name, setName] = useState("Kyle")
const [age, setAge] = useState(27)

function handleClick() {
  setName("Sally")
  setName(age +1)

  // having the age up by 2 
  setAge(currentAge => {
    return currentAge + 1
    })
    setAge(currentAge => {
      return currentAge + 1
      })
}

return (
  <h1 onClick={handleClick}>
    Hi {name} {age}
    </h1>
)
*/

// Exercise #5
// Create a new component called Counter
// have a state for a counter that starts at 0 and render that in the JSX
// When you click the number increment it by 1

/*
import { counterFunc } from "../counter";

function App() {
  return <counterFunc />;
}
*/

// For CounterClass
/*
export default class AppClass extends React.Component {
  render() {
    return <CounterClass />
  }
}
  */

/* -> 43 - Hook Rules
import { useState, useEffect } from "react";

printName("dsds")

function const count: number {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount((c) => c - 1)}>-</button>
      {count}
      <button onClick={() => setCount(c => c + 1)}>+</button>
    </>
  );
}


function printName(name) {
  useEffect(() => {
    console.log("In use effect")
  }, [name])

  console.log(name)
}

export default App

*/
