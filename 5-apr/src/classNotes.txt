import "./App.css";

// Prop drilling (issue):
// You send props from a top level parent all the way down to a child
// Even though the intermediate components don't need it

// You "drill" down the props from the top to the bottom

const ComponentB = () => {
  return <h1>Hello {city}</h1>;
};

// props -> { children:  <ComponentB city="Hyderabad" /> }
const ComponentA = ({ children }) => {
  return children;
  // return <ComponentB city="Hyderabad" />
};

export const App = () => {
  return (
    <main className="container">
      <ComponentA>
        <ComponentB city="Hyderabad" />
      </ComponentA>
    </main>
  );
};

/******************************************/

import "./App.css";

// If children is not sent to the component, children is undefined
const Heading = ({ title, children }) => {
  return (
    <div>
      <h1>{title}</h1>
      {children}
    </div>
  );
};

export const App = () => {
  return (
    <main className="container">
      {/* This will be replaced by whatever the component returns */}
      {/* <Heading title="Hello Newton" /> */}

      {/* This ALSO will be replaced by whatever the component returns */}
      <Heading title="Hello World">
        {/* Whatever you add in BETWEEN the opening and closing tags is the children prop */}
        <h2>Smaller heading</h2>
      </Heading>
    </main>
  );
};

/***************************************/
import "./App.css";

// When to use "children" prop
// Use it when you want to create a generic BOX around some JSX

// const Button = ({ children }) => {
//   return <button className="btn">{children}</button>;
// };

export const App = () => {
  // const scores = [1, 2, 3];
  // Directly use scores.map if there's no JSX involved
  // return scores.map((score) => <h1>{score}</h1>);
  /****************/
  // const element = <h1>Hello Newton</h1>;
  // If you want to use it within JSX, use curly braces (JSX expression)
  // return <div>{element}</div>;
  // Directly use element if there's no JSX involved
  // return element;
  /****************/
  // getSomeJsx() -> <h4>This is some nice JSX</h4>
  // const getSomeJsx = () => {
  //   return <h4>This is some nice JSX</h4>;
  // };
  // getSomeJsx() will be replaced by whatever is returned by the function
  // return <div>{getSomeJsx()}</div>;
  // return getSomeJsx();
  /****************/

  const isSafe = true;
  // return <section>{isSafe && <h1>I'm feeling secure!</h1>}</section>;

  return isSafe && <h1>I'm feeling secure!</h1>;
};

/********************************/

import "./App.css";

// When to use "children" prop
// Use it when you want to create a generic BOX around some JSX

const Input = ({ className = "", ...restProps }) => {
  // Bad way of accepting multiple props
  // return (
  //   <input
  //     className="input"
  //     type={type}
  //     id={id}
  //     name={name}
  //     minlength={minlength}
  //     maxlength={maxlength}
  //     size={size}
  //     placeholder={placeholder}
  //   />
  // );
  // Good of way accepting props
  return <input {...restProps} className={`input ${className}`} />;
};

// const Simple = (props) => {
//   console.log(props);
//   return <h1>I am a simple component</h1>;
// };

export const App = () => {
  // Passing an object as props to a HTML element
  // const inputProps = {
  //   type: "text",
  //   id: "name",
  //   name: "name",
  //   value: "Abhishek Kumar",
  // };
  // return <input {...inputProps} />;
  // return <input type="text" id="name" name="name" />;
  // const simpleProps = {
  //   movie: "Spider-verse",
  //   actor: "Miles Morales",
  //   rating: 5,
  // };
  // return <Simple movie="Spider-verse" actor="Miles Morales" rating={5} />;
  // return <Simple {...simpleProps} />;

  return <Input type="text" className="border-color" />;
};

// <input type="text" id="name" name="name" minlength="4" maxlength="8" size="10" />

// <Input type="text" id="name" name="name" minlength="4" maxlength="8" size="10" />

