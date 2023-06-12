import { useState, memo, useRef, useMemo } from "react";
import "./App.css";

// memo -> Higher Order Component ❤️
// useMemo
// useCallback

const Child = ({ count }) => {
  console.log("Child re-render");
  return <h1>Count in child : {count}</h1>;
};

// Cache : <h1>Child</h1>

const OptimizedChild = memo(Child);
// { id: 1 } -> xA123
// { id: 1 } -> ay123

// Method 2
// const user = { id: 1 };

export const App = () => {
  const [count, setCount] = useState(0);
  const [anotherCount, setAnotherCount] = useState(0);
  // anotherCount -> 1
  // { id: 1 } <--- CACHE
  const user = useMemo(() => {
    return { id: anotherCount };
  }, [anotherCount]); // 0 ---> 1 CHANGED!

  // const user = useRef({ id: anotherCount });
  // { id: 0 }

  // Method 1
  // const userRef = useRef();

  return (
    <main>
      <h1>Count : {count} </h1>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>

      <h1>Another Count : {anotherCount}</h1>
      <button onClick={() => setAnotherCount((c) => c + 1)}>Increment</button>

      <OptimizedChild age={user} />
    </main>
  );
};

/*********************************************/

import { useState, memo, useRef, useMemo } from "react";
import "./App.css";

// memo -> Higher Order Component ❤️
// useMemo
// useCallback

// const Child = ({ count }) => {
//   console.log("Child re-render");
//   return <h1>Count in child : {count}</h1>;
// };

// Cache : <h1>Child</h1>

// const OptimizedChild = memo(Child);
// { id: 1 } -> xA123
// { id: 1 } -> ay123

// Method 2
// const user = { id: 1 };

function isValidName(string) {
  console.log("isValidName run!");
  return !string.includes("&");
}

export const App = () => {
  const [formDetails, setFormDetails] = useState({
    name: "",
    email: "",
    location: "",
  });

  // formDetails.name -> "A"

  const handleInputChange = (event) => {
    setFormDetails((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  // const isNameError = !isValidName(formDetails.name);
  const isNameError = useMemo(() => {
    return !isValidName(formDetails.name);
  }, [formDetails.name]);

  return (
    <main onChange={handleInputChange}>
      <input
        name="name"
        type="text"
        placeholder="Name"
        value={formDetails.name}
        className={isNameError && "error"}
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        value={formDetails.email}
      />
      <input
        name="location"
        type="text"
        placeholder="Location"
        value={formDetails.location}
      />
    </main>
  );
};

/*********************************************/

import { useState, memo, useRef, useMemo, useCallback } from "react";
import "./App.css";

// memo -> Higher Order Component ❤️
// useMemo
// useCallback

const Child = ({ handleClick }) => {
  console.log("Child re-render");
  return (
    <div>
      <button onClick={handleClick}>Increment from child</button>
    </div>
  );
};

// Cache : <h1>Child</h1>

const OptimizedChild = memo(Child);
// { id: 1 } -> xA123
// { id: 1 } -> ay123

export const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount((c) => c + 1);
    // count => 0
  }, []);

  // const handleClick = useMemo(() => {
  //   return () => {
  //     setCount((c) => c + 1);
  //   };
  // }, []);

  return (
    <main>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <OptimizedChild handleClick={handleClick} />
    </main>
  );
};
