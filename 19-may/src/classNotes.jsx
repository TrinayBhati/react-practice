import { useState } from "react";
import "./App.css";

const App = () => {
  const [formDetails, setFormDetails] = useState({
    firstName: "",
    secondName: "",
    email: "",
  });

  const [formErrors, setFormErrors] = useState({
    firstNameError: "",
    secondNameError: "",
    emailError: "",
  });

  const handleFormInputs = (event) => {
    const field = event.target.name;
    const value = event.target.value;

    setFormDetails({
      ...formDetails,
      [field]: value,
    });
  };

  const submit = () => {
    const { firstName, secondName, email } = formDetails;

    const firstNameError =
      firstName.length < 3 && "First name must contain at least 3 characters";

    const secondNameError =
      secondName.length < 3 && "Second name must contain at least 3 characters";

    const emailError =
      email.length < 3 && "Email must contain at least 3 characters";

    if (firstNameError || secondNameError || emailError) {
      setFormErrors({
        firstNameError,
        secondNameError,
        emailError,
      });
    }

    // if (firstName.length < 3) {
    //   setFormErrors({
    //     ...formErrors,
    //     firstNameError: "First name must contain at least 3 characters",
    //   });
    // }

    // if (secondName.length < 3) {
    //   setFormErrors({
    //     ...formErrors,
    //     secondNameError: "Second name must contain at least 3 characters",
    //   });
    // }

    // if (email.length < 3) {
    //   setFormErrors({
    //     ...formErrors,
    //     emailError: "Email must contain at least 3 characters",
    //   });
    // }
  };

  return (
    <main>
      <div className="container">
        <label>First Name </label>
        <div>
          <input
            placeholder="John"
            onChange={handleFormInputs}
            value={formDetails.firstName}
            type="text"
            name="firstName"
          />
          {formErrors.firstNameError && <p>{formErrors.firstNameError}</p>}
        </div>
        <label>Second Name </label>
        <div>
          <input
            placeholder="Cena"
            onChange={handleFormInputs}
            value={formDetails.secondName}
            type="text"
            name="secondName"
          />
          {formErrors.secondNameError && <p>{formErrors.secondNameError}</p>}
        </div>
        <label>Email </label>
        <div>
          <input
            placeholder="youcantseeme@wwe.com"
            onChange={handleFormInputs}
            value={formDetails.email}
            type="email"
            name="email"
          />
          {formErrors.emailError && <p>{formErrors.emailError}</p>}
        </div>
      </div>
      <button onClick={submit}>Submit</button>
    </main>
  );
};

// Named Export
export { App };

/**************************************************************/

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

  const [formErrors, setFormErrors] = useState({
    firstNameError: "",
    secondNameError: "",
    emailError: "",
  });

  const handleFormInputs = (event) => {
    const field = event.target.name;
    const value = event.target.value;

    const firstNameError =
      field === "firstName" &&
      value.length < 3 &&
      "First name must contain at least 3 characters";

    const secondNameError =
      field === "secondName" &&
      value.length < 3 &&
      "Second name must contain at least 3 characters";

    const emailError =
      field === "email" &&
      value.length < 3 &&
      "Email must contain at least 3 characters";

    if (firstNameError || secondNameError || emailError) {
      setFormErrors({
        firstNameError,
        secondNameError,
        emailError,
      });
    }

    setFormDetails({
      ...formDetails,
      [field]: value,
    });
  };

  return (
    <main>
      <div className="container">
        <label>First Name </label>
        <div>
          <input
            placeholder="John"
            onChange={handleFormInputs}
            value={formDetails.firstName}
            type="text"
            name="firstName"
          />
          {formErrors.firstNameError && <p>{formErrors.firstNameError}</p>}
        </div>
        <label>Second Name </label>
        <div>
          <input
            placeholder="Cena"
            onChange={handleFormInputs}
            value={formDetails.secondName}
            type="text"
            name="secondName"
          />
          {formErrors.secondNameError && <p>{formErrors.secondNameError}</p>}
        </div>
        <label>Email </label>
        <div>
          <input
            placeholder="youcantseeme@wwe.com"
            onChange={handleFormInputs}
            value={formDetails.email}
            type="email"
            name="email"
          />
          {formErrors.emailError && <p>{formErrors.emailError}</p>}
        </div>
      </div>
      <button>Submit</button>
    </main>
  );
};

// Named Export
export { App };

/***********************************************/

import { useState } from "react";
import "./App.css";

/** Asynchronous State Updates */

const App = () => {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    const nextCount = count + 1; // 1

    setCount(nextCount); // state setters are NOT immediate

    //setCount(count + 1); !== count = count + 1; -> NOT WHAT HAPPENS!
    console.log(nextCount); // 1
  };

  return (
    <main>
      <p>You've clicked {count} times.</p>
      <button onClick={handleCount}>Click me!</button>
    </main>
  );
};

// Named Export
export { App };

/***********************************************/

import { useState } from "react";
import "./App.css";

/** Asynchronous State Updates */

const App = () => {
  const [strength, setStrength] = useState(6);
  const [dexterity, setDexterity] = useState(9);
  const [intelligence, setIntelligence] = useState(15);

  function triggerLevelUp() {
    const nextStrength = strength + 1;
    const nextDexterity = dexterity + 2;
    const nextIntelligence = intelligence + 3;

    setStrength(nextStrength); // 7
    setDexterity(nextDexterity); // 11
    setIntelligence(nextIntelligence); // 18

    window.alert(`
      Congratulations! Your hero now has the following stats:
      Str: ${nextStrength}
      Dex: ${nextDexterity}
      Int: ${nextIntelligence}
    `);
  }

  return (
    <div className="container">
      <img
        alt="8-bit wizard character"
        src="https://sandpack-bundler.vercel.app/img/mage-sprite.gif"
      />
      <div>
        <button onClick={triggerLevelUp}>Level Up</button>
      </div>
    </div>
  );
};

// Named Export
export { App };

/***********************************************/

import { useState } from "react";
import "./App.css";

/** Lazy State Initialization */

// const getInitialState = () => {
//   return { id: 1, city: "Hyderabad" };
// };

const App = () => {
  // Problem 1 : Re-creating this function
  const getInitialState = () => {
    return { id: 1, city: "Hyderabad" };
  };

  // const initialState = getInitialState();
  // Problem 2 : Calling this function even after the first render
  const [user, setUser] = useState(getInitialState());

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
      <h1>{user.city}</h1>
    </div>
  );
};

// Named Export
export { App };