import { useEffect, useState } from "react";
import "./App.css";
import Loader from "./components/Loader/Loader";

// useState ✅
// useEffect

// Side-Effect
// 1. Changing title of the page
// 2. Make API calls
// 3. Timer and Intervals
// 4. Event Listeners

// Cleanups

const App = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  // useReducer

  useEffect(() => {
    (async () => {
      setLoading(true); // loading start
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
        setUsers(data);
      } catch (e) {
        // { message: `API failed status : ${response.status}` }
        setError(e.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
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

  if (users.length === 0) {
    return <h2>No users in the system!</h2>;
  }

  return (
    <main>
      {users.map((user) => (
        <h3>{user.name}</h3>
      ))}
    </main>
  );
};

// Named Export
export { App };

/****************************************************/

// This code won't work correctly

import { useEffect, useState } from "react";
import "./App.css";
import Loader from "./components/Loader/Loader";

// useState ✅
// useEffect

// Side-Effect
// 1. Changing title of the page
// 2. Make API calls
// 3. Timer and Intervals
// 4. Event Listeners

// Cleanups

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
        setState({ ...state, users: data });
      } catch (e) {
        // { message: `API failed status : ${response.status}` }
        // setError(e.message);
        setState({ ...state, error: e.message });
      } finally {
        // setLoading(false);
        setState({ ...state, loading: false });
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

/***********************************************************/

import { useEffect, useState } from "react";
import "./App.css";
import Loader from "./components/Loader/Loader";

// useState

// App()

const App = () => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const handleUpdateDetails = () => {
    setName("John Cena");
    setCity("Brooklyn");
    setCountry("USA");
  };

  console.log("Re-render");

  return (
    <main>
      <h3>Name : {name}</h3>
      <h3>City : {city}</h3>
      <h3>Country : {country}</h3>
      <hr />
      <section>
        <button onClick={handleUpdateDetails}>Update Details</button>
      </section>
    </main>
  );
};

// Named Export
export { App };

/**********************************************************************/

// Understanding how the setLoading state creates two renders here

import { useEffect, useState } from "react";
import "./App.css";
import Loader from "./components/Loader/Loader";

// useState

// App()

const App = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      // true
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUsers(data);
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <main>
      {users.map((user) => (
        <h3>{user.name}</h3>
      ))}
    </main>
  );
};

// Named Export
export { App };