import "./App.css";

/**
 *
 * React Uncontrolled Components :
 */

const App = () => {
  return (
    /** Currently React is NOT controlling this component. Because, there's no
     * React State managing this input element.
     * Example : Whatever is being typed inside the input element, can't be displayed
     * in the p tag.
     *
     * Right now, only the input element knows what the value of the input is.
     */
    <form>
      <label>University : </label>
      <input type="text" />
    </form>
  );
};

// Named Export
export { App };

/*******************************/

import { useState } from "react";
import "./App.css";

/**
 *
 * React Controlled Components :
 */

const App = () => {
  /** Step 1 : Create a state variable which contains the value being typed inside
   * the input element
   */

  const [university, setUniversity] = useState("");

  const handleInputChange = (event) => {
    // event.target.value
    /** Step 4 : Update the state with the new event.target.value */
    setUniversity(event.target.value);
  };

  return (
    <form>
      <label>University : </label>
      {/* Step 2 : Add the state to the value prop */}

      {/* Step 3 : Add the onChange */}
      <input onChange={handleInputChange} value={university} type="text" />
      <p>Output : {university.toUpperCase()} </p>
    </form>
  );
};

// Named Export
export { App };

/*******************************/

import { useState } from "react";
import "./App.css";

/**
 *
 * Stateful components - Components that contain state
 * Stateless/Dumb components - Components that don't have any state
 */

/**
 *
 * It's very common to have multiple states within one component
 * Below is an example
 */
const App = () => {
  const [title, setTitle] = useState("Spider-man");

  const [count, setCount] = useState(0);

  // const changeTitle = () => {
  //   setTitle("Thor");
  // };

  return (
    <div>
      <h1>{title}</h1>
      <button
        onClick={() => {
          setTitle("Thor");
          setCount(count + 1);
        }}
      >
        Change title & count
      </button>
      <h1>Count : {count}</h1>
      {/* <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button> */}
    </div>
  );
};

// Named Export
export { App };

/*******************************/

import { useState } from "react";
import "./App.css";

// name, age, city, country

/** Solution 1 - Multiple State piece (multiple useStates) */
const App = () => {
  const [name, setName] = useState("Aditya Keri");
  const [age, setAge] = useState(1000);
  const [city, setCity] = useState("New York");
  const [country, setCountry] = useState("USA");

  return (
    <div>
      <p>Name : {name}</p>
      <p>Age : {age}</p>
      <p>City : {city}</p>
      <p>Country : {country}</p>
      <hr />
      {/* Aditya Keri -> Abhishek Keri */}
      <button
        onClick={() => {
          setName("Abhishek Keri"); // RE-RENDER!!
        }}
      >
        Change Name
      </button>

      {/* 1000 -> 23 */}
      <button
        onClick={() => {
          setAge(23);
        }}
      >
        Change Age
      </button>

      {/* New York - Hyderabad */}
      <button
        onClick={() => {
          setCity("Hyderabad");
        }}
      >
        Change City
      </button>

      {/* USA -> India */}
      <button
        onClick={() => {
          setCountry("India");
        }}
      >
        Change Country
      </button>
    </div>
  );
};

// Named Export
export { App };

/******************************/

import { useState } from "react";
import "./App.css";

// name, age, city, country

/** Solution 2 - Use one function for multiple state calls */
const App = () => {
  const [name, setName] = useState("Aditya Keri");
  const [age, setAge] = useState(1000);
  const [city, setCity] = useState("New York");
  const [country, setCountry] = useState("USA");

  const updateUserDetails = (field) => {
    switch (field) {
      case "name":
        setName("Abhishek Keri");
        return;
      case "age":
        setAge(23);
        return;
      case "city":
        setCity("Hyderabad");
        return;
      case "country":
        setCountry("India");
        return;
      default:
        return;
    }
  };

  return (
    <div>
      <p>Name : {name}</p>
      <p>Age : {age}</p>
      <p>City : {city}</p>
      <p>Country : {country}</p>
      <hr />
      {/* Aditya Keri -> Abhishek Keri */}
      <button
        onClick={() => {
          updateUserDetails("name");
        }}
      >
        Change Name
      </button>

      {/* 1000 -> 23 */}
      <button
        onClick={() => {
          updateUserDetails("age");
        }}
      >
        Change Age
      </button>

      {/* New York - Hyderabad */}
      <button
        onClick={() => {
          updateUserDetails("city");
        }}
      >
        Change City
      </button>

      {/* USA -> India */}
      <button
        onClick={() => {
          updateUserDetails("country");
        }}
      >
        Change Country
      </button>
    </div>
  );
};

// Named Export
export { App };

/***********************************/

import { useState } from "react";
import "./App.css";

// name, age, city, country

