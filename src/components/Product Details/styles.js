import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content:center;
    margin:50px;

    @media only screen and (max-width: 1200px) {
      display: grid;
      grid-template-columns: repeat(1, auto);
      text-align: center;
      justify-content: center;
      align-items: center;
  }

  @media(max-width: 800px) {
      display: grid;
      grid-template-columns: auto;
      text-align: center;
      justify-content: center;
      align-items: center;
  }

`;

export const ProductImage = styled.div`
    margin:40px;
    img{
    max-height: 500px;
    }
`;

export const nameAbout = styled.div`
    p{
        font-size:14px;
    }
`;

export const ContentDetails = styled.div`
    border:1px solid #000000;
    padding:50px 50px 0px 50px;
    text-align: left;
    
@media only screen and (max-width: 1200px) {
    padding:50px 50px 50px 50px;
}

@media(max-width: 800px) {
    padding:50px 50px 50px 50px;
}

`;

export const ProductDetail = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    vertical-align:middle;
    margin-bottom:50px;
    img{
        width:25px;
        vertical-align:middle;
    }

    p{
        font-size:14px;
    }

`;

export const Aboutcontainer = styled.div`
     margin-bottom: 25px;
`;


export const BackButton = styled.a`
    background: #8a074d;
    font-size: 1em;
    margin: auto auto auto auto;
    padding: 0.5em 1em;
    text-align:left;
    color: white;
    box-shadow: 0px 0px 10px #000000aa;
    
    &:hover{
        background: #68053a;
        cursor: pointer;
    }
`;
