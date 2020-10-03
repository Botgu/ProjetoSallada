import React, { useEffect, useState } from "react";
import api from "../../api";
import { Link } from "react-router-dom";
import { Container } from "./styles";

import Menu from "../../components/Menu/Menu";
import Product from "../../components/Product/Product";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      try {
        const productList = await api.get("product");
        setProducts(productList.data.data.products);
      } catch (err) {
        console.log("Failed to load product list");
      }
    }

    loadProducts();
  }, []);

  return (
    <>
      <Menu title="Lista de produtos"></Menu>
      <Container>
        {products.map((product) => (
          <Product
            key={product.sku}
            image_url={product.images.medium}
            name={product.name}
          >
            <Link to={`/details/${product.url}`}>Detalhes</Link>
          </Product>
        ))}
      </Container>
      <Footer title="Para mais informações entre em contato! tel:9999-9999"></Footer>
    </>
  );
};

export default Home;
