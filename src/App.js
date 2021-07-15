import { useState, useEffect } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

import { productsData } from "./data";

function App() {
  const [products, setProducts] = useState([]);
  console.log(products);

  useEffect(() => {
    setProducts({
      products: productsData,
      size: "",
      sort: ""
    });
  }, []);

  const sortProducts = event => {
    setProducts({
      sort: event.target.value,
      products: [...productsData].sort((a, b) => {
        if (event.target.value === "lowest") {
          return a.price - b.price;
        } else if (event.target.value === "highest") {
          return b.price - a.price;
        } else {
          return a.id < b.id;
        }
      })
    });
  };
  const filterProducts = event => {
    if (event.target.value === "All") {
      setProducts({
        products: productsData
      });
    } else {
      setProducts({
        size: event.target.value,
        products: productsData.filter(item =>
          item.availableSize.includes(event.target.value)
        )
      });
    }
  };

  return (
    <div className="grid-container">
      <Header />
      <Main
        filterProducts={filterProducts}
        sortProducts={sortProducts}
        products={products}
      />
      <Footer />
    </div>
  );
}

export default App;
