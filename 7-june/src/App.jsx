import { useState, useEffect } from "react";
import "./App.css";

/**
 * function useCounter({ initialCount = 0, outintialValue = 3 }) {
  const [count, setCount] = useState(initialCount);
  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => c - outintialValue);
  return { count, increment, decrement };
}

function App() {
  const { count, increment, decrement } = useCounter({
    inintialValue: 8,
    outintialValue: 10,
  });
  return (
    <>
      <button onClick={increment}>Incrment</button>
      <h1>Counter : {count}</h1>
      <button onClick={decrement}>Decrement</button>
    </>
  );
}
**/
function UseFetch(url) {
  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    (async () => {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setdata(data);
      setLoading(false);
    })();
  }, [url]);
  return { data, loading };
}

function App() {
  const [count, setCount] = useState(1);
  const { data, loading } = UseFetch(
    `https://jsonplaceholder.typicode.com/todos/${count}`
  );
  if (loading) {
    return <h2>Loading..</h2>;
  }
  return (
    <>
      <h1>{data?.title} </h1>
      <h2>{count}</h2>
      <button onClick={() => setCount((c) => c + 1)}>Next Data</button>
    </>
  );
}

export default App;
