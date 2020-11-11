import { format } from 'path';
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer';
import Header from '../../components/header';

import { Form } from './styles';
const Login: React.FC = () => {

    return (
        <>
            <Header></Header>
            <Form>
                <label htmlFor="">Login</label>
                <input placeholder="E-mail ou nome de usuário" type="text"/>
                <label htmlFor="">Senha</label>
                <input placeholder="Senha do usuário" type="password"/>
                <button>Entrar</button>
                <span>Ainda não tem uma conta? <Link to='/cadastro'>Cadastre-se!</Link> </span>
                <Link to='' >Esqueceu sua senha ?</Link>
            </Form>
            <Footer></Footer>
        </>
    )

};

export default Login;
