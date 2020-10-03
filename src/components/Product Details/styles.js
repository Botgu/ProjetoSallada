import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    text-align: center;
    align-items: center;
`;

export const ProductImage = styled.div`
    img{
    max-height: 500px;
    }
`;

export const ProductDetail = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 280px);
    vertical-align:middle;
    img{
        width:27px;
        vertical-align:middle;
    }

    p{
        font-size:14px;
    }

`;


export const iconDetails = styled.div`

`;

