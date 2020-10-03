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
          {/* <div className="detalhesConteudo">
            <div className="rowFoto">
              <img src={details.images.large} width="280px" alt="Vinho" />
            </div>
            <div className="conteudoSobre">
              <div className="nomePreco">
                <strong>{details.name} </strong>
              </div>
              <div className="sobre">
                <span>
                  <strong>
                    Sobre o Vinho:
                    <br />
                  </strong>
                  {details.aboutThisWine}{" "}
                </span>
                <div className="nomePais">
                  <div>
                    <h4>Produtor</h4>
                    <img
                      className="iconDetail"
                      src={details.countries[0].icon}
                      width="20px"
                      alt="Bandeira"
                    />
                    <span> {details.countries[0]?.name} </span>
                  </div>
                  <div>
                    <h4>Tipo</h4>
                    <img
                      className="iconDetail"
                      src={WineBottle}
                      width="20px"
                      alt="Garrafa Vinho"
                    />
                    <span> {details.type} </span>
                  </div>
                  <div>
                    <h4>Teor alcoólico</h4>
                    <img
                      className="iconDetail"
                      src={Cone}
                      width="20px"
                      alt="Funil"
                    />
                    <span> {details.bundleProducts[0]?.alcoholContent} </span>
                  </div>
                  <div>
                    <h4>Uvas</h4>
                    <img
                      className="iconDetail"
                      src={Grape}
                      width="20px"
                      alt="Uva"
                    />
                    <span> {details.bundleProducts[0]?.grapeList} </span>
                  </div>
                  <div>
                    <h4>Servir</h4>
                    <img
                      className="iconDetail"
                      src={Termometer}
                      width="20px"
                      alt="Termometro"
                    />
                    <span>
                      {" "}
                      {details.bundleProducts[0]?.servingTemperature}{" "}
                    </span>
                  </div>
                  <div>
                    <h4>Combina:</h4>
                    <img
                      className="iconDetail"
                      src={Restaurant}
                      width="20px"
                      alt="Garfo e faca"
                    />
                    <span> {details.bundleProducts[0]?.pairing} </span>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="footer">
            <h1>Para mais informações entre em contato!</h1>
          </div>
        </div>
      )}
    </>
  );
}
