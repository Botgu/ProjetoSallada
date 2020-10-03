import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    align-content: center;
    text-align:center;
    margin:50px;
`;

export const ProductImage = styled.div`
    img{
    max-height: 500px;
    }
`;

export const nameAbout = styled.div`
    p{
        font-size:14px;
    }

`;

export const Wapper = styled.div`
    border:1px solid #000000;
    text-align: left;

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

