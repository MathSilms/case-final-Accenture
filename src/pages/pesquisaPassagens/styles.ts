import styled from 'styled-components';

export const TicketBanner = styled.div`
    background-color: #3a558f;
    width: 100%;
    display: flex;
    padding-bottom: 30px;
`;

export const TicketBannerContent = styled.div`
    margin: 0 120px;
    width: 100%;
    height: 100%;
`;

export const TicketTitle = styled.div`
    font-weight: 600;
    color: white;
    font-size: 30px;
    margin: 50px 0 20px 0;
`;

export const BodyContent = styled.div`
    margin: 0 120px;
    display: flex;
    flex-wrap: wrap;

    .flight-row {
        display: flex;
        justify-content: left;
        width: 100%;
        height: auto;
        flex-wrap: wrap;
    }
`;

export const BodyTitle = styled.h2`
    margin: 20px 0;
    font-weight: 600;
    font-size: 30px;
    width: 100%;
`;