/** Solution 3 - Use a mapping object instead of switch case */
const App = () => {
  const [name, setName] = useState("Aditya Keri");
  const [age, setAge] = useState(1000);
  const [city, setCity] = useState("New York");
  const [country, setCountry] = useState("USA");

  const MAPPING = {
    name() {
      setName("Abhishek Keri");
    },
    age() {
      setAge(23);
    },
    city() {
      setCity("Hyderabad");
    },
    country() {
      setCountry("India");
    },
  };

  const updateUserDetails = (field) => {
    // field -> name
    // MAPPING[field] -> name function
    MAPPING[field]();
  };

  return (
    <div>
      <p>Name : {name}</p>
      <p>Age : {age}</p>
      <p>City : {city}</p>
      <p>Country : {country}</p>
      <hr />
      {/* Aditya Keri -> Abhishek Keri */}
      <button
        onClick={() => {
          updateUserDetails("name");
        }}
      >
        Change Name
      </button>

      {/* 1000 -> 23 */}
      <button
        onClick={() => {
          updateUserDetails("age");
        }}
      >
        Change Age
      </button>

      {/* New York - Hyderabad */}
      <button
        onClick={() => {
          updateUserDetails("city");
        }}
      >
        Change City
      </button>

      {/* USA -> India */}
      <button
        onClick={() => {
          updateUserDetails("country");
        }}
      >
        Change Country
      </button>
    </div>
  );
};

// Named Export
export { App };

/*****************************************/

import { useState } from "react";
import "./App.css";

// name, age, city, country

/** Solution 4 - Remove inline functions. Add ids. */
const App = () => {
  const [name, setName] = useState("Aditya Keri");
  const [age, setAge] = useState(1000);
  const [city, setCity] = useState("New York");
  const [country, setCountry] = useState("USA");

  const MAPPING = {
    name() {
      setName("Abhishek Keri");
    },
    age() {
      setAge(23);
    },
    city() {
      setCity("Hyderabad");
    },
    country() {
      setCountry("India");
    },
  };

  const updateUserDetails = (event) => {
    const field = event.target.name;

    // field -> name
    // MAPPING[field] -> name function
    MAPPING[field]();
  };

  return (
    <div>
      <p>Name : {name}</p>
      <p>Age : {age}</p>
      <p>City : {city}</p>
      <p>Country : {country}</p>
      <hr />
      {/* Aditya Keri -> Abhishek Keri */}
      <button name="name" onClick={updateUserDetails}>
        Change Name
      </button>

      {/* 1000 -> 23 */}
      <button name="age" onClick={updateUserDetails}>
        Change Age
      </button>

      {/* New York - Hyderabad */}
      <button name="city" onClick={updateUserDetails}>
        Change City
      </button>

      {/* USA -> India */}
      <button name="country" onClick={updateUserDetails}>
        Change Country
      </button>
    </div>
  );
};

// Named Export
export { App };


/*****************************************/

import { useState } from "react";
import "./App.css";

// name, age, city, country

/** Solution 4 - Remove inline functions. Add ids. */
const App = () => {
  const [name, setName] = useState("Aditya Keri");
  const [age, setAge] = useState(1000);
  const [city, setCity] = useState("New York");
  const [country, setCountry] = useState("USA");
  const [designation, setDesignation] = useState("Software Developer");

  const SET_STATE_MAPPING = {
    name: setName,
    age: setAge,
    city: setCity,
    country: setCountry,
    designation: setDesignation,
  };

  const STATE_VALUE_MAPPING = {
    name: "Abhishek Keri",
    age: 23,
    city: "Hyderabad",
    country: "India",
    designation: "Driver",
  };

  // MAPPING.name // setName
  // MAPPING.name() //  setName()
  // MAPPING.name('Abhishek Keri') //  setName('Abhishek Keri')

  const updateUserDetails = (event) => {
    const field = event.target.name;

    SET_STATE_MAPPING[field]();
    // SET_STATE_MAPPING[field]   -> setName
    // SET_STATE_MAPPING[field]() -> setName()
    // STATE_VALUE_MAPPING[field] -> Abhishek Keri

    const newStateValue = STATE_VALUE_MAPPING[field];
    SET_STATE_MAPPING[field](newStateValue);
  };

  return (
    <div>
      <p>Name : {name}</p>
      <p>Age : {age}</p>
      <p>City : {city}</p>
      <p>Country : {country}</p>
      <p>Designation : {designation}</p>
      <hr />
      {/* Aditya Keri -> Abhishek Keri */}
      <button name="name" onClick={updateUserDetails}>
        Change Name
      </button>

      {/* 1000 -> 23 */}
      <button name="age" onClick={updateUserDetails}>
        Change Age
      </button>

      {/* New York - Hyderabad */}
      <button name="city" onClick={updateUserDetails}>
        Change City
      </button>

      {/* USA -> India */}
      <button name="country" onClick={updateUserDetails}>
        Change Country
      </button>

      {/* Software Developer -> Driver */}
      <button name="designation" onClick={updateUserDetails}>
        Change Designation
      </button>
    </div>
  );
};

// Named Export
export { App };