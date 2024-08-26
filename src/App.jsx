import React from "react";
// import { TodoList } from "../ToDoList";
import { Name } from "../name";
import { ToDoListClass } from "../ToDoListClass";

function App() {
  return (
    <div>
      <h1>TodoList</h1>
      <ToDoListClass />
      <Name />
    </div>>
  )
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