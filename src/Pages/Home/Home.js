import React, { useEffect, useState } from "react";
import api from "../../api";
import { Link, useHistory } from "react-router-dom";
import "../../styles.css";

import { Container } from "./styles";

import Menu from "../../components/Menu/Menu";
import Product from "../../components/Product/Product";

const Home = () => {
  const history = useHistory();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const productList = await api.get("product");
      setProducts(productList.data.data.products);
      console.log(productList.data.data.products[0].url);
    }

    loadProducts();
  }, []);

  async function handleDetails(e) {
    history.push(`/details/${e}`);
  }

  return (
    <>
      <Menu title="Lista de produtos"></Menu>
      <Container>
        {/* {product.map(p =>
          <ul key={p.sku}>
            <li>
              <div className="containerProd">
                <img src={p.images.medium} height="220px" alt="Vinho" />
                <h4>{p.name}</h4>
                <span onClick={e => (handleDetails(p.url))}> <span className="detalheButton">Detalhes</span></span>
              </div>
            </li>
          </ul>
        )} */}

        {products.map((product) => (
          <Product
            key={product.sku}
            image_url={product.images.medium}
            name={product.name}
          >
            <span>
              Detalhes
              <Link to={`/${product.url}`}></Link>
            </span>
          </Product>
        ))}
      </Container>
    </>
  );
};

export default Home;
