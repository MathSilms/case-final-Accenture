import React from 'react';
import { Link } from 'react-router-dom';

import { BsFillPersonFill }  from 'react-icons/bs'
import Footer from '../../components/footer';
import Header from '../../components/header';
import img from '../../assets/images/farol.svg'



import { Form, PersonIcon, Section } from './styles';
const Login: React.FC = () => {

    return (
        <>
            <Header></Header>
            <Form>
                <label htmlFor="">Login</label>
                <input placeholder="E-mail ou nome de usuário" type="text" />
                <label htmlFor="">Senha</label>
                <input placeholder="Senha do usuário" type="password" />
                <button>Entrar</button>
                <span>Ainda não tem uma conta? <Link to='/cadastro'>Cadastre-se!</Link> </span>
                <Link to='' >Esqueceu sua senha ?</Link>
            </Form>
            <Section>
                <div className='content1'>
                    <img src={img} alt="Bem vindo de volta" />
                </div>
                <div className='content2' >
                    <h2>Bem-vindo novamente! </h2>
                    <span>Agradecemos a confiança no nosso trabalho!</span>
                </div>
            </Section>


            <Footer></Footer>
        </>
    )

};

export default Login;
