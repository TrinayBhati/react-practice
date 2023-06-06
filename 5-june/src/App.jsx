import { useEffect, useRef, useState } from "react";

import "./App.css";

function App() {
  const inputRef = useRef();

  // useEffect(() => {
  //   inputRef.current.focus();
  // }, []);

  // const handleClick = () => {
  //   inputRef.current.focus();
  // };

  const [count, setCount] = useState(0);

  let copyOfCount = useRef(0);

  const handleClick = () => {
    setCount((prevState) => prevState + 1);
  };
  const handleClickRef = () => {
    copyOfCount.current += 1;
  };

  return (
    <>
      {/* <input ref={inputRef} type="text" placeholder="enter name"></input>
      <button onClick={handleClick}>Focus</button> */}
      <h1>{count}</h1>
      <button onClick={handleClick}>Increment State</button>
      <h1>{copyOfCount.current}</h1>
      <button onClick={handleClickRef}>Increment Ref</button>
    </>
  );
}

export default App;
