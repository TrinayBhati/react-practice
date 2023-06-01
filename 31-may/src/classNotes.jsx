import { useEffect, useState } from "react";
import "./App.css";
import Loader from "./components/Loader/Loader";

// useState
// useEffect

// App()

const App = () => {
  // const [loading, setLoading] = useState(false);
  // const [users, setUsers] = useState([]);
  // const [error, setError] = useState("");

  const [state, setState] = useState({
    loading: false,
    users: [],
    error: "",
  });

  // useReducer

  useEffect(() => {
    (async () => {
      // setLoading(true); // loading start
      setState({ ...state, loading: true });
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        /** Error making the API call */
        if (!response.ok) {
          throw new Error(`API failed status : ${response.status}`);
          // { message: `API failed status : ${response.status}` }
        }

        const data = await response.json();
        // setUsers(data);
        // setState({ ...state, users: data });
        setState((prevState) => {
          return { ...prevState, users: data };
        });
      } catch (e) {
        // { message: `API failed status : ${response.status}` }
        // setError(e.message);
        // setState({ ...state, error: e.message });
        setState((prevState) => {
          return { ...prevState, error: e.message };
        });
      } finally {
        // setLoading(false);
        // setState({ ...state, loading: false });
        setState((prevState) => {
          return { ...prevState, loading: false };
        });
      }
    })();

    // State Updates Batching
    // setState({ ...state, users: data });
    // setState({ ...state, loading: false });
  }, []);

  console.log(state);

  if (state.loading) {
    return <Loader />;
  }

  if (state.error) {
    return (
      <div>
        <img
          src="https://cdn-icons-png.flaticon.com/512/5804/5804966.png"
          height={150}
        />
        <h2 className="error">{error}</h2>
      </div>
    );
  }

  if (state.users.length === 0) {
    return <h2>No users in the system!</h2>;
  }

  return (
    <main>
      {state.users.map((user) => (
        <h3>{user.name}</h3>
      ))}
    </main>
  );
};

// Named Export
export { App };

/*********************************************/

import { useEffect, useState } from "react";
import "./App.css";
import Loader from "./components/Loader/Loader";

// useState
// useEffect

// App()

const App = () => {
  const [value, setValue] = useState(true);
  const [count, setCount] = useState(0);

  const toggle = () => {
    setValue((prevState) => !prevState);
  };

  const increment = () => {
    setCount((prevState) => prevState + 1);
    setCount(count + 1);
  };

  return (
    <main>
      <h3>{value ? "on" : "off"}</h3>
      <button onClick={toggle}>Toggle</button>
      <hr />
      <h3>Count : {count}</h3>
      <button onClick={increment}>Increment</button>
    </main>
  );
};

// Named Export
export { App };

/**************************************************/

import { useEffect, useState } from "react";
import "./App.css";
import Loader from "./components/Loader/Loader";

// useState
// useEffect

// App()

const App = () => {
  const [todo, setTodo] = useState({});

  /** Whenever you're writing any API logic, make sure you add :
   * 1. Error Handling (try / catch)
   * 2. Loading indicator
   */
  const getTodo = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );

    const data = await response.json();
    setTodo(data);
  };

  return (
    <main>
      <h3>{todo.title && todo.title}</h3>
      <button onClick={getTodo}>Fetch and show Todo</button>
    </main>
  );
};

// Named Export
export { App };

/***********************************************/

import { useEffect, useState } from "react";
import "./App.css";
import Loader from "./components/Loader/Loader";

// useState
// useEffect

// App()

const Todo = ({ id }) => {
  // id -> 2
  const [todo, setTodo] = useState({});
  // todo -> {}

  useEffect(() => {
    (async () => {
      /** Not recommended. But wanted to show it's possible to write fetch
       * in one line. 😎
       */
      // const data = await (
      //   await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      // ).json();
      // console.log(data);

      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`
      );

      const data = await response.json();
      setTodo(data);
    })();
  }, [id]); // 1 --> 2 CHANGED!

  return <h3>{todo.title}</h3>;
};

const App = () => {
  const [id, setId] = useState(1);
  // id -> 1

  const showNextTodo = () => {
    setId((prevId) => prevId + 1);
  };

  return (
    <main>
      <Todo id={id} />
      <button onClick={showNextTodo}>Show next todo</button>
    </main>
  );
};



// Named Export
export { App };


/*********************************************/

import { useEffect, useState } from "react";
import "./App.css";
import Loader from "./components/Loader/Loader";

const Child = ({ number, changeNumber }) => {
  return (
    <>
      <h3>Child : {number}</h3>
      <button onClick={changeNumber}>Increment</button>
    </>
  );
};

const App = () => {
  const [count, setCount] = useState(0);

  const updateNumber = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <main>
      <Child number={count} changeNumber={updateNumber} />
    </main>
  );
};

// Named Export
export { App };

/*********************************************/

import { useEffect, useState } from "react";
import "./App.css";
import Loader from "./components/Loader/Loader";

const ChildOne = ({ count, updateCount }) => {
  return (
    <div>
      <h3>Count : {count}</h3>
      <button onClick={updateCount}>Increment</button>
    </div>
  );
};

const ChildTwo = ({ count }) => {
  return (
    <div>
      <h3>Count is {count}</h3>
      <h1>🎉</h1>
    </div>
  );
};

const App = () => {
  const [count, setCount] = useState(0);

  const updateCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <main>
      <section>
        <ChildOne count={count} updateCount={updateCount} />
        <ChildTwo count={count} />
      </section>
    </main>
  );
};

// Named Export
export { App };