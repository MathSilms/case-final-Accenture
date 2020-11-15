import React, { useMemo } from 'react';

import { Container, FlightImage, LowerRow, UpperRow } from './styles';

import flightImage from '../../assets/images/flight-background.png';
import favoriteIcon from '../../assets/images/star.svg';

interface FlightInfoProps {
    city: string;
    state: string;
    country: string;
    price: string;
    date: string;
}

const FlightInfo: React.FC<FlightInfoProps> = ({ city, state, country, price, date }: FlightInfoProps) => {
    const formattedData = useMemo(() => {
        return (new Date(date).getDate()+'/'+
            (new Date(date).getMonth()+1)+'/'+
            new Date(date).getFullYear()
        )
    }, []);

  return (
    <Container>
        <FlightImage src={flightImage}/>
        <UpperRow>
            <span className="row">
                <span className="title">{country}</span>
                <button><img src={favoriteIcon} alt=""/></button>
            </span>
        </UpperRow>

        <LowerRow>
            <div className="row">
                <div className="left">
                    <span className="title">{city} - {state}</span>
                    <span className="details">A partir de
                        <span className="flight-price"> {price}</span>
                    </span>
                </div>
                <span className="date">{formattedData}</span>
            </div>
        </LowerRow>
    </Container>
  );
};

export default FlightInfo;
