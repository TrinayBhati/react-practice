import { useState, useEffect } from "react";
import "./App.css";

let count1;

function App() {
  const [countDown, setCountDown] = useState(10);

  useEffect(() => {
    count1 = setInterval(() => {
      setCountDown((prevState) => prevState - 1);
    }, 1000);

    setTimeout(() => {
      clearInterval(count1);
    }, 5000);
  }, []);

  // if (countDown == 0) {
  //   clearInterval(count1);
  // }

  return (
    <>
      <h1>Countdown : {countDown}</h1>
    </>
  );
}

export default App;
