import React from 'react';
import Footer from '../../components/footer';
import Header from '../../components/header';
import { Banner, BannerContent, BannerDetail, BannerImg, BannerTitle, BodyContent, BodyTitle, TicketSearchContainer, UpBanner } from './styles';

import homeImage from '../../assets/images/woman-home.png';

import planeIcon from '../../assets/images/plane.svg';
import locationIcon from '../../assets/images/location-point.svg';
import calendarIcon from '../../assets/images/calendar.svg';
import FlightInfo from '../../components/FlightInfo';


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
                        <TicketSearchContainer>
                            <div className="input-container">
                                <div className="icon-container">
                                    <img src={planeIcon} alt="Avião"/>
                                </div>
                                <input type="text" name="origin" placeholder="Origem" />
                            </div>

                            <div className="input-container">
                                <div className="icon-container">
                                    <img src={locationIcon} alt="Localidade"/>
                                </div>
                                <input type="text" name="destination" placeholder="Destino" />
                            </div>

                            <div className="input-container">
                                <div className="icon-container">
                                    <img src={calendarIcon} alt="Calendário"/>
                                </div>
                                <input type="text" name="initialDate" placeholder="Ida" />
                            </div>

                            <div className="input-container">
                                <div className="icon-container">
                                    <img src={calendarIcon} alt="Calendário"/>
                                </div>
                                <input type="text" name="finalDate" placeholder="Volta" />
                            </div>

                            <button type="button">Buscar</button>

                        </TicketSearchContainer>
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
                    </div>
                </BodyContent>

            <Footer />
        </>
    );

};

export default Home;
