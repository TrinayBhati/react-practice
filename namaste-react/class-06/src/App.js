import React from "react";
import ReactDom from "react-dom/client";
import "../index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

// config driven ui we get from api what to show where

const config = {
  // have all data according to the location or any other parameters, then we conditionally render ui
};

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
