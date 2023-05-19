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

  // const SET_STATE_MAPPING = {
  //   name: setName,
  //   age: setAge,
  //   city: setCity,
  //   country: setCountry,
  //   designation: setDesignation,
  // };

  // const STATE_VALUE_MAPPING = {
  //   name: "Abhishek Keri",
  //   age: 23,
  //   city: "Hyderabad",
  //   country: "India",
  //   designation: "Driver",
  // };

  const STATE_MAPPING = {
    name: {
      set: setName,
      value: "Abhishek Keri",
    },
    age: {
      set: setAge,
      value: 23,
    },
    city: {
      set: setCity,
      value: "Hyderabad",
    },
    country: {
      set: setCountry,
      value: "India",
    },
    designation: {
      set: setDesignation,
      value: "Driver",
    },
  };

  // MAPPING.name // setName
  // MAPPING.name() //  setName()
  // MAPPING.name('Abhishek Keri') //  setName('Abhishek Keri')

  const updateUserDetails = (event) => {
    const field = event.target.name;

    const setState = STATE_MAPPING[field].set;
    const value = STATE_MAPPING[field].value;
    setState(value);
    // STATE_MAPPING[field].set(STATE_MAPPING[field].value);

    // SET_STATE_MAPPING[field]();
    // // SET_STATE_MAPPING[field]   -> setName
    // // SET_STATE_MAPPING[field]() -> setName()
    // // STATE_VALUE_MAPPING[field] -> Abhishek Keri

    // const newStateValue = STATE_VALUE_MAPPING[field];
    // SET_STATE_MAPPING[field](newStateValue);
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

/*************************************************/

import { useState } from "react";
import "./App.css";

/** Complex Form State */

/** Method 1 : Brute Force Approach */
const App = () => {
  const [firstName, setFirstName] = useState("");

  const [secondName, setSecondName] = useState("");
  const [email, setEmail] = useState("");

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleSecondNameChange = (event) => {
    setSecondName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className="container">
      <label>First Name </label>
      <input
        onChange={handleFirstNameChange}
        value={firstName}
        placeholder="John"
        type="text"
      />
      <label>Second Name </label>
      <input
        onChange={handleSecondNameChange}
        value={secondName}
        placeholder="Cena"
        type="text"
      />
      <label>Email </label>
      <input
        onChange={handleEmailChange}
        value={email}
        placeholder="youcantseeme@wwe.com"
        type="email"
      />
    </div>
  );
};

// Named Export
export { App };

/*************************************************/

import { useState } from "react";
import "./App.css";

/** Complex Form State */

/** Method 2 : Using if-else / switch / mapping / name attribute */
const App = () => {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [email, setEmail] = useState("");

  const MAPPING = {
    firstName: setFirstName,
    secondName: setSecondName,
    email: setEmail,
  };

  // const handleFormInputs = (field, value) => {
  // if (field === "firstName") {
  //   setFirstName(value);
  // } else if (field === "secondName") {
  //   setSecondName(value);
  // } else {
  //   setEmail(value);
  // }
  // if (field === "firstName") {
  //   setFirstName(value);
  //   return;
  // }
  // if (field === "secondName") {
  //   setSecondName(value);
  //   return;
  // }
  // setEmail(value);
  // Switch case method
  // switch (field) {
  //   case "firstName":
  //     setFirstName(value);
  //     return;
  //   case "secondName":
  //     setSecondName(value);
  //     return;
  //   case "email":
  //     setEmail(value);
  //     return;
  // }
  // Mapping method
  // const set = MAPPING[field];
  // set(value);
  // };

  const handleFormInputs = (event) => {
    const field = event.target.name;
    const value = event.target.value;

    const set = MAPPING[field]; // setFirstName | setSecondName | setEmail
    set(value);
  };

  return (
    <div className="container">
      <label>First Name </label>
      <input
        onChange={handleFormInputs}
        value={firstName}
        placeholder="John"
        type="text"
        name="firstName"
      />
      <label>Second Name </label>
      <input
        onChange={handleFormInputs}
        value={secondName}
        placeholder="Cena"
        type="text"
        name="secondName"
      />
      <label>Email </label>
      <input
        onChange={handleFormInputs}
        value={email}
        placeholder="youcantseeme@wwe.com"
        type="email"
        name="email"
      />
    </div>
  );
};

// Named Export
export { App };

/*************************************************/

// Render a list of increasing numbers
const App = () => {
  const [numbers, setNumbers] = useState([1]);

  // const add = () => {
  //   // Take the last number in the array
  //   const lastNumber = numbers[numbers.length - 1];

  //   // Add 1 to it
  //   const nextNumber = lastNumber + 1;

  //   // Add this new number to the array
  //   numbers.push(nextNumber);

  //   // call setNumbers

  //   // React does NOT re-render, because the reference is the same
  //   setNumbers(numbers);
  // };

  const add = () => {
    // Take the last number in the array
    const lastNumber = numbers[numbers.length - 1];

    // Add 1 to it
    const nextNumber = lastNumber + 1;

    // Create a brand new array (NEW REFERENCE)
    const newNumbers = [...numbers, nextNumber]; // [1, 2]

    // set the state
    setNumbers(newNumbers);
  };

  return (
    <div>
      <section>
        {numbers.map((number) => (
          <h3>{number}</h3>
        ))}
      </section>
      <button onClick={add}>Add</button>
    </div>
  );
};
