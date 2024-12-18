import { useEffect } from "react";
import { User } from "./Users";

function App() {
  // inline way to add a loading state
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    const controller = new AbortController();
    // full url: "https://jsonplaceholder.typicode.com/users"
    fetch("users.json", {
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
            return (
              <User
                key={user.id}
                name={user.name}
                email={user.email}
                phone={user.phone}
                username={user.username}
              />
              // a spread syntax is {...user} this will go through all the inputs if you have alot
            );
          })}
        </ul>
      )}
    </>
  );
}

export default App;

// rendering a raw html
// never want to use the dangerousHTML thing because hackers can get into it (cross site crypting, etc)

/* const CUSTOM_HTML = ` 
<h1>Hi</h1> 
<div>My name is Kyle</div>
`;
function App() {
  return <div dangerouslySetInnerHTML={{ _html: CUSTOM_HTML }}></div>;
} 
*/
