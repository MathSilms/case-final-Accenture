import React from 'react';
import Footer from '../../components/footer';
import Header from '../../components/header';
import { Banner, BannerContent, BannerDetail, BannerImg, BannerTitle, BodyContainer, BodyTitle, TicketSearchContainer, UpBanner } from './styles';

import homeImage from '../../assets/images/woman-home.png';

import planeIcon from '../../assets/images/plane.svg';
import locationIcon from '../../assets/images/location-point.svg';
import calendarIcon from '../../assets/images/calendar.svg';


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
                                <input type="text" name="origem" placeholder="Origem" />
                            </div>

                            <div className="input-container">
                                <div className="icon-container">
                                    <img src={locationIcon} alt="Avião"/>
                                </div>
                                <input type="text" name="origem" placeholder="Origem" />
                            </div>

                            <div className="input-container">
                                <div className="icon-container">
                                    <img src={calendarIcon} alt="Avião"/>
                                </div>
                                <input type="text" name="origem" placeholder="Origem" />
                            </div>

                            <div className="input-container">
                                <div className="icon-container">
                                    <img src={calendarIcon} alt="Avião"/>
                                </div>
                                <input type="text" name="origem" placeholder="Origem" />
                            </div>

                            <button type="button">Buscar</button>

                        </TicketSearchContainer>
                    </BannerContent>
                </Banner>

                <BodyContainer>
                    <BodyTitle>Promoções de vôos para você voltar a viajar</BodyTitle>
                </BodyContainer>

            <Footer />
        </>
    );

};

export default Home;
