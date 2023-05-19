import { useState } from "react";
import "./App.css";

/** Complex Form State */

/** Method 2 : Using if-else / switch / mapping / name attribute */
const App = () => {
  const [formDetails, setFormDetails] = useState({
    firstName: "",
    secondName: "",
    email: "",
  });

  const handleFormInputs = (event) => {
    const field = event.target.name; // secondName
    const value = event.target.value; // K

    // WILL NOT WORK!!
    // You cannot mutate/modify the state (object/array) directly
    // formDetails[field] = value;

    // To make it work, we need to pass in a new object (new reference)
    // to setFormDetails

    // Bad way of writing :
    // let newFormDetails = {};
    // if (field === "firstName") {
    //   newFormDetails = {
    //     ...formDetails,
    //     firstName: value, // A
    //   };
    // } else if (field === "secondName") {
    //   newFormDetails = {
    //     ...formDetails,
    //     secondName: value, // K
    //   };
    // } else {
    //   newFormDetails = {
    //     ...formDetails,
    //     email: value,
    //   };
    // }

    // Refactored code
    // const newFormDetails = {
    //   ...formDetails,
    //   [field]: value,
    // };

    // setFormDetails(newFormDetails);
    setFormDetails({
      ...formDetails,
      [field]: value,
    });
  };

  return (
    <div className="container">
      <label>First Name </label>
      <input
        onChange={handleFormInputs}
        value={formDetails.firstName}
        placeholder="John"
        type="text"
        name="firstName"
      />
      <label>Second Name </label>
      <input
        onChange={handleFormInputs}
        value={formDetails.secondName}
        placeholder="Cena"
        type="text"
        name="secondName"
      />
      <label>Email </label>
      <input
        onChange={handleFormInputs}
        value={formDetails.email}
        placeholder="youcantseeme@wwe.com"
        type="email"
        name="email"
      />
    </div>
  );
};

// Named Export
export { App };

/********************************************/

import { useState } from "react";
import "./App.css";

/** Complex Form State */

/** Method 2 : Using if-else / switch / mapping / name attribute */
const App = () => {
  const [formDetails, setFormDetails] = useState({
    firstName: "",
    secondName: "",
    email: "",
  });

  const handleFormInputs = (event) => {
    const field = event.target.name;
    const value = event.target.value;

    setFormDetails({
      ...formDetails,
      [field]: value,
    });
  };

  const validated =
    formDetails.firstName.length >= 2 &&
    formDetails.secondName.length >= 2 &&
    formDetails.email.length >= 2;

  return (
    <main>
      <div className="container">
        <label>First Name </label>
        <input
          onChange={handleFormInputs}
          value={formDetails.firstName}
          placeholder="John"
          type="text"
          name="firstName"
        />
        <label>Second Name </label>
        <input
          onChange={handleFormInputs}
          value={formDetails.secondName}
          placeholder="Cena"
          type="text"
          name="secondName"
        />
        <label>Email </label>
        <input
          onChange={handleFormInputs}
          value={formDetails.email}
          placeholder="youcantseeme@wwe.com"
          type="email"
          name="email"
        />
      </div>
      <button disabled={!validated}>Submit</button>

      {/* Whenever you add a prop without giving it any value, it will be
          considered as having a value of true.
          This works for components and html elements as well. 
      */}
      {/* <Child isAlive /> */}
    </main>
  );
};

const Child = ({ isAlive }) => {
  console.log(isAlive);
  return <h1>Child</h1>;
};

// Named Export
export { App };