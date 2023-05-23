import { useState } from "react";
import "./App.css";

const Child = () => {
  console.log("Child render");

  return <h1>Child</h1>;
};

// <Child /> ->

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count : {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <hr />
      <Child />
    </div>
  );
};

/**********************************************/

import { useState } from "react";
// import "./App.css";

const App = () => {
  const [firstName, setFirstName] = useState("");
  return (
    <div>
      <input
        onChange={(event) => {
          setFirstName(event.target.value);
        }}
        value={firstName}
      />
      <div>
        <br />
        <button
          onClick={() => {
            setFirstName("");
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

// Named Export
export { App };


/*****************************/

import { useState } from "react";
import "./App.css";

const App = () => {
  const [shapes, setShapes] = useState([]);
  const [currentShape, setCurrentShape] = useState("square");

  const addShape = () => {
    setShapes([...shapes, currentShape]);
  };

  return (
    <div className="container">
      <select
        onChange={(event) => {
          setCurrentShape(event.target.value);
        }}
        value={currentShape}
      >
        <option value="square">Square</option>
        <option value="circle">Circle</option>
      </select>{" "}
      <button onClick={addShape}>Add shape</button>
      <hr />
      {shapes.map((shape, index) => (
        <div className={`${shape}`}>{index}</div>
      ))}
    </div>
  );
};

// Named Export
export { App };

