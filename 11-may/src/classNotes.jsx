import "./App.css";
import { useState } from "react";

// render

// <App />
// React -> App()

// Whenever a state of a component changes, React will
// re-render the component

// Re-render -> App()

const App = () => {
  // const [status, setStatus] = useState("off");
  const [isStatusOn, setIsStatusOn] = useState(false);

  const handleStatusChange = () => {
    // setStatus("on");
    setIsStatusOn(!isStatusOn);
  };

  return (
    <main>
      <h1>Status : {isStatusOn ? "on" : "off"}</h1>
      <button onClick={handleStatusChange}>Toggle Status</button>
    </main>
  );
};

// Named Export
export { App };