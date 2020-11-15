import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer';
import Header from '../../components/header';
import Menu from '../../components/Menu';

import { Content, Container, Bar, Section, Card } from './styles';
import  rjImg from '../../assets/images/rj.jpg'

const dashboard: React.FC = () => {
    return (
        <>
            <Header />
            <Container>
                <div className='transferFlex'>
                    <div className='space'>

                    </div>
                    <Bar >
                        <Link to='#'>Reservas Efetuadas</Link>
                        <Link to='#'>Passagens compradas</Link>
                        <Link to='/dashboard/favoritos' className='active'>Passagens Favoritas</Link>
                    </Bar>
                </div>
                <Content>
                    <Menu />
                    <Section>
                        <div>
                            <Card className='card'>
                                <img src={rjImg} alt=""/>
                                <div className='cardContent'>
                                    <div>
                                        <span>Preço Total: <span>R$ 218,89</span></span>
                                        <span>Preço da passagem: <span>R$ 218,89</span></span>
                                        <span>Moeda: <span>BRL</span></span>
                                        <span>Data: <span>11/04/2021</span></span>
                                        <span>Duração da viajem: <span>5h 25m</span></span>
                                        <span>Número de paradas: <span>2</span></span>
                                        <span>Assentos disponíveis: <span>18</span></span>
                                        <span>Classe: <span>Econômica</span></span>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </Section>
                </Content>
            </Container>
            <Footer />
        </>
    );
}

export default dashboard;
