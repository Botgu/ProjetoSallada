import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api.js";
import "./details.css";

import WineBottle from "../../assets/wine-bottle.svg";
import Cone from "../../assets/cone.svg";
import Grape from "../../assets/grape.svg";
import Termometer from "../../assets/thermometer.svg";
import Restaurant from "../../assets/restaurant.svg";

import Menu from "../../components/Menu/Menu.js";
import ProductDetails from "../../components/Product Details/ProductDetails";

export default function Details() {
  const [details, setDetails] = useState();
  const { id } = useParams();

  useEffect(() => {
    async function loadDetail() {
      const response = await api.get(`product/${id}`);
      setDetails(response.data.data);
    }

    loadDetail();
  }, [details, id]);

  return (
    <>
      {details && (
        <div>
          <Menu title="Detalhes Produto"></Menu>
          <ProductDetails details={details} />
          <div className="footer">
            <h1>Para mais informações entre em contato!</h1>
          </div>
        </div>
      )}
    </>
  );
}
