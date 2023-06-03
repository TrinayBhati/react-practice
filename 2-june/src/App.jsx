import { useState, useEffect, useReducer } from "react";
import "./App.css";

const INITIAL_STATE = {
  users: [],
  loading: false,
  error: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { loading: true, users: [], error: "" };
    case "SUCCESS":
      return { loading: false, users: action.payload, error: "" };
    case "ERROR":
      return { loading: false, users: [], error: action.payload };
    default:
      return state;
  }
};

function App() {
  // const [users, setUsers] = useState([]);

  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  useEffect(() => {
    (async () => {
      // setLoading(true);
      dispatch({ type: "LOADING" });
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users`
        );
        if (!response.ok) {
          throw new Error(`API error: ${response.status}`);
        }

        const data = await response.json();
        // setUsers(data);
        // setError("");
        dispatch({ type: "SUCCESS", payload: data });
      } catch (e) {
        // const errorMessage = e.message;
        // setError(errorMessage);
        dispatch({ type: "ERROR", payload: e.message });
      }
      // finally {
      //   setLoading(false);
      // }
    })();
  }, []);
  if (state.loading) {
    return <h3>LOADING....</h3>;
  }
  if (state.error) {
    return <h3>{state.error}</h3>;
  }

  return (
    <>
      {state.users.map((user) => (
        <h2>{user.name}</h2>
      ))}
    </>
  );
}

// const INITIAL_STATE = {
//   count: 0,
// };
// const reducer = (state, action) => {
//   // if (action.type == "INCREMENT") {
//   //   return { count: state.count + 1 };
//   // }
//   // if (action.type == "DECREMENT") {
//   //   return { count: state.count - 1 };
//   // }
//   switch (action.type) {
//     case "INCREMENT":
//       return { count: state.count + 1 };
//     case "DECREMENT":
//       return { count: state.count - 1 };
//   }
//   return state;
// };

/**function App() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const increment = () => {
    const action = { type: "INCREMENT" };
    dispatch(action);
  };

  const decrement = () => {
    const action = { type: "DECREMENT" };
    dispatch(action);
  };

  return (
    <div>
      <h2>{state.count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}**/

export default App;
