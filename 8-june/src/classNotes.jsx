import { useState, memo } from "react";
import "./App.css";

// memo -> Higher Order Component

const Child = ({ count }) => {
  console.log("Child re-render");
  return <h1>Count in child : {count}</h1>;
};

// Cache : <h1>Child</h1>

const OptimizedChild = memo(Child);

export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <main>
      <h1>Count : {count} </h1>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>

      <OptimizedChild userName="Newton" />
    </main>
  );
};
