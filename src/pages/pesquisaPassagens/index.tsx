import React, { useState } from 'react';
import FlightInfo from '../../components/FlightInfo';
import Footer from '../../components/footer';
import Header from '../../components/header';
import TicketSearch from '../../components/TicketSearch';
import { BodyContent, TicketBanner, TicketBannerContent, TicketTitle, BodyTitle } from './styles';


interface SearchDataProps {
    adults: number;
    children: number;
    infants: number;
    max: number;

}

const PesquisaPassagens: React.FC = () => {
    const [searchData, setSearchData] = useState();

    useState

    return (
        <>
            <Header>teste</Header>
                <TicketBanner>
                    <TicketBannerContent>
                        <TicketTitle>Pesquisar passagens por todo o Brasil!</TicketTitle>
                        <TicketSearch />
                    </TicketBannerContent>
                </TicketBanner>

                <BodyContent>
                    <BodyTitle>Resultados: </BodyTitle>

                    <div className="flight-row">
                        <FlightInfo
                            country="BR"
                            city="São Paulo"
                            state="SP"
                            price="R$250,00"
                            date="25/11/20"
                        />
                    </div>
                </BodyContent>
            <Footer>Teste</Footer>
        </>
    );

};

export default PesquisaPassagens;
