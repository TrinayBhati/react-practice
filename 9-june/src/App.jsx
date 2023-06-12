import { useState, memo, useRef, useMemo, useCallback } from "react";
import "./App.css";
/**
const Child = () => {
  console.log("ran");
  return <h1>Child Comp</h1>;
};

const OptimizedCount = memo(Child);
// while passing object we're passing new reference each time so it'll rerender memo
function App() {
  const [count, setCount] = useState(0);
  const [anotherCount, setAnotherCount] = useState(0);
  // const userRef = useRef({ id: anotherCount });
  const user = useMemo(() => {
    return { id: anotherCount };
  }, [anotherCount]);
  return (
    <>
      <h2>{count}</h2>
      <button onClick={() => setCount((c) => c + 1)}>INCREMENT COUNT</button>
      <h2>{anotherCount}</h2>
      <button onClick={() => setAnotherCount((c) => c + 1)}>
        INCREMENT ANOTHER COUNT
      </button>
    //  <OptimizedCount age={userRef.current} /> 
      <OptimizedCount age={user} />
    </>
  );
}
**/
/**
 * function App() {
  const [formDetails, setFormDetails] = useState({
    name: "",
    age: "",
    mail: "",
  });
  const isValidName = (String) => {
    console.log("Valid ran");
    return !String.includes("&");
  };
  const handleInput = (e) => {
    setFormDetails((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const isError = useMemo(() => {
    return !isValidName(formDetails.name);
  }, [formDetails.name]);
  return (
    <>
      <div className="main" onChange={handleInput}>
        <input
          name="name"
          type="text"
          placeholder="Name"
          value={formDetails.name}
          className={isError && "error"}
        />
        <br />
        <input
          name="age"
          type="text"
          placeholder="Age"
          value={formDetails.age}
        />
        <br />
        <input
          name="mail"
          type="email"
          placeholder="E-mail"
          value={formDetails.mail}
        />
      </div>
    </>
  );
}
**/

const Child = ({ handleClick }) => {
  console.log("ran");
  return (
    <div>
      <h1>Child Comp</h1>
      <button onClick={handleClick}>Increment From Child</button>
    </div>
  );
};

const OptimizedCount = memo(Child);

function App() {
  const [count, setCount] = useState(0);

  // const handleClick = useMemo(() => {
  //   return () => {
  //     setCount((c) => c + 1);
  //   };
  // }, []);
  // this will work as well but for functions we gotta use useCallback

  const handleClick = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  return (
    <>
      <h2>{count}</h2>
      <button onClick={() => setCount((c) => c + 1)}>INCREMENT COUNT</button>
      <OptimizedCount handleClick={handleClick} />
    </>
  );
}
export default App;
