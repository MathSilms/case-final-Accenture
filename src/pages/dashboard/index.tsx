import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer';
import Header from '../../components/header';
import Menu from '../../components/Menu';

import { Content, Container } from './styles';

const dashboard: React.FC = () => {
    return (
        <>
            <Header />
            <Container>
                <Menu />
                <Content>
                   <nav className="Bar">
                       <Link to=''>Reservas Efetuadas</Link>
                       <Link to=''>Passagens compradas</Link>
                       <Link to=''>Passagens Favoritas</Link>
                   </nav>
                   <div className="conteudo">

                   </div>
                </Content>
            </Container>
            <Footer />
        </>
    );
}

export default dashboard;
