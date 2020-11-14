import React from 'react';
import Footer from '../../components/footer';
import Header from '../../components/header';
import TicketSearch from '../../components/TicketSearch';
import { TicketBanner, TicketBannerContent, TicketTitle } from './styles';


const PesquisaPassagens: React.FC = () => {

    return (
        <>
            <Header>teste</Header>
                <TicketBanner>
                    <TicketBannerContent>
                        <TicketTitle>Pesquisar passagens por todo o Brasil!</TicketTitle>
                        <TicketSearch />
                    </TicketBannerContent>
                </TicketBanner>
            <Footer>Teste</Footer>
        </>
    );

};

export default PesquisaPassagens;
