import styled from 'styled-components';

export const RowFoto = styled.div`
     text-align: center;
     vertical-align: middle;
    img{
      max-height: 500px;
      }
`;


export const DetailButton = styled.a`
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
