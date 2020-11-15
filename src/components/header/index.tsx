import React from 'react';
import { Link } from 'react-router-dom';
import { Bar, Containt1, Containt2 } from './styles'

import logo from '../../assets/images/Logo2.png'

const Header: React.FC = () => {
    return (
        <Bar>
            <Containt1><img src={logo} alt=""/></Containt1>
            <Containt2>
                <Link to='/'>Home</Link>
                <Link to='/passagens'>Passagens</Link>
                <Link to='#'>Viagens</Link>
                <Link to='#'>FAQ</Link>
                <Link to='/login' className='not'>
                    <button>Entrar</button>
                </Link>
            </Containt2>
        </Bar>
    )
};

export default Header
