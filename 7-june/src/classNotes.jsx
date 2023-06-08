import {
  useEffect,
  useReducer,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";
import "./App.css";
import Loader from "./components/Loader/Loader";
import UserContext, { UserContextProvider } from "./context/UserContext";

// useState 👑
// useEffect 👑

// useRef 🔥
// useReducer 🔥
// useContext ❤️

const SelectedCity = () => {
  const [user] = useContext(UserContext);
  return <h1>{user.city}</h1>;
};

const UserMumbai = () => {
  const [, updateUserCity] = useContext(UserContext);
  return (
    <>
      <div style={{ border: "2px solid #40128B", padding: "1rem" }}>
        <h3>Mumbai</h3>
        <button onClick={() => updateUserCity("Mumbai")}>
          Update from Mumbai
        </button>
      </div>
      <SelectedCity />
    </>
  );
};

const UserBangalore = () => {
  const [, updateUserCity] = useContext(UserContext);
  return (
    <>
      <div style={{ border: "2px solid #40128B", padding: "1rem" }}>
        <h3>Bangalore</h3>
        <button onClick={() => updateUserCity("Bangalore")}>
          Update from Bangalore
        </button>
      </div>
      <UserMumbai />
    </>
  );
};

const UserLucknow = () => {
  const [, updateUserCity] = useContext(UserContext);
  return (
    <>
      <div style={{ border: "2px solid #40128B", padding: "1rem" }}>
        <h3>Lucknow</h3>
        <button onClick={() => updateUserCity("Lucknow")}>
          Update from Lucknow
        </button>
      </div>
      <UserBangalore />
    </>
  );
};

const UserCityChange = () => {
  return (
    <div style={{ display: "flex", gap: "1rem", flexDirection: "column" }}>
      <UserContextProvider>
        <UserLucknow />
      </UserContextProvider>
    </div>
  );
};

const App = () => {
  return (
    <main>
      <UserCityChange />
    </main>
  );
};

// Named Export
export { App };

/**************************************************/

// UserContext.jsx

import { createContext, useState } from "react";

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({ city: "Hyderabad" });

  const updateUserCity = (newCity) => {
    setUser({ city: newCity.toUpperCase() });
  };

  return (
    <UserContext.Provider value={[user, updateUserCity]}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;

/*********************************************************/

import {
  useEffect,
  useReducer,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";
import "./App.css";
import Loader from "./components/Loader/Loader";
import UserContext, { UserContextProvider } from "./context/UserContext";

// useState 👑
// useEffect 👑

// useRef 🔥
// useReducer 🔥
// useContext ❤️

// useCounter

function useCounter() {
  const [count, setCount] = useState(0);
  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => c - 1);

  return { count, increment, decrement };
}

const ChildWithIncrement = () => {
  const { count, increment } = useCounter();
  /*
    const [count, setCount] = useState(0);
    const increment = () => setCount((c) => c + 1);
    const decrement = () => setCount((c) => c - 1);
    */

  return (
    <>
      <h1> Counter : {count}</h1>
      <button onClick={increment}>Increment</button>
    </>
  );
};

const App = () => {
  const { count, increment, decrement } = useCounter();
  return (
    <main>
      <h1> Counter : {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <hr />
      <ChildWithIncrement />
    </main>
  );
};

// Named Export
export { App };

/***********************************************/

import {
  useEffect,
  useReducer,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";
import "./App.css";
import Loader from "./components/Loader/Loader";
import UserContext, { UserContextProvider } from "./context/UserContext";

// useState 👑
// useEffect 👑

// useRef 🔥
// useReducer 🔥
// useContext ❤️

// useCounter

function useCounter({ initialCount = 0 }) {
  const [count, setCount] = useState(initialCount);
  const increment = (step) => setCount((c) => c + step);
  const decrement = () => setCount((c) => c - 1);

  return { count, increment, decrement };
}

const ChildWithIncrement = () => {
  const { count, increment } = useCounter({ initialCount: 5 });

  return (
    <>
      <h1> Counter : {count}</h1>
      <button onClick={() => increment(5)}>Increment</button>
    </>
  );
};

const App = () => {
  const { count, increment, decrement } = useCounter({});
  return (
    <main>
      <h1> Counter : {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <hr />
      <ChildWithIncrement />
    </main>
  );
};

// Named Export
export { App };

/*************************************************************/

import {
  useEffect,
  useReducer,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";
import "./App.css";
import Loader from "./components/Loader/Loader";
import UserContext, { UserContextProvider } from "./context/UserContext";

// useState 👑
// useEffect 👑

// useRef 🔥
// useReducer 🔥
// useContext ❤️

// useCounter
// useMount

function useMount(callback) {
  useEffect(() => {
    callback();
  }, []);
}

const App = () => {
  useMount(() => {
    console.log("Ran on mount!");
  });

  return (
    <main>
      <h1>useOnMount</h1>
    </main>
  );
};

// Named Export
export { App };

/****************************************************/

import {
  useEffect,
  useReducer,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";
import "./App.css";
import Loader from "./components/Loader/Loader";
import UserContext, { UserContextProvider } from "./context/UserContext";
import useFetch from "./hooks/useFetch";

// useState 👑
// useEffect 👑

// useRef 🔥
// useReducer 🔥
// useContext ❤️

// useCounter
// useMount
// useFetch

// Performance Optimization
// useMemo
// useCallback

const App = () => {
  const [count, setCount] = useState(1);
  const { data, loading } = useFetch(
    `https://jsonplaceholder.typicode.com/todos/${count}`
  );

  if (loading) {
    return <Loader />;
  }
  return (
    <main>
      <h1>{data?.title}</h1>
      <button onClick={() => setCount((c) => c + 1)}>Fetch next title</button>
      <h1>ID : {count}</h1>
    </main>
  );
};

// Named Export
export { App };
