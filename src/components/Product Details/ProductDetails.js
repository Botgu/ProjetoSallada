import React from "react";

import { Container } from "./styles";

const ProductDetails = ({ details }) => {
  const { images, name, about, countries, type, bundleProducts } = details;

  const alcoholContent = bundleProducts[0]?.alcoholContent;
  const grapeList = bundleProducts[0]?.grapeList;
  const servingTemperature = bundleProducts[0]?.servingTemperature;
  const pairing = bundleProducts[0]?.pairing;

  return (
    <Container>
      <img src={images.large} alt={`Foto de ${name}`} />
      <p>{name}</p>
      <p>{about}</p>
      <p>{countries[0].name}</p>
      <img
        src={countries[0].icon}
        alt={`Icone bandeira ${countries[0].name}`}
      />
      <p>{type}</p>
      <p>{alcoholContent}</p>
      <p>{grapeList}</p>
      <p>{servingTemperature}</p>
      <p>{pairing}</p>
    </Container>
  );
};

export default ProductDetails;
