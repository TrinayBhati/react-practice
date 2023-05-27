import { useEffect, useState } from "react";
import "./App.css";

// useState ✅
// useEffect

// Side-Effect
// 1. Changing title of the page
// 2. Make API calls (react-query)
// 3. Timer and Intervals

// Cleanups

const App = () => {
  const [count, setCount] = useState(0);
  const [anotherCount, setAnotherCount] = useState(0);

  useEffect(() => {
    document.title = "Hello, Newton!";
  }, []);

  return (
    <main>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <hr />
      <h1>Another Count : {anotherCount}</h1>
      <button onClick={() => setAnotherCount(anotherCount + 10)}>
        Increment
      </button>
      <hr />
    </main>
  );
};

// Named Export
export { App };

/**********************************************************************/

import { useEffect, useState } from "react";
import "./App.css";

// useState ✅
// useEffect

// Side-Effect
// 1. Changing title of the page
// 2. Make API calls (react-query)
// 3. Timer and Intervals

// Cleanups

const App = () => {
  const [formDetails, setFormDetails] = useState({
    firstName: "",
    email: "",
    phoneNumber: "",
  });

  const { firstName, email, phoneNumber } = formDetails;

  const handleFormChange = (event) => {
    setFormDetails({ ...formDetails, [event.target.name]: event.target.value });
  };

  return (
    <main onChange={handleFormChange}>
      <input
        name="firstName"
        type="text"
        placeholder="First Name"
        value={firstName}
      />
      <input name="email" type="email" placeholder="Email" value={email} />
      <input
        name="phoneNumber"
        type="number"
        placeholder="Phone Number"
        value={phoneNumber}
      />
    </main>
  );
};

// Named Export
export { App };

/********************************************/

import { useEffect, useState } from "react";
import "./App.css";

// useState ✅
// useEffect

// Side-Effect
// 1. Changing title of the page
// 2. Make API calls (react-query)
// 3. Timer and Intervals
// 4. Event Listeners

// Cleanups

const App = () => {
  // const [x, setX] = useState(0);
  // const [y, setY] = useState(0);

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    function handleMouseMove(event) {
      setMousePosition({ x: event.clientX, y: clientY });
    }

    window.addEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <main>
      <h1>
        {mousePosition.x} / {mousePosition.y}
      </h1>
    </main>
  );
};

// Named Export
export { App };

/*************************************************************/

import { useEffect, useState } from "react";
import "./App.css";

// useState ✅
// useEffect

// Side-Effect
// 1. Changing title of the page
// 2. Make API calls (react-query)
// 3. Timer and Intervals
// 4. Event Listeners

// Cleanups

function MouseCoords() {
  // const [x, setX] = useState(0);
  // const [y, setY] = useState(0);

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    function handleMouseMove(event) {
      console.log("Inside handleMouseMove function");
      setMousePosition({ x: event.clientX, y: event.clientY });
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <h1>
      {mousePosition.x} / {mousePosition.y}
    </h1>
  );
}

const App = () => {
  const [showMouseCoords, setShowMouseCoords] = useState(true);
  return (
    <main>
      {showMouseCoords && <MouseCoords />}
      <button onClick={() => setShowMouseCoords(false)}>
        Stop showing Mouse Coords!
      </button>
    </main>
  );
};

// Named Export

/************************************************************/

import { useEffect, useState } from "react";
import "./App.css";

// useState ✅
// useEffect

// Side-Effect
// 1. Changing title of the page
// 2. Make API calls (react-query)
// 3. Timer and Intervals
// 4. Event Listeners

// Cleanups

function WindowSize() {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const { height, width } = windowDimensions;

  useEffect(() => {
    function handleResize() {
      const { innerHeight, innerWidth } = window;
      setWindowDimensions({ width: innerWidth, height: innerHeight });
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <h1>
      {width} / {height}
    </h1>
  );
}

const App = () => {
  return (
    <main>
      <WindowSize />
    </main>
  );
};

// Named Export
export { App };

/*******************************************************/

import { useEffect, useState } from "react";
import "./App.css";

// useState ✅
// useEffect

// Side-Effect
// 1. Changing title of the page
// 2. Make API calls (react-query)
// 3. Timer and Intervals
// 4. Event Listeners

// Cleanups

function WindowSize() {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const { height, width } = windowDimensions;

  useEffect(() => {
    function handleResize({ target: { innerHeight, innerWidth } }) {
      setWindowDimensions({ width: innerWidth, height: innerHeight });
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <h1>
      {width} / {height}
    </h1>
  );
}

const App = () => {
  return (
    <main>
      <WindowSize />
    </main>
  );
};

// Named Export
export { App };