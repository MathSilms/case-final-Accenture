import React, { useEffect, useState } from 'react';
import FlightInfo from '../../components/FlightInfo';
import Footer from '../../components/footer';
import Header from '../../components/header';
import TicketSearch from '../../components/TicketSearch';
import { BodyContent, TicketBanner, TicketBannerContent, TicketTitle, BodyTitle } from './styles';

import { Api } from '../../services/api';

interface SearchDataProps {
    adults: number;
    children: number;
    infants: number;
    max: number;
    currencyCode: string;
    departureDate: string;
    returnDate: string;
    destinationCode: string;
    originCode: string;
}

interface SearchResults {
    id: number;
    price: {
        currency: string;
        total: string;
    };
    itineraries: [
        {
            segments: [
                {
                    departure: {
                        iataCode: string,
                        at: string
                    },
                    arrival: {
                        iataCode: string,
                        at: string,
                    }
                }
            ]
        }
    ]
}

const PesquisaPassagens: React.FC = () => {
    const [searchData, setSearchData] = useState<SearchDataProps | null>(null);
    const [results, setResults] = useState<Array<SearchResults>>([]);

    useEffect(() => {
        const search = localStorage.getItem('centaurus@search');
        if (search) {
            setSearchData(JSON.parse(search));
        }
    }, []);

    async function sendSearchData() {
        try {
            const response = await Api.post("/tickets/offers", searchData);
            setResults(response.data.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        sendSearchData();
    }, [searchData]);

    return (
        <>
            <Header>teste</Header>
            <TicketBanner>
                <TicketBannerContent>
                    <TicketTitle>Pesquisar passagens por todo o Brasil!</TicketTitle>
                    <TicketSearch redirectPath="/passagens" />
                </TicketBannerContent>
            </TicketBanner>

            <BodyContent>
                <div className="search-params">
                    <span>Origem: {searchData?.originCode}</span>
                    <span>Destino: {searchData?.destinationCode}</span>
                    <span>Data de ida: {searchData?.departureDate}</span>
                    <span>Data de volta: {searchData?.returnDate}</span>
                    <span>Quantidade de adultos: {searchData?.adults}</span>
                    <span>Quantidade de crianças: {searchData?.children}</span>
                    <span>Quantidade de bebês: {searchData?.infants}</span>
                    <span>Moeda de pagamento: {searchData?.currencyCode}</span>
                </div>
                <BodyTitle>Resultados: </BodyTitle>

                <div className="flight-row">
                    {results ? results.map((result: SearchResults) => (
                        <FlightInfo
                            key={result.id}
                            country={result.itineraries[0].segments[0].departure.iataCode}
                            city={result.itineraries[0].segments[0].departure.iataCode}
                            state={result.itineraries[0].segments[0].arrival.iataCode}
                            price={`${result.price.currency} ${result.price.total}`}
                            date={result.itineraries[0].segments[0].arrival.at}
                        />
                    )) : (<h1>Nenhuma passagem encontrada</h1>)}
                </div>
            </BodyContent>
            <Footer>Teste</Footer>
        </>
    );

};

export default PesquisaPassagens;
