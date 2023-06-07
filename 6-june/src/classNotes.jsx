import { useEffect, useReducer, useRef, useState } from "react";
import "./App.css";
import Loader from "./components/Loader/Loader";

// useState 👑
// useEffect 👑

// useRef 🔥
// useReducer 🔥

const ComponentC = ({ userName }) => {
  return <h3>Component C : {userName}</h3>;
};

const ComponentB = (props) => {
  return (
    <div>
      <h3>Component B</h3>
      {/* <ComponentC userName="Oscar Isaac" /> */}
      <ComponentC {...props} />
    </div>
  );
};

const ComponentA = (props) => {
  // props -> { userName: 'Oscar Isaac' }

  return (
    <div>
      <h3>Component A</h3>
      {/* <ComponentB userName="Oscar Isaac" /> */}
      <ComponentB {...props} />
    </div>
  );
};

const App = () => {
  const userName = "Oscar Isaac";
  return (
    <main>
      <ComponentA userName={userName} />
    </main>
  );
};

// Named Export
export { App };

/***************************************************/

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

// useState 👑
// useEffect 👑

// useRef 🔥
// useReducer 🔥
// useContext ❤️

const ComponentC = () => {
  const userName = useContext(UserNameContext);
  return <h3>Component C : {userName} </h3>;
};

const ComponentB = () => {
  const userName = useContext(UserNameContext);
  return (
    <div>
      <h3>Component B : {userName}</h3>
      {/* <ComponentC userName="Oscar Isaac" /> */}
      <ComponentC />
    </div>
  );
};

const ComponentA = () => {
  // props -> { userName: 'Oscar Isaac' }

  return (
    <div>
      <h3>Component A </h3>
      {/* <ComponentB userName="Oscar Isaac" /> */}
      <ComponentB />
    </div>
  );
};

/**
 * Context
 * Problem : Prop drilling
 *
 * Two important concepts :
 * 1. Provide a value ✅
 * 2. Consume a value ✅
 */

/** createContext returns a Context Object */
/** Make sure to name it in PascalCase */
const UserNameContext = createContext();

// UserNameContext.Provider -> A React Component

const App = () => {
  /** Context value */
  const userName = "Oscar Isaac";
  return (
    <main>
      <UserNameContext.Provider value={userName}>
        <ComponentA />
      </UserNameContext.Provider>
    </main>
  );
};

// Named Export
export { App };

/***************************************************/

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

// useState 👑
// useEffect 👑

// useRef 🔥
// useReducer 🔥
// useContext ❤️

const ComponentC = () => {
  const { userName } = useContext(UserNameContext);
  return <h3>Component C : {userName} </h3>;
};

const ComponentB = () => {
  const { userName } = useContext(UserNameContext);
  return (
    <div>
      <h3>Component B : {userName}</h3>
      {/* <ComponentC userName="Oscar Isaac" /> */}
      <ComponentC />
    </div>
  );
};

const ComponentA = () => {
  // props -> { userName: 'Oscar Isaac' }

  return (
    <div>
      <h3>Component A </h3>
      {/* <ComponentB userName="Oscar Isaac" /> */}
      <ComponentB />
    </div>
  );
};

/**
 * Context
 * Problem : Prop drilling
 *
 * Two important concepts :
 * 1. Provide a value ✅
 * 2. Consume a value ✅
 */

/** createContext returns a Context Object */
/** Make sure to name it in PascalCase */
const UserNameContext = createContext();

// UserNameContext.Provider -> A React Component

const App = () => {
  /** Context value */
  const userName = "Oscar Isaac";
  return (
    <main>
      <UserNameContext.Provider value={{ userName: "Aditya" }}>
        <ComponentA />
      </UserNameContext.Provider>
    </main>
  );
};

// Named Export
export { App };

/***************************************************/

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

// useState 👑
// useEffect 👑

// useRef 🔥
// useReducer 🔥
// useContext ❤️

const ComponentC = () => {
  const { setCount } = useContext(UserNameContext);
  return (
    <div style={{ border: "1px solid #40128B", padding: "1rem" }}>
      <h3>Component C </h3>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </div>
  );
};

