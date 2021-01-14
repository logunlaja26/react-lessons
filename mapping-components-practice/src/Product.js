import React from "react";

function Product(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>
        {props.price.toLocaleString("en-us", {
          style: "currency",
          currency: "USD",
        })}{" "}
        - {props.description}
      </p>
      <hr />
    </div>
  );
}

export default Product;
