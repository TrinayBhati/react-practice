import { Link, Outlet } from "react-router-dom";

const Products = () => {
  return (
    <div>
      <input type="search" placeholder="search products" />
      <nav>
        <Link to="featured">Featured</Link>
        <br />
        <Link to="new">New</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Products;
