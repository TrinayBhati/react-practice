const timerId1 = setInterval(() => {
  console.log("Timer ongoing");
}, 1000);

// After 5 seconds, stop the interval

setTimeout(() => {
  clearInterval(timerId1);
}, 5000);

/****************************************/

// CLEVER TRICKY TIMEOUT STUFF! - meme reference : https://i.kym-cdn.com/photos/images/original/001/554/157/0ae.png

const timeoutId1 = setTimeout(() => {
  console.log("Function called");
}, 3000);

const timeoutId2 = setTimeout(() => {
  clearTimeout(timeoutId1);
}, 2000);

setTimeout(() => {
  clearTimeout(timeoutId2);
}, 1000);

/****************************************/

// Basic countdown timer using setInterval

import { useEffect, useState } from "react";
import "./App.css";
import Loader from "./components/Loader/Loader";

/** Timers and Intervals */
let intervalId;

const App = () => {
  const [countdown, setCountdown] = useState(10);
  // countdown -> 10

  useEffect(() => {
    intervalId = setInterval(() => {
      /** State update logic */
      // This won't work because of closure
      // setCountdown(countdown - 1);
      setCountdown((prevState) => prevState - 1); // 6
    }, 1000);
  }, []);

  if (countdown === 0) {
    clearInterval(intervalId);
  }

  return (
    <main>
      <h3>Countdown : {countdown}</h3>
    </main>
  );
};

// Named Export
export { App };

/****************************************/

// Basic countdown timer using setTimeout

import { useEffect, useState } from "react";
import "./App.css";
import Loader from "./components/Loader/Loader";

/** Timers and Intervals */

const App = () => {
  const [countdown, setCountdown] = useState(10);
  // countDown -> 8

  useEffect(() => {
    if (countdown !== 0) {
      setTimeout(() => {
        setCountdown((prevState) => prevState - 1);
      }, 1000);
    }
  }, [countdown]); // 0 <-- 1 CHANGED

  return (
    <main>
      <h3>Countdown : {countdown}</h3>
    </main>
  );
};

// Named Export
export { App };

/****************************************/

// Build a stop watch using onClick events + setInterval

import { useEffect, useState } from "react";
import "./App.css";
import Loader from "./components/Loader/Loader";

/** Timers and Intervals */
let intervalId;

const App = () => {
  const [countdown, setCountdown] = useState(0);

  const start = () => {
    intervalId = setInterval(() => {
      setCountdown((prevState) => prevState + 1);
    }, 1000);
  };

  const stop = () => {
    clearInterval(intervalId);
  };

  const reset = () => {
    stop();
    setCountdown(0);
  };

  return (
    <main>
      <h3>{countdown}</h3>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </main>
  );
};

// Named Export
export { App };

/***************************************************/

import { useEffect, useState } from "react";
import "./App.css";
import Loader from "./components/Loader/Loader";

/** Timers and Intervals */
let intervalId;

const App = () => {
  const [countdown, setCountdown] = useState(0);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (enabled) {
      const intervalId = setInterval(() => {
        setCountdown((prevState) => prevState + 1);
      }, 1000);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [enabled]); // false --> true CHANGED!

  const start = () => {
    setEnabled(true);
  };

  const stop = () => {
    setEnabled(false);
  };

  return (
    <main>
      <h3>{countdown}</h3>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
    </main>
  );
};

// Named Export
export { App };
