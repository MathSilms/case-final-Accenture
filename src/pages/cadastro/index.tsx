import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer';
import Header from '../../components/header';
import {Form } from './styles';

const Cadastro: React.FC = () => {

    return (
        <>
            <Header></Header>
            <Form>
                <span><h1>Informações de cadastro</h1></span>
                <label htmlFor="">Email</label>
                <input placeholder="E-mail ou nome de usuário" type="text" />

                <label htmlFor="">Senha de acesso</label>
                <input placeholder="Senha do usuário" type="password" />

                <label htmlFor="">Cpf</label>
                <input placeholder="Senha do usuário" type="text" />

                <label htmlFor="">Nome de usuário</label>
                <input placeholder="Senha do usuário" type="text" />

                <div>

                </div>

                <button>Entrar</button>
                <span>Já tem uma conta? <Link to='/login'>Faça Login!</Link> </span>
            </Form>
        </>
    );

};

export default Cadastro;
