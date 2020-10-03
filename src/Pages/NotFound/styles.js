import styled from "styled-components";

export const Container = styled.div`  
text-align: center;    
`;

export const Button = styled.button`       
  width: 150px;
  background: #771248;
  font-size: 1em;
  margin: 2em;  
  border: 2px solid black;
  border-radius: 3px;
  color: #fff;
  &:hover  {
    background: #68053a;
    cursor: pointer;
  }
`;

export const Title = styled.h1`
  color: #111; 
  font-family: 'Helvetica Neue',sans-serif;
  font-size: 90px;
  font-weight: bold;
  letter-spacing: -1px; 
  line-height: 1;  
`

export const Text = styled.h2`
  color: #111; 
  font-family: 'Open Sans', sans-serif; 
  font-size: 30px;
  font-weight: 200;     
`

export const ButtonText = styled.p`
color: white; 
font-family: 'Helvetica Neue', sans-serif; 
font-size: 16px; 
`
