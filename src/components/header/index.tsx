import React from 'react';
import { Link } from 'react-router-dom';
import { Bar, Containt1, Containt2 } from './styles'

const Header: React.FC = () => {
    return (
        <Bar>
            <Containt1>Teste1</Containt1>
            <Containt2>
                <Link to='/'>Home</Link>
                <Link to='/PesquisaPassagens'>Passagens</Link>
                <Link to='/dashboard/viagens'>Viagens</Link>
                <Link to='/dashboard/profile'>Perfil</Link>
                <Link to='/login'>
                    <button>Entrar</button>
                </Link>
            </Containt2>
        </Bar>
    )
};

export default Header
