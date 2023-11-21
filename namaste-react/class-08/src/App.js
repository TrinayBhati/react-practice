import React from "react";
import ReactDom from "react-dom/client";
import "../index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

const AppLayout = () => (
  <>
    <Header />
    <Body />
    <Footer />
  </>
);

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
