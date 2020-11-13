import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    max-width: 300px;
    position: relative;
    margin: 0 10px;

`;

export const FlightImage = styled.img`
    width: 100%;
    object-fit: contain;
    border-radius: 5px;
`;

export const UpperRow = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding: 10px;

    button {
        background: transparent;
        border: 0;
        border-radius: 5px;
        padding: 1px 5px;
        cursor: pointer;
        transition: background .2s;
    }

    button:hover {
        background: #1ABC9C99;
    }

    .row {
        display: flex;
        width: 100%;
        justify-content: space-between;
    }

    .title {
        width: 100%;
        color: white;
        font-size: 18px;
        font-weight: 400;
    }
`;

export const LowerRow = styled.div`
    position: absolute;
    bottom: 10px;
    left: 0;
    display: flex;
    flex-wrap: wrap;
    height: 20%;
    width: 100%;
    padding: 10px;

    .row {
        display: flex;
        width: 100%;
        align-items: center;
    }

    .left {
        display: flex;
        width: 100%;
        flex-wrap: wrap;
    }

    .title {
        width: 100%;
        color: white;
        font-size: 18px;
        font-weight: 600;
    }

    .details {
        width: 100%;
        color: white;
        font-size: 12px;
        font-weight: 200;

        .flight-price {
            font-weight: 600;
        }
    }

    .date {
        background: cyan;
        font-weight: 600;
        border-radius: 5px;
        font-size: 12px;
        color: #fff;
        background: #1ABC9C;
        padding: 5px;
    }
`;
