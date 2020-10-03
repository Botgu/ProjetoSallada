import styled from "styled-components";

export const Product = styled.div`
  border: 1px solid rgba(138, 7, 77, 0.5);
  padding-top: 25px;
  padding-left: 30px;
  padding-right: 30px;
  box-shadow: 0px 0px 2px #000000aa;
  height: 350px;
  max-width: 196px;
  display: grid;
  grid-template-rows: 9fr 1fr 2fr;

  img {
    height: 220px;
  }

  span {
    background: #8a074d;
    padding: 10px 25px;
    color: white;
    box-shadow: 0px 0px 10px #000000aa;

    &:hover {
      background: #68053a;
      cursor: pointer;
    }
  }
`;
