import { useEffect, useReducer, useState } from "react";
import "./App.css";
import Loader from "./components/Loader/Loader";

// useState 👑
// useEffect 👑

// useReducer

const INITIAL_STATE = {
  count: 0,
};

const reducer = (state, action) => {
  // state  -> { count: 0 }
  // action -> { type: "INCREMENT" }
  if (action.type === "INCREMENT") {
    // DON'T DO THIS!! React requires a new reference!!
    // return state.count = state.count + 1

    // By returning a new state, the component re-renders
    const newState = { count: state.count + 1 };
    return newState;
  }

  return state;
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  // state       -> { count: 0 }
  // state.count -> 0

  const increment = () => {
    // STEP 1 - Create an Action object
    const action = { type: "INCREMENT" };

    // STEP 2 - Dispatch the created Action object
    // dispatch sends the action object to the reducer
    dispatch(action);
  };

  return (
    <main>
      <h3>Count : {state.count}</h3>
      <button onClick={increment}>Increment</button>
    </main>
  );
};

// Named Export
export { App };

/*************************************************/

const INITIAL_STATE = {
  count: 0,
};

const reducer = (state, action) => {
  // state  -> { count: 0 }
  // action -> { type: "DECREMENT" }
  // if (action.type === "INCREMENT") {
  //   // DON'T DO THIS!! React requires a new reference!!
  //   // return state.count = state.count + 1

  //   // By returning a new state, the component re-renders
  //   const newState = { count: state.count + 1 };
  //   return newState;
  // }

  // if (action.type === "DECREMENT") {
  //   const newState = { count: state.count - 1 };
  //   return newState;
  // }

  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  // state       -> { count: 0 }
  // state.count -> 0

  const increment = () => {
    // STEP 1 - Create an Action object
    const action = { type: "INCREMENT" };

    // STEP 2 - Dispatch the created Action object
    // dispatch sends the action object to the reducer
    dispatch(action);
  };

  const decrement = () => {
    const action = { type: "DECREMENT" };
    dispatch(action);
  };

  return (
    <main>
      <h3>Count : {state.count}</h3>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </main>
  );
};

// Named Export
export { App };

/**********************************************************/

import { useEffect, useReducer, useState } from "react";
import "./App.css";
import Loader from "./components/Loader/Loader";

// useState 👑
// useEffect 👑

// useReducer

const INITIAL_STATE = {
  users: [],
  loading: false,
  error: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { loading: true, error: "", users: [] };
    case "SUCCESS":
      return { loading: false, error: "", users: action.payload };
    case "ERROR":
      return { loading: false, error: action.payload, users: [] };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  useEffect(() => {
    (async () => {
      dispatch({ type: "LOADING" });
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/userssssss"
        );

        if (!response.ok) {
          throw new Error(`API failure : ${response.status}`);
          // { message: `API failure : ${response.status}` }
        }

        const data = await response.json();
        dispatch({ type: "SUCCESS", payload: data });
      } catch (e) {
        dispatch({ type: "ERROR", payload: e.message });
      }
    })();
  }, []);

  if (state.loading) {
    return <Loader />;
  }

  if (state.error) {
    return <h3>{state.error}</h3>;
  }

  return (
    <main>
      {state.users.map((user) => (
        <h3>{user.name}</h3>
      ))}
    </main>
  );
};

// Named Export
export { App };
