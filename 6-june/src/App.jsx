import { useState, useEffect, useContext, createContext } from "react";
import "./App.css";
import UserContextComp from "./UserContext";

/** const ComponentC = (props) => {
  const { userName } = props;
  return (
    <div>
      <h2> this is Comp C {userName}</h2>
    </div>
  );
};
const ComponentB = (props) => {
  return (
    <div>
      <h2> this is Comp B</h2>
      <ComponentC {...props} />
    </div>
  );
};
const ComponentA = (props) => {
  // props forwarding when using spread to simply pass
  return (
    <div>
      <h2> this is Comp A</h2>
      <ComponentB {...props} />
    </div>
  );
};

function App() {
  const userName = "{props passed to c}";
  return (
    <>
      <h2>useContext</h2>
      <ComponentA userName={userName} />
    </>
  );
} 
//============================================================
**/

/**const ComponentC = () => {
  return (
    <div>
      <h2> this is Comp C </h2>
    </div>
  );
};
const ComponentB = () => {
  const contextValue = useContext(UserNameContext);
  return (
    <div>
      <h2> this is Comp B {contextValue}</h2>
      <ComponentC />
    </div>
  );
};
const ComponentA = () => {
  return (
    <div>
      <h2> this is Comp A</h2>
      <ComponentB />
    </div>
  );
};

const UserNameContext = createContext();

// UserNameContext contains UserNameContext.provider

function App() {
  const userName = "{props passed to c}";
  return (
    <>
      <h2>useContext</h2>
      <UserNameContext.Provider value={userName}>
        <ComponentA />
      </UserNameContext.Provider>
    </>
  );
}
//============================================================
**/
/**const ComponentC = () => {
  // const contextFn = useContext(ButtonContext);
  const { setCount } = useContext(ButtonContext);
  return (
    <div>
      <h2> this is Comp C </h2>
      <button onClick={() => setCount((c) => c + 1)} style={{ color: "cyan" }}>
        Increment
      </button>
    </div>
  );
};
const ComponentB = () => {
  const { userName } = useContext(ButtonContext);
  return (
    <div>
      <h2> this is Comp B {userName}</h2>
      <ComponentC />
    </div>
  );
};
const ComponentA = () => {
  return (
    <div>
      <h2> this is Comp A</h2>
      <ComponentB />
    </div>
  );
};

const ButtonContext = createContext();

// UserNameContext contains UserNameContext.provider

function App() {
  const userName = "{props passed to c}";
  const [count, setCount] = useState(0);
  return (
    <>
      <h2>useContext</h2>
      <ButtonContext.Provider value={{ setCount: setCount, userName }}>
        <ComponentA />
      </ButtonContext.Provider>
      <h3>Count : {count}</h3>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </>
  );
  //============================================================
}
**/

const UserNoida = () => {
  return (
    <div>
      <h2>NOIDA</h2>
    </div>
  );
};

function App() {
  return (
    <>
      <UserContextComp>
        <UserNoida />
      </UserContextComp>
    </>
  );
}

export default App;
