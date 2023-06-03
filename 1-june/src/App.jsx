import { useState, useEffect } from "react";
import "./App.css";

let count1;
let intervalId;

function App() {
  const [countDown, setCountDown] = useState(0);
  const [enabled, setEnabled] = useState(false);

  // useEffect(() => {
  //   count1 = setInterval(() => {
  //     setCountDown((prevState) => prevState - 1);
  //   }, 1000);
  // }, []);

  // if (countDown <= 0) {
  //   clearInterval(count1);
  // }

  // useEffect(() => {
  //   if (countDown !== 0) {
  //     setTimeout(() => {
  //       setCountDown((prevState) => prevState - 1);
  //     }, 1000);
  //   }
  // }, [countDown]);

  // const start = () => {
  //   intervalId = setInterval(() => {
  //     setCountDown((prevState) => prevState + 1);
  //   }, 1000);
  // };

  // const stop = () => {
  //   clearInterval(intervalId);
  // };

  // const reset = () => {
  //   stop();
  //   setCountDown(0);
  // };

  useEffect(() => {
    if (enabled) {
      intervalId = setInterval(() => {
        setCountDown((prevState) => prevState + 1);
      }, 1000);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [enabled]);

  const start = () => {
    setEnabled(true);
  };

  const stop = () => {
    setEnabled(false);
  };

  const reset = () => {
    stop();
    setCountDown(0);
  };

  return (
    <>
      <h1>{countDown}</h1>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}

export default App;
