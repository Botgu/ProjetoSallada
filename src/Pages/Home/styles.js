import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  text-align: center;
  justify-content: center;
  align-items: center;

  a {
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
