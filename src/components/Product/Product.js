import React from "react";

import { Product } from "./styles";

const ProductList = ({ image_url, name, url, children }) => {
  return (
    <Product>
      <img src={image_url} alt="Foto garrafa de vinho"></img>
      <h4>{name}</h4>
      {children}
    </Product>
  );
};

export default ProductList;
