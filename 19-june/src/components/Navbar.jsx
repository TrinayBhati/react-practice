import { NavLink } from "react-router-dom";

const newLinkStyle = ({ isActive }) => {
  return {
    textDecoration: isActive ? "none" : "underline",
  };
};

const Navbar = () => {
  return (
    <nav>
      <NavLink style={newLinkStyle} to="/">
        Home
      </NavLink>
      <hr />
      <NavLink style={newLinkStyle} to="about">
        About
      </NavLink>
      <hr />
      <NavLink style={newLinkStyle} to="products">
        Products
      </NavLink>
      <hr />
    </nav>
  );
};

export default Navbar;
