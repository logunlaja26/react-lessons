import React from "react";
import Product from "./Product";
import productsData from "./vschoolProducts";

function App() {
  const productsComponent = productsData.map((product) => (
    <Product
      key={product.id}
      name={product.name}
      price={product.price}
      description={product.description}
    />
  ));

  return <div>{productsComponent}</div>;
}

export default App;
