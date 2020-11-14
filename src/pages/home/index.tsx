import React from 'react';
import Footer from '../../components/footer';
import Header from '../../components/header';
import { Banner, BannerContent, BannerDetail, BannerImg, BannerTitle, BodyContent, BodyTitle, UpBanner } from './styles';

import homeImage from '../../assets/images/woman-home.png';


import FlightInfo from '../../components/FlightInfo';
import TicketSearch from '../../components/TicketSearch';


const Home: React.FC = () => {

    return (
        <>
            <Header />
                <Banner>
                    <BannerContent>
                        <UpBanner>
                            <div className="banner-col">
                                <BannerTitle>Compre e reserve as suas passagens aéreas na T.I. Boys</BannerTitle>
                                <BannerDetail>Passagens com descontos de até 100%</BannerDetail>
                            </div>
                            <BannerImg src={homeImage} alt="Mulher viajando"/>
                        </UpBanner>
                        <TicketSearch redirectPath="/passagens"/>
                    </BannerContent>
                </Banner>

                <BodyContent>
                    <BodyTitle>Promoções de vôos para você voltar a viajar</BodyTitle>

                    <div className="flight-row">
                        <FlightInfo
                            country="BR"
                            city="Rio de Janeiro"
                            state="RJ"
                            price="R$150,00"
                            date="22/11/20"
                        />
                        <FlightInfo
                            country="BR"
                            city="Rio de Janeiro"
                            state="RJ"
                            price="R$150,00"
                            date="22/11/20"
                        />
                        <FlightInfo
                            country="BR"
                            city="Rio de Janeiro"
                            state="RJ"
                            price="R$150,00"
                            date="22/11/20"
                        />
                        <FlightInfo
                            country="BR"
                            city="Rio de Janeiro"
                            state="RJ"
                            price="R$150,00"
                            date="22/11/20"
                        />
                        <FlightInfo
                            country="BR"
                            city="Rio de Janeiro"
                            state="RJ"
                            price="R$150,00"
                            date="22/11/20"
                        />
                        <FlightInfo
                            country="BR"
                            city="Rio de Janeiro"
                            state="RJ"
                            price="R$150,00"
                            date="22/11/20"
                        />
                        <FlightInfo
                            country="BR"
                            city="Rio de Janeiro"
                            state="RJ"
                            price="R$150,00"
                            date="22/11/20"
                        />
                    </div>
                </BodyContent>

            <Footer />
        </>
    );

};

export default Home;
