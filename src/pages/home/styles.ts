import styled from 'styled-components';

export const Banner = styled.div`
    background-color: #3a558f;
    width: 100%;
    display: flex;
    padding-bottom: 10%;
`;

export const BannerContent = styled.div`
    margin: 0 120px;
    width: 100vw;
    height: 100%;
    display: flex;


    .banner-col {
        width: 100%;
    }

`;

export const BannerTitle = styled.h1`
    font-weight: bold;
    font-size: 50px;
    color: #fff;
    padding-top: 90px;
`;

export const BannerDetail = styled.h2`
    margin-top: 20px;
    font-weight: 200;
    font-size: 30px;
    color: #fff;
`;

export const BannerImg = styled.img`
    max-width: 50%;
    object-fit: contain;
    padding: 0 20px;

`;
