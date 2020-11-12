import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header';
import {Form,Box} from './styles';

const Cadastro: React.FC = () => {

    return (
        <>
            <Header></Header>
            <Form>
                <span className='title'>
                    <h1>Informações de cadastro</h1>
                </span>

                <Box>
                    <div>
                        <label htmlFor="">Email</label>
                        <input placeholder="E-mail ou nome de usuário" type="email" />
                    </div>
                    <div>
                        <label htmlFor="">Senha de acesso</label>
                        <input placeholder="Senha do usuário" type="password" />
                    </div>
                </Box>

                <Box>
                    <div>
                        <label htmlFor="">Cpf</label>
                        <input placeholder="E-mail ou nome de usuário" type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Nome de usuário</label>
                        <input placeholder="Senha do usuário" type="text" />
                    </div>
                </Box>

                <span className='conditions'>Clicando em finalizar cadastro confirmo que tenho mais de 18 (dezoito) anos e que todas as minhas informações acima são verídicas. Confirmo também que concordo com os <Link to=''> Termos​ ​e​ ​Condições​ ​Gerais​ ​de Uso​ ​do T.I Boys.</Link></span>
                <button>Finalizar cadastro</button>
                <span>Já tem uma conta? <Link to='/login'>Faça Login!</Link> </span>
            </Form>
        </>
    );

};

export default Cadastro;
