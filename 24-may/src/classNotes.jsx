import { useEffect, useState } from "react";
import "./App.css";

// useState ✅
// useEffect

// Side-Effect
// 1. Changing title of the page
// 2. Make API calls
// 3. Timer and Intervals

// Cleanups

const Child = () => {
  useEffect(() => {
    // 1
    console.log("Child component mounted!");

    // Runs just before the component is unmounted
    return () => {
      // 2
      console.log("Child component unmounted!");
    };
  }, []);

  return <h1>Child</h1>;
};

const App = () => {
  const [count, setCount] = useState(0);
  const [anotherCount, setAnotherCount] = useState(0);

  const [user, setUser] = useState("");

  useEffect(() => {
    // 3
    console.log("App component mounted!");
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
      {count % 2 === 0 && <Child />}
    </main>
  );
};

// Named Export
export { App };