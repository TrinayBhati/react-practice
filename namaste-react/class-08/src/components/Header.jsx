import { useState } from "react";
import logo from "../../header-logo.png";

const Title = () => (
  <a href="/">
    <img className="header-logo" alt="logo" src={logo} />
  </a>
);

const title = "FoodLads";

const Header = () => {
  const [isLoggedin, setLoggedIn] = useState(false);

  return (
    <>
      <div className="header">
        <Title />
        <h1>{title}</h1>
        <div className="nav-items">
          <ul>
            {isLoggedin ? (
              <button
                onClick={() => {
                  setLoggedIn(!isLoggedin);
                }}
              >
                Log Out
              </button>
            ) : (
              <button
                onClick={() => {
                  setLoggedIn(!isLoggedin);
                }}
              >
                Log In
              </button>
            )}
            <li>Home</li>
            <li>About</li>
            <li>contact</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
