import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-column-gap: 30px;
  grid-row-gap: 2em;
  text-align: center;
  justify-content: center;
  align-items: center;
  
  @media only screen and (max-width: 1200px) {
      display: grid;
      grid-template-columns: repeat(2, 380px);
      text-align: center;
      justify-content: center;
      align-items: center;
  }

  @media(max-width: 800px) {
      display: grid;
      grid-template-columns: 380px;
      text-align: center;
      justify-content: center;
      align-items: center;
  }

  /*MUDAR O BOTÂO*/
  a {
    background: #8a074d;
    font-size: 1em;
    margin: 0.50em auto;
    padding: 0.5em 1em;
    color: white;
    box-shadow: 0px 0px 10px #000000aa;
    
    &:hover{
        background: #68053a;
        cursor: pointer;
    }
  }
`;

export const Link = styled.a`
      background: #8a074d;
    font-size: 1em;
    margin: 0.50em auto;
    padding: 0.5em 1em;
    color: white;
    box-shadow: 0px 0px 10px #000000aa;
    
    &:hover{
        background: #68053a;
        cursor: pointer;
    }
`;