import React from 'react';
import Footer from '../../components/footer';
import Header from '../../components/header';
import { Banner, BannerContent, BannerDetail, BannerImg, BannerTitle } from './styles';

import homeImage from '../../assets/images/woman-home.png';

const Home: React.FC = () => {

    return (
        <>
            <Header />
                <Banner>
                    <BannerContent>
                        <div className="banner-col">
                            <BannerTitle>Compre e reserve as suas passagens aéreas na T.I. Boys</BannerTitle>
                            <BannerDetail>Passagens com descontos de até 100%</BannerDetail>
                        </div>
                        <BannerImg src={homeImage} alt="Mulher viajando"/>
                    </BannerContent>
                </Banner>
            <Footer />
        </>
    );

};

export default Home;
