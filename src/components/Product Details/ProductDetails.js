import React from "react";
import { useHistory } from 'react-router-dom';

import { Container, ProductImage, ProductDetail, ContentDetails, Aboutcontainer, BackButton, IconDetails } from "./styles";

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

  const history = useHistory();

  async function handleHome() {
      history.push('/');
  }

  const alcoholContent = bundleProducts[0]?.alcoholContent;
  const grapeList = bundleProducts[0]?.grapeList;
  const servingTemperature = bundleProducts[0]?.servingTemperature;
  const pairing = bundleProducts[0]?.pairing;

  return (
    <Container>
      <ProductImage>
        <img src={images.large} alt={`Foto de ${name}`} />
      </ProductImage>
      <ContentDetails>
        <p>{name}</p>
        <Aboutcontainer>
          <p>Sobre: {aboutThisWine}</p>
        </Aboutcontainer>
        <ProductDetail>
          <IconDetails>
            <p>Produtor</p>
            <img
              src={countries[0].icon}
              alt={`Icone bandeira ${countries[0].name}`}
            />
            <span>{countries[0].name}</span>
          </IconDetails>
          <IconDetails>
            <p>Tipo</p>
            <img src={WineBottle} alt="Tipo" />
            <span>{type}</span>
          </IconDetails>
          <IconDetails>
            <p>Teor alcoólico</p>
            <img src={Cone} alt="Porcentagem Alcool" />
            <span>{alcoholContent}</span>
          </IconDetails>
          <IconDetails>
            <p>Uvas</p>
            <img src={Grape} alt="Uvas" />
            <span>{grapeList}</span>
          </IconDetails>
          <IconDetails>
            <p>Servir</p>
            <img src={Termometer} alt="Termometro" />
            <span>{servingTemperature}</span>
          </IconDetails>
          <IconDetails>
            <p>Combina com</p>
            <img src={Restaurant} alt="Garfo e faca" />
            <span>{pairing}</span>
          </IconDetails>
        </ProductDetail>
        <BackButton onClick={handleHome}>voltar</BackButton>
      </ContentDetails>
    </Container>
  );
};

export default ProductDetails;
