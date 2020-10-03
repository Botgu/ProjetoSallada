import React, { useEffect, useState } from "react";
import api from '../../api';
import { useHistory } from 'react-router-dom'
import '../../styles.css';

import { Container } from './styles';

import Menu from '../../components/Menu/Menu';

const Home = () => {
  const history = useHistory()
  const [product, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('product');
      setProducts(response.data.data.products);
    }

    loadProducts();
  }, []);

  async function handleDetails(e) {
    history.push(`/details/?${e}`)
  }

  return (
    <>
      <Menu title="Lista de produtos"></Menu>
      <Container>
        {product.map(p =>
          <ul key={p.sku}>
            <li>
              <div className="containerProd">
                <img src={p.images.medium} height="220px" alt="Vinho" />
                <h4>{p.name}</h4>
                <span onClick={e => (handleDetails(p.url))}> <span className="detalheButton">Detalhes</span></span>
              </div>
            </li>
          </ul>
        )}
      </Container>
    </>
  );
}

export default Home;