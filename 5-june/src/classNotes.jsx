import { useEffect, useReducer, useRef, useState } from "react";
import "./App.css";
import Loader from "./components/Loader/Loader";

// useState 👑
// useEffect 👑

// useRef 🔥
// useReducer 🔥

/** First Use Case of useRef :
 * Get the actual HTML DOM element so that we can manipulate it
 * within our code.
 */
const App = () => {
  const inputRef = useRef(null);

  // { current: null }

  // useEffect(() => {
  //   inputRef.current.focus();
  // }, []);

  return (
    <main>
      <input
        ref={inputRef}
        id="firstName"
        type="text"
        placeholder="Focus me!"
      />
      <br />
      <br />
      <button
        onClick={() => {
          inputRef.current.focus();
        }}
      >
        Focus!
      </button>
      <button
        onClick={() => {
          inputRef.current.blur();
        }}
      >
        Blur!
      </button>
    </main>
  );
};

// const input = document.querySelector("input");
// input.focus();

// Named Export
export { App };

/******************************************************/

import { useEffect, useReducer, useRef, useState } from "react";
import "./App.css";
import Loader from "./components/Loader/Loader";

// useState 👑
// useEffect 👑

// useRef 🔥
// useReducer 🔥

/** Second use :
 */

const App = () => {
  const [count, setCount] = useState(0);
  let copyOfCount = useRef(0);

  return (
    <main>
      <h3>Count : {count}</h3>
      <h3>Ref : {copyOfCount.current}</h3>

      <button
        onClick={() => {
          /** THIS TRIGGERS A RE-RENDER */
          setCount((prevCount) => prevCount + 1);
        }}
      >
        Increment State
      </button>
      <button
        onClick={() => {
          /** THIS DOES NOT TRIGGER A RE-RENDER */
          copyOfCount.current += 1;
        }}
      >
        Increment ref
      </button>
    </main>
  );
};

// const input = document.querySelector("input");
// input.focus();

// Named Export
export { App };

/****************************************************/

import { useEffect, useReducer, useRef, useState } from "react";
import "./App.css";
import Loader from "./components/Loader/Loader";

// useState 👑
// useEffect 👑

// useRef 🔥
// useReducer 🔥

/** Second use :
 */

const App = () => {
  const inputNameRef = useRef();
  const inputEmailRef = useRef();

  return (
    <main>
      <input ref={inputNameRef} type="text" placeholder="Name" />
      <br />
      <br />
      <input ref={inputEmailRef} type="email" placeholder="Email" />
      <br />
      <br />
      <div>
        <button
          onClick={() => {
            inputNameRef.current.focus();
          }}
        >
          Focus Name
        </button>
        <button
          onClick={() => {
            inputEmailRef.current.focus();
          }}
        >
          Focus Email
        </button>
      </div>
    </main>
  );
};

// const input = document.querySelector("input");
// input.focus();

// Named Export
export { App };
