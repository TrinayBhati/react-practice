import React, { useState, useEffect } from "react";
import "./style.css";

const API_URL = "https://fakestoreapi.com/products";

const ProductsPage = ({ onSelectItems, selectedItems, deleteItem }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch(API_URL);
      const data = await res.json();
      setProducts(data);
    })();
  }, []);

  if (products.length == 0) {
    return <h1>No Products to display</h1>;
  }

  return (
    <div className="productGrid">
      {products.map((product) => {
        const isItemFound = selectedItems.some(
          (item) => item.id === product.id
        );
        return (
          <div key={product.id}>
            <h3>{product.title.slice(0, 30)}</h3>
            <button
              onClick={() => {
                onSelectItems(product);
              }}
              disabled={isItemFound}
            >
              Add to Cart
            </button>
            {isItemFound && (
              <button
                onClick={() => {
                  deleteItem(product.id);
                }}
              >
                Remove From Cart{" "}
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ProductsPage;
