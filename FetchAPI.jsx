import { useEffect } from "react";

export default function App() {
  const [users, setUsers] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setError(undefined);
    setUsers(undefined); // Set users but not required
    const controller = new AbortController()
    fetch("https://jsonplaceholder.typicode.com/users", {signal: })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          return Promise.reject(res);
        }
      })
      .then((data) => {
        console.log("Here")
        setUsers(data);
      })
      .catch((e) => {
        if (e?.name === "AbortError") return
          setError(e)
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  let jsx;
  if (loading) {
    jsx = <h2>Loading...</h2>;
  } else if (error != null) {
    jsx = <h2>Error!</h2>;
  } else {
    jsx = JSON.stringfy(users);
  }

  return (
    <div>
      <h1>Users</h1>
      {JSON.stringfy(users)}
      {/* List of users */}
    </div>
  );
}
