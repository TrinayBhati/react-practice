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

const Child = ({ count }) => {
  // count -> 2
  useEffect(() => {
    console.log("Child effect ran", count);

    return () => {
      console.log("Child cleanup ran", count);
    };
  });

  return <h1>Child : {count}</h1>;
};

const App = () => {
  const [count, setCount] = useState(0);

  // count -> 1

  return (
    <main>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <hr />
      {/* count -> 1 */}
      {count < 10 && <Child count={count} />}
    </main>
  );
};

// Named Export
export { App };

/*********************************************************************/

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

const Child = ({ count }) => {
  // count -> 0
  useEffect(() => {
    console.log("Child effect ran", count);

    return () => {
      console.log("Child cleanup ran", count);
    };
  }, [count]);

  return <h1>Child : {count}</h1>;
};

const App = () => {
  const [count, setCount] = useState(0);
  const [anotherCount, setAnotherCount] = useState(0);

  // count -> 0

  return (
    <main>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <h1>Another Count {anotherCount}</h1>
      <button onClick={() => setAnotherCount(anotherCount + 1)}>
        Increment Another Count
      </button>
      <hr />
      {/* count -> 1 */}
      <Child count={count} />
    </main>
  );
};

// Named Export
export { App };

/**************************************************************************/

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

function MouseTracker() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [isEnabled, setIsEnabled] = useState(true);

  useEffect(() => {
    // if (isEnabled) {
    function handleMouseMove(event) {
      // event.clientX, event.clientY
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
    // }
  }, [isEnabled]); // true ---> false

  function toggleMouseTracking() {
    setIsEnabled(!isEnabled);
  }

  return (
    <>
      <button onClick={toggleMouseTracking}>
        Mouse Tracking : {isEnabled ? "on" : "off"}
      </button>
      <h1>
        {mousePosition.x} / {mousePosition.y}
      </h1>
    </>
  );
}

const App = () => {
  return (
    <main>
      <MouseTracker />
    </main>
  );
};

// Named Export
export { App };