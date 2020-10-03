import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api.js";
import "./details.css";

import Menu from "../../components/Menu/Menu.js";
import Footer from "../../components/Footer/Footer";
import ProductDetails from "../../components/Product Details/ProductDetails";

export default function Details() {
  const [details, setDetails] = useState();
  const { id } = useParams();

  useEffect(() => {
    async function loadDetail() {
      try {
        const response = await api.get(`product/${id}`);
        setDetails(response.data.data);
      } catch (err) {
        console.log("Failed to get product details");
      }
    }

    loadDetail();
  }, [id]);

  return (
    <>
      {details && (
        <div>
          <Menu title="Detalhes Produto"></Menu>
          <ProductDetails details={details} />
          <Footer title="Para mais informações entre em contato! tel:9999-9999"></Footer>
        </div>
      )}
    </>
  );
}
