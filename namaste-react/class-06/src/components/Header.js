import logo from "../../header-logo.png";

const Title = () => (
  <a href="/">
    <img className="header-logo" alt="logo" src={logo} />
  </a>
);

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

export default Header;
