const heading = React.createElement(
  "h1",
  { id: "title" },
  "What we want inside the tag, can put other tags and variables like heading"
);

const heading2 = React.createElement(
  "h2", // tag name
  { id: "subTitle" }, // attributes
  "another tag inside variable heading2"
);

const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading, heading2]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
