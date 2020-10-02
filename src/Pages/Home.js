import React, { useEffect, useState } from "react";
import api from '../api.js';
import { useHistory } from 'react-router-dom'
import '../styles.css'


export default function Home() {
  const history = useHistory()
  const [produto = null, setProd] = useState(null);
  useEffect(() => {
    if (produto == null) {
      async function loadProd() {
        await api.get(`product`).then(res => {
          setProd(res.data.data);
        })
      }
      loadProd();
    }
  })
  
  async function handleDetails(e) {
    history.push(`/details/?${e}`)
  }

  return (
    <div>
      {produto && //valida se o produto existe
        <div>
          <div className="menu">
            <h1>Lista produtos</h1>
          </div>
          <div className="container">
            {produto.products.map(prod =>
              <ul key={prod.sku}>
                <li>
                  <div className="containerProd">
                    <img src={prod.images.medium} alt="Vinho" />
                    <h4>{prod.name}</h4>
                    <span onClick={e => (handleDetails(prod.url))}> <span className="detalheButton">Detalhes</span></span>
                  </div>
                </li>
              </ul>
            )}
          </div>
        </div>
      }
    </div>
  );
}

