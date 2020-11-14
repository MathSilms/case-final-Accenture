import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer';
import Header from '../../components/header';
import Menu from '../../components/Menu';

import { Content, Container, Bar } from './styles';

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
                        <Link to='#'>Passagens Favoritas</Link>
                    </Bar>
                </div>
                <Content>
                    <Menu />
                    <div className="conteudo">
                        .
                    </div>
                </Content>
            </Container>
            <Footer />
        </>
    );
}

export default dashboard;
