import { useState } from "react";
import logo from "../../header-logo.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/hooks/useOnline";

const Title = () => (
  <a href="/">
    <img className="h-20 pl-1 " alt="logo" src={logo} />
  </a>
);

const title = "FoodLads";

const Header = () => {
  const [isLoggedin, setLoggedIn] = useState(false);

  const isOnline = useOnline();

  return (
    <>
      <div className="flex py-1 text-2xl font-bold items-center justify-between lg:bg-red-500  md:bg-teal-600">
        <Title />
        <h1>{title}</h1>
        <div>
          <ul className="flex px-10 ">
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
            <li className="px-2">
              <Link to="/">Home</Link>
            </li>
            <li className="px-2">
              <Link to="/about">About</Link>
            </li>
            <li className="px-2">
              <Link to="/contact">contact</Link>
            </li>
            <li className="px-2">
              <Link to="/instant">Instant</Link>
            </li>
            <li className="px-2">Cart</li>
            <li className="px-2">{isOnline ? "✅" : "❌"}</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
