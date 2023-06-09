import { useState, memo } from "react";
import "./App.css";

const Child = () => {
  console.log("ran");
  return <h2>Child</h2>;
};

const OptimizedChild = memo(Child);
// cache stores the previous jsx, n controls when to call the function
function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      {/* <OptimizedChild count={count} /> */}
      <OptimizedChild count={0} />
    </>
  );
}

export default App;
