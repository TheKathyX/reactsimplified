import { useEffect } from "react";
import { User } from "./Users";

function App() {
  // inline way to add a loading state
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    const controller = new AbortController();
    fetch("https://jsonplaceholder.typicode.com/users", {
      signal: constroller.signal,
    })
      .then((res) => res.json())
      .then(setUsers)
      .finally(() => {
        setIsLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      <h1>User List</h1>
      {isLoading ? (
        <h2>Loading..</h2>
      ) : (
        <ul>
          {users.map((user) => {
            return <User key={user.id} name={user.name} />;
          })}
        </ul>
      )}
    </>
  );
}

export default App;