const ComponentB = () => {
  return (
    <div>
      <h3>Component B</h3>
      {/* <ComponentC userName="Oscar Isaac" /> */}
      <ComponentC />
    </div>
  );
};

const ComponentA = () => {
  // props -> { userName: 'Oscar Isaac' }

  return (
    <div>
      <h3>Component A </h3>
      {/* <ComponentB userName="Oscar Isaac" /> */}
      <ComponentB />
    </div>
  );
};

/**
 * Context
 * Problem : Prop drilling
 *
 * Two important concepts :
 * 1. Provide a value ✅
 * 2. Consume a value ✅
 */

/** createContext returns a Context Object */
/** Make sure to name it in PascalCase */
const UserNameContext = createContext();

// UserNameContext.Provider -> A React Component

const App = () => {
  /** Context value */
  const userName = "Oscar Isaac";
  const [count, setCount] = useState(0);
  return (
    <main>
      <div
        style={{
          border: "1px solid #40128B",
          padding: "1rem",
          marginTop: "1rem",
        }}
      >
        <h3>App Count : {count} </h3>
        <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      </div>
      <UserNameContext.Provider value={{ setCount }}>
        <ComponentA />
      </UserNameContext.Provider>
    </main>
  );
};

// Named Export
export { App };

/***************************************************/

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

// useState 👑
// useEffect 👑

// useRef 🔥
// useReducer 🔥
// useContext ❤️

const ComponentC = () => {
  const { increment, decrement } = useContext(UserNameContext);
  return (
    <div style={{ border: "1px solid #40128B", padding: "1rem" }}>
      <h3>Component C </h3>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

const ComponentB = () => {
  const { userName } = useContext(UserNameContext);
  return (
    <div>
      <h3>Component B : {userName} </h3>
      {/* <ComponentC userName="Oscar Isaac" /> */}
      <ComponentC />
    </div>
  );
};

const ComponentA = () => {
  // props -> { userName: 'Oscar Isaac' }

  return (
    <div>
      <h3>Component A </h3>
      {/* <ComponentB userName="Oscar Isaac" /> */}
      <ComponentB />
    </div>
  );
};

/**
 * Context
 * Problem : Prop drilling
 *
 * Two important concepts :
 * 1. Provide a value ✅
 * 2. Consume a value ✅
 */

/** createContext returns a Context Object */
/** Make sure to name it in PascalCase */
const UserNameContext = createContext();

// UserNameContext.Provider -> A React Component

const App = () => {
  /** Context value */
  const userName = "Oscar Isaac";
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((c) => c + 1);
  };

  const decrement = () => {
    setCount((c) => c - 1);
  };

  return (
    <main>
      <div
        style={{
          border: "1px solid #40128B",
          padding: "1rem",
          marginTop: "1rem",
        }}
      >
        <h3>App Count : {count} </h3>
        <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      </div>
      <UserNameContext.Provider value={{ increment, decrement, userName }}>
        <ComponentA />
      </UserNameContext.Provider>
    </main>
  );
};

// Named Export
export { App };

/***************************************************/

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

// useState 👑
// useEffect 👑

// useRef 🔥
// useReducer 🔥
// useContext ❤️

const ComponentC = () => {
  const [count, setCount] = useContext(UserNameContext);
  return (
    <div style={{ border: "1px solid #40128B", padding: "1rem" }}>
      <h3>Component C : {count} </h3>
      <button onClick={setCount}>Increment</button>
    </div>
  );
};

const ComponentB = () => {
  const { userName } = useContext(UserNameContext);
  return (
    <div>
      <h3>Component B : {userName} </h3>
      {/* <ComponentC userName="Oscar Isaac" /> */}
      <ComponentC />
    </div>
  );
};

const ComponentA = () => {
  // props -> { userName: 'Oscar Isaac' }

  return (
    <div>
      <h3>Component A </h3>
      {/* <ComponentB userName="Oscar Isaac" /> */}
      <ComponentB />
    </div>
  );
};

/**
 * Context
 * Problem : Prop drilling
 *
 * Two important concepts :
 * 1. Provide a value ✅
 * 2. Consume a value ✅
 */

/** createContext returns a Context Object */
/** Make sure to name it in PascalCase */
const UserNameContext = createContext();

// UserNameContext.Provider -> A React Component

const App = () => {
  /** Context value */
  const userName = "Oscar Isaac";
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((c) => c + 1);
  };

  const decrement = () => {
    setCount((c) => c - 1);
  };

  return (
    <main>
      <div
        style={{
          border: "1px solid #40128B",
          padding: "1rem",
          marginTop: "1rem",
        }}
      >
        <h3>App Count : {count} </h3>
        <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      </div>
      <UserNameContext.Provider value={[count, increment]}>
        <ComponentA />
      </UserNameContext.Provider>
    </main>
  );
};

