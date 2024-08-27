export function NameFunc({ name, age = 30, isProgrammer }) {
  console.log("Is Programmer", isProgrammer);

  return (
    <div>
      {Name} {age}
    </div>
  );
}
