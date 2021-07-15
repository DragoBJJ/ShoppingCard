import { useState, useEffect } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

import { productsData } from "./data";

function App() {
  const [products, setProducts] = useState();

  useEffect(() => {
    setProducts({
      products: productsData,
      size: "",
      sort: ""
    });
  }, []);

  return (
    <div className="grid-container">
      <Header />
      <Main products={products} />
      <Footer />
    </div>
  );
}

export default App;
