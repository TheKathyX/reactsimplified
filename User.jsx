// React way of doing things

export function User({ name, age }) {
  return (
    <h1>
      {name}: <span style={{ color: "red" }}>{age}</span>
    </h1>
  );
}

// Normal javascript way of doing things
// create H1
const h1 = document.createElement("h1");
// Put name in h1
h1.innerText = name;
// create span in h1 that is red
const span = document.createElement("span");
span.style.color = "red";
h1.append(span);
// put age in that span
span.innerText = age;
