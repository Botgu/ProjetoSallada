import React from "react";

import { Container, ProductImage, ProductDetail } from "./styles";

import WineBottle from "../../assets/wine-bottle.svg";
import Cone from "../../assets/cone.svg";
import Grape from "../../assets/grape.svg";
import Termometer from "../../assets/thermometer.svg";
import Restaurant from "../../assets/restaurant.svg";

const ProductDetails = ({ details }) => {
  const {
    images,
    name,
    aboutThisWine,
    countries,
    type,
    bundleProducts,
  } = details;

  const alcoholContent = bundleProducts[0]?.alcoholContent;
  const grapeList = bundleProducts[0]?.grapeList;
  const servingTemperature = bundleProducts[0]?.servingTemperature;
  const pairing = bundleProducts[0]?.pairing;

  return (
    <Container>
      <ProductImage>
        <img src={images.large} alt={`Foto de ${name}`} />
      </ProductImage>
      <ProductDetail>
        <p>{name}</p>
        <p>Sobre: {aboutThisWine}</p>
        <iconDetails>
          <span>Produtor</span>
          <img
            src={countries[0].icon}
            alt={`Icone bandeira ${countries[0].name}`}
          />
          <p>{countries[0].name}</p>
        </iconDetails>
        <iconDetails>
          <span>Tipo</span>
          <img src={WineBottle} alt="Tipo" />
          <p>{type}</p>
        </iconDetails>
        <iconDetails>
          <span>Teor alcoólico</span>
          <img src={Cone} alt="Porcentagem Alcool" />
          <p>{alcoholContent}</p>
        </iconDetails>
        <iconDetails>
          <span>Uvas</span>
          <img src={Grape} alt="Uvas" />
          <p>{grapeList}</p>
        </iconDetails>
        <p>{servingTemperature}</p>
        <p>{pairing}</p>
      </ProductDetail>
    </Container>
  );
};

export default ProductDetails;
