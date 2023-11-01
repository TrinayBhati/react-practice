import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  {
    id: "title",
    key: "h1",
  },
  "Hello World from Parcel"
);

//React.createElement => Object => HTML(DOM)

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log("heading", heading);

const h1 = <h1>Hello</h1>; // this is a react element, an object // can make it a functional component by using function here
console.log("h1", h1);

const JsFunction = () => (
  // basic js function can be called as compoennt and simple function
  <div>
    <h2>Simple Function and component</h2>
  </div>
);

const Header = () => {
  // this is functional component, basic js function
  return (
    <>
      {heading}
      <JsFunction />
      {JsFunction()}
      {console.log("sup") /* simple js can be written in here */}
      <h3>Namaste Functional component</h3>
      <h1>JSX</h1>
    </>
  );
};

console.log("header", Header);

root.render(heading); // can render just a variable, in case of a functional component we wrap it in tag

root.render(<Header />); // if we use two root renders then last one overwrites
