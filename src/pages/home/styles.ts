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
    //max-width: 50%;
    object-fit: contain;
    padding: 0 20px;
`;

export const TicketSearchContainer = styled.div`
    margin-top: 10px;
    max-width: 100%;
    padding: 15px 30px;
    border-radius: 5px;
    background: #304c89;
    max-width: 100%;
    display: flex;
    justify-content: space-between;

    .input-container {
        display: flex;
        background: #fff;
        width: 20%;
        border-radius: 5px;
        padding: 5px 10px;

        > input {
            margin-left: 5px;
            border: 0;
            width: 60%;
        }

        .icon-container {
        background: #6F848C;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;

            > img {
                width: 20px;
                height: 20px;
            }
        }
    }

    > button {
        background: #1ABC9C;
        border: 0;
        width: 15%;
        border-radius: 5px;
        color: white;
        font-weight: 600;
    }



`;
