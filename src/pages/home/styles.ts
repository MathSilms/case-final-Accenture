import styled from 'styled-components';

export const Banner = styled.div`
    background-color: #3a558f;
    width: 100%;
    display: flex;
    padding-bottom: 10%;
`;

export const BannerContent = styled.div`
    margin: 0 120px;
    width: 100%;
    height: 100%;
`;

export const UpBanner = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;

    .banner-col {
        max-width: 50%;
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
    width: auto;
    object-fit: contain;
    padding: 0 20px;
`;

export const BodyContent = styled.div`
    margin: 0 120px;
    display: flex;
    flex-wrap: wrap;

    .flight-row {
        display: flex;
        justify-content: space-around;
        width: 100%;
    }
`;

export const BodyTitle = styled.h2`
    margin: 20px 0;
    font-weight: 600;
    font-size: 30px;
    width: 100%;
`;
