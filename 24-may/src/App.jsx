import { useState } from "react";
import { useEffect } from "react";
import "./App.css";

const Child = () => {
  // child gets mounted first
  useEffect(() => {
    console.log("Child ran");
    // if we return a function then it'll run just before the component is unmounted
    return () => {
      console.log("unmounted");
    };
  }, []); //mounted again

  return <h1>Hello Child</h1>;
};

function App() {
  const [count, setCount] = useState(0);
  const [anotherCount, setAnotherCount] = useState(0);
  const [user, setUser] = useState("");

  useEffect(() => {
    console.log("run after first render");
    setUser("Trinay");
  }); // array of dependencies

  return (
    <>
      <h1>useEffect</h1>
      <h2>Count : {count}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <h2>Another Count : {anotherCount}</h2>
      <button
        onClick={() => {
          setAnotherCount(anotherCount + 10);
        }}
      >
        Another Increment
      </button>
      {user && <h2>Hello {user}</h2>}
      {count % 2 == 0 && <Child />}
    </>
  );
}

export default App;
