import { useState } from "react";

import "./App.css";
import ProductsPage from "./components/ProductsPage";
import Header from "./components/Header";

function App() {
  const [selectedItems, setSelectedItems] = useState([]);
  const onSelectItems = (item) => {
    setSelectedItems((prevItems) => [...prevItems, item]);
  };
  const deleteItem = (id) => {
    setSelectedItems((prevItems) => {
      return prevItems.filter((item) => item.id !== id);
    });
  };
  return (
    <>
      <Header cartCount={selectedItems.length} />
      <ProductsPage
        onSelectItems={onSelectItems}
        selectedItems={selectedItems}
        deleteItem={deleteItem}
      />
    </>
  );
}

export default App;
