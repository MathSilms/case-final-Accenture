import React, { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';

import { BsFillPersonFill } from 'react-icons/bs'
import Footer from '../../components/footer';
import Header from '../../components/header';
import img from '../../assets/images/farol.svg'

import { Form, PersonIcon, Section } from './styles';
import { Api } from '../../services/api';

const Login: React.FC = () => {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        try {
            const response = await Api.post('/login', {
                senha,
                email

            });
            console.log(response);
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <Header></Header>
            <Form onSubmit={handleSubmit}>
                <label htmlFor="">Login</label>
                <input
                    value={email}
                    placeholder="E-mail ou nome de usuário"
                    type="text"
                    onChange={e => setEmail(e.target.value)}
                />

                <label htmlFor="">Senha</label>
                <input
                    value={senha}
                    placeholder="Senha do usuário"
                    type="password"
                    onChange={e => setSenha(e.target.value)}
                />

                <button type="submit">Entrar</button>
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
