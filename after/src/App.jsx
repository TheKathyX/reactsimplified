import { useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then(setUsers);
  });

  return (
    <>
      <h1>User List</h1>
      <ul>
        {users.map((user) => {
          return <User name={user.name} />;
        })}
      </ul>
    </>
  );
}

export default App;
