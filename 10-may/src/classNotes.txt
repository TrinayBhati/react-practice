import "./App.css";

// Arguments inside the event handlers
const App = () => {
  const handleChange = (event) => {
    // What we want is : input.value

    // We know that :
    // event.target -> input (Actual element that was interacted with)

    // So we just need :
    // event.target.value -> input.value

    console.log(event.target.value); // The current value of the input element
  };
  return (
    <main>
      <form>
        <label htmlFor="firstName">First Name :</label>
        <input onChange={handleChange} id="firstName" type="text" />
      </form>
    </main>
  );
};

// onClick -> callback

// Named Export
export { App };

/******************************************************/

import "./App.css";

// Arguments inside the event handlers
const App = () => {
  const handleChange = (event) => {
    // What we want is : input.value

    // We know that :
    // event.target -> input (Actual element that was interacted with)

    // So we just need :
    // event.target.value -> input.value

    console.log(event.target.value); // The current value of the input element
  };

  // Focus event -> When the input element gets into focus
  const handleFocus = () => {
    console.log("Element in focus");
  };

  // Blur event -> When the input element goes OUT OF focus
  // blur event occurs ONLY when the input element was previously in focus
  // Which means, blur event won't occur when the input element was initially not in focus
  const handleBlur = () => {
    console.log("Element is blurred!");
  };

  return (
    <main>
      <form>
        <label htmlFor="firstName">First Name :</label>
        <input
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          id="firstName"
          type="text"
        />
      </form>
    </main>
  );
};

// onClick -> callback

// Named Export
export { App };

/******************************************************/

import "./App.css";

const AlertButton = ({ children, message, onClick }) => {
  // onClick -> handleClick
  return <button onClick={onClick}>{children}</button>;
};

const App = () => {
  const handleClick = () => {
    console.log("Alert Button Clicked!");
  };

  return (
    <main>
      <AlertButton onClick={handleClick} message="Playing">
        Play Movie
      </AlertButton>

      <button onClick={handleClick}>Click me</button>
    </main>
  );
};

// Named Export
export { App };

/******************************************************/

import "./App.css";

const AlertButton = ({ children, message, onClick }) => {
  // onClick -> handleClick
  return <button onClick={onClick}>{children}</button>;
};

const App = () => {
  return (
    <main
      onClick={(event) => {
        switch (event.target.textContent) {
          case "Casuals":
            console.log("Casuals clicked!");
            return;
          // Navigate to Casuals page
          case "Formals":
            console.log("Formals clicked!");
            return;
          // Navigate to Casuals page
          case "T-Shirts":
            console.log("T-Shirts clicked!");
            return;
          // Navigate to Casuals page
          case "Jeans":
            console.log("Jeans clicked!");
            return;
          // Navigate to Casuals page
        }
      }}
    >
      <button>Casuals</button>
      <button>Formals</button>
      <button>T-Shirts</button>
      <button>Jeans</button>
    </main>
  );
};

// Named Export
export { App };

/****************************************/

import "./App.css";

const App = () => {
  return (
    <main>
      <select
        onChange={(event) => {
          console.log(event.target.value);
        }}
      >
        <option value="spidy1">Spider Man 1</option>
        <option value="spidy2">Spider Man 2</option>
        <option value="spidy3">Spider Man 3</option>
      </select>
    </main>
  );
};

// Named Export
export { App };

/**********************************/

import "./App.css";

const App = () => {
  const OPTIONS = [
    { label: "Spider Man 1", value: "spidy1" },
    { label: "Spider Man 2", value: "spidy2" },
    { label: "Spider Man 3", value: "spidy3" },
  ];

  return (
    <main>
      <select
        onChange={(event) => {
          const { selectedIndex } = event.target.options;
          console.log(OPTIONS[selectedIndex]);
        }}
      >
        {OPTIONS.map((spidyOption) => (
          <option value={spidyOption.value}>{spidyOption.label}</option>
        ))}
      </select>
    </main>
  );
};

// Named Export
export { App };