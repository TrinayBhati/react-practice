// Events

const App = () => {
  // Most common event on a button is the "click" event

  // We want to call this function when we click on the button

  // Name of the event handler can be whatever you want!!
  // Standard -> handle{type of event}
  // Example -> For click -> handleClick, For scroll -> handleScroll
  function handleClick() {
    console.log("Button clicked!");
  }

  // call a function on click on a button
  // All event handlers are camelCase by default

  // onClick -> ALWAYS requires a callback function
  // DO NOT CALL THE FUNCTION HERE!!!!
  return <button onClick={handleClick}>Click me</button>;
};

// Using Regular Javascript :
// You first grab the button element
// const button = document.querySelector('button');
// Register an event listener
// Important : We run the callback when the button is clicked
// button.addEventListener('click', () => {
// })

// Named Export
export { App };

/****************************************************************/

// Events
import "./App.css";

const App = () => {
  // Event Handler functions can either be normal functions or arrow functions
  // No difference between them both
  const handleAnchorClick = () => {
    console.log("Clicked by anchor element");
  };

  const handleDivClick = () => {
    console.log("Clicked by div element");
  };

  const handleSpanClick = () => {
    console.log("Clicked by span element");
  };

  // Most of the html elements have the onClick listener
  // This is possible in normal JS as well!
  return (
    <main>
      <a onClick={handleAnchorClick}>Google</a>
      <div className="container" onClick={handleDivClick}></div>
      <span onClick={handleSpanClick}>This is a span</span>
    </main>
  );
};

// Named Export
export { App };

/**************************************************/

// Events
import "./App.css";

const App = () => {
  // One event handler for multiple elements

  const handleClick = () => {
    console.log("Handle Click!");
  };

  return (
    <main>
      <a onClick={handleClick}>Google</a>
      <div className="container" onClick={handleClick}></div>
      <span onClick={handleClick}>This is a span</span>
    </main>
  );
};

// Named Export
export { App };


/**************************************************/

// Events
import "./App.css";

const App = () => {
  // Another way of adding functions for event handlers

  // Method 1 : Creating a function outside JSX
  function handleClick() {
    console.log("Clicked by an element!");
  }

  return (
    <main>
      <a onClick={handleClick}>Google</a>
      <div className="container" onClick={handleClick}></div>

      {/* Method 2 : Creating a function inside JSX  */}
      <span
        onClick={() => {
          console.log("Span is clicked!");
        }}
      >
        This is a span
      </span>
    </main>
  );
};

// Named Export
export { App };

/**************************************************/

import "./App.css";

// Event Object
const App = () => {
  // React will pass the event object because react is in control of
  // when to call the handleClick function

  // It's up to us, whether we want to use it or not
  const handleClick = (event) => {
    console.log(event.target); // most commonly used property on event is event.target

    // Call other functions when this handleClick is triggered
    dummyFunctionOne();
    dummyFunctionTwo();
    dummyFunctionThree();
  };

  const dummyFunctionOne = () => {
    console.log("dummyFunctionOne");
  };

  const dummyFunctionTwo = () => {
    console.log("dummyFunctionTwo");
  };

  const dummyFunctionThree = () => {
    console.log("dummyFunctionThree");
  };

  return (
    <main>
      <a id="anchor" onClick={handleClick}>
        Google
      </a>
      <div className="container" onClick={handleClick}></div>

      {/* Method 2 : Creating a function inside JSX  */}
      <span
        onClick={(event) => {
          console.log("Span event ->", event);

          // Call other functions when this handleClick is triggered
          dummyFunctionOne();
          dummyFunctionTwo();
          dummyFunctionThree();
        }}
      >
        This is a span
      </span>
    </main>
  );
};

// Named Export
export { App };

/**************************************************/

import "./App.css";

const App = () => {
  // Objective : When One, Two or Three buttons are clicked, print the
  // respective console logs :
  // "One has been clicked"
  // "Two has been clicked"
  // "Three has been clicked"

  // Method 1 : Using three separate functions
  // const handleOneButton = () => {
  //   console.log("One has been clicked");
  // };
  // const handleTwoButton = () => {
  //   console.log("Two has been clicked");
  // };
  // const handleThreeButton = () => {
  //   console.log("Three has been clicked");
  // };

  // Method 2 :
  // Create one function that handles all three buttons
  const handleClick = (event) => {
    console.log(`${event.target.id} has been clicked!`);
  };

  return (
    <main>
      <button id="One" onClick={handleClick}>
        One
      </button>
      <button id="Two" onClick={handleClick}>
        Two
      </button>
      <button id="Three" onClick={handleClick}>
        Three
      </button>
    </main>
  );
};

// Named Export
export { App };

/**************************************************/

import "./App.css";

// Arguments inside the event handlers
const App = () => {
  const handleClick = (parameter) => {
    console.log(parameter);
  };

  return (
    <main>
      {/* Using this way, we cannot pass any other argument, apart from the 
      event object that's passed by React itself */}
      {/* <button onClick={handleClick}>One</button>
      <button onClick={handleClick}>Two</button>
      <button onClick={handleClick}>Three</button> */}

      <button
        onClick={(event) => {
          // Event object is optional
          // Pass it along to handleClick ONLY if required
          handleClick("ONE");
        }}
      >
        One
      </button>
      <button
        onClick={(event) => {
          // Event object is optional
          // Pass it along to handleClick ONLY if required
          handleClick("TWO");
        }}
        // onClick={handleClick}
      >
        Two
      </button>
      <button
        onClick={(event) => {
          // Event object is optional
          // Pass it along to handleClick ONLY if required
          handleClick("THREE");
        }}
      >
        Three
      </button>
    </main>
  );
};

// Named Export
export { App };
/*****************************************/

import "./App.css";

// Arguments inside the event handlers
const App = () => {
  const users = [
    { id: 1, name: "Barry", occupation: "Assassin" },
    { id: 2, name: "Gene Cousineau", occupation: "Theatre Teacher" },
    { id: 3, name: "Monroe Fuches", occupation: "Assassin Manager" },
  ];

  const handleClick = ({ name, occupation }) => {
    console.log(`Name is ${name} with occupation ${occupation}`);
  };
  return (
    <main>
      {users.map((user) => {
        return (
          <div
            onClick={() => {
              handleClick({ name: user.name, occupation: user.occupation });
            }}
            className="card"
          >
            <p>Name : {user.name}</p>
            <p>Occupation : {user.occupation}</p>
          </div>
        );
      })}
    </main>
  );
};

// Named Export
export { App };
