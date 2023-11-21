import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";
import logo from "./header-logo.png";

const Title = () => (
  <a href="/">
    <img className="header-logo" alt="logo" src={logo} />
  </a>
);

const burgerKing = {
  name: "Burger King",
  image:
    "https://pricemenu.in/wp-content/uploads/2023/02/Burger-King-Menu-1.jpg",
  tags: ["Burgers", "Fries", "Coke"],
  rating: "4.2 stars",
};

// config driven ui we get from api what to show where

const config = {
  // have all data according to the location or any other parameters, then we conditionally render ui
};

const data = [];

const Card = () => {
  return (
    <div className="card">
      <img src={burgerKing.image} />
      <h2>{burgerKing.name}</h2>
      <h3>{burgerKing.tags.join(", ")}</h3>
      <h4>{burgerKing.rating}</h4>
    </div>
  );
};

const Header = () => (
  <>
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
    {console.log("test")}
  </>
);

const Body = () => {
  const styleObj = {
    backgroundColor: "red",
  };
  return (
    <>
      <div className="main-body">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      <h1 style={styleObj}>Body</h1>
    </>
  );
};

const Footer = () => (
  <>
    <h1 style={{ backgroundColor: "gray" }}>Footer</h1>
  </>
);

const AppLayout = () => (
  <>
    <Header />
    <Body />
    <Footer />
  </>
);

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<AppLayout />);

// use map and make the data dynamic from swiggy api