// Named Export
export { App };

/************************************************/

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
import UserContext from "./context/UserContext";

// useState 👑
// useEffect 👑

// useRef 🔥
// useReducer 🔥
// useContext ❤️

const UserMumbai = () => {
  const setUser = useContext(UserContext);
  return (
    <div style={{ border: "2px solid #40128B", padding: "1rem" }}>
      <h3>Mumbai</h3>
      <button onClick={() => setUser({ city: "Mumbai" })}>
        Update from Mumbai
      </button>
    </div>
  );
};

const UserBangalore = () => {
  const setUser = useContext(UserContext);
  return (
    <>
      <div style={{ border: "2px solid #40128B", padding: "1rem" }}>
        <h3>Bangalore</h3>
        <button onClick={() => setUser({ city: "Bangalore" })}>
          Update from Bangalore
        </button>
      </div>
      <UserMumbai />
    </>
  );
};

const UserLucknow = () => {
  const setUser = useContext(UserContext);
  return (
    <>
      <div style={{ border: "2px solid #40128B", padding: "1rem" }}>
        <h3>Lucknow</h3>
        <button onClick={() => setUser({ city: "Lucknow" })}>
          Update from Lucknow
        </button>
      </div>
      <UserBangalore />
    </>
  );
};

const App = () => {
  const [user, setUser] = useState({ city: "Hyderabad" });
  return (
    <main style={{ display: "flex", gap: "1rem", flexDirection: "column" }}>
      <h1>{user.city}</h1>
      <UserContext.Provider value={setUser}>
        <UserLucknow />
      </UserContext.Provider>
      <button onClick={() => setUser({ city: "Hyderabad" })}>Reset</button>
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
import UserContext from "./context/UserContext";

// useState 👑
// useEffect 👑

// useRef 🔥
// useReducer 🔥
// useContext ❤️

const UserMumbai = () => {
  const setUser = useContext(UserContext);
  return (
    <div style={{ border: "2px solid #40128B", padding: "1rem" }}>
      <h3>Mumbai</h3>
      <button onClick={() => setUser({ city: "Mumbai" })}>
        Update from Mumbai
      </button>
    </div>
  );
};

const UserBangalore = () => {
  const setUser = useContext(UserContext);
  return (
    <>
      <div style={{ border: "2px solid #40128B", padding: "1rem" }}>
        <h3>Bangalore</h3>
        <button onClick={() => setUser({ city: "Bangalore" })}>
          Update from Bangalore
        </button>
      </div>
      <UserMumbai />
    </>
  );
};

const UserLucknow = () => {
  const setUser = useContext(UserContext);
  return (
    <>
      <div style={{ border: "2px solid #40128B", padding: "1rem" }}>
        <h3>Lucknow</h3>
        <button onClick={() => setUser({ city: "Lucknow" })}>
          Update from Lucknow
        </button>
      </div>
      <UserBangalore />
    </>
  );
};

const UserCityChange = () => {
  const [user, setUser] = useState({ city: "Hyderabad" });

  return (
    <div style={{ display: "flex", gap: "1rem", flexDirection: "column" }}>
      <h1>{user.city}</h1>
      <UserContext.Provider value={setUser}>
        <UserLucknow />
      </UserContext.Provider>
      <button onClick={() => setUser({ city: "Hyderabad" })}>Reset</button>
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