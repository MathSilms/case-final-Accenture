import React, { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header';
import { Api } from '../../services/api';
import { Form, Box } from './styles';

const Cadastro: React.FC = () => {

    const [email, setEmail] = useState<string>('')
    const [senha, setSenha] = useState<string>('')
    const [cpf, setCpf] = useState<string>('')
    const [login, setLogin] = useState<string>('')

    async function handleCreateUser(e: FormEvent<HTMLFormElement>): Promise<void> {
        e.preventDefault();
        console.log(cpf)
       const response = await Api.post('/login',{

            cpf,
            email,
            login,
            nome:'teste',
            senha,
        })
        console.log(response)
    }

    return (
        <>
            <Header></Header>
            <Form onSubmit={handleCreateUser}>
                <span className='title'>
                    <h1>Informações de cadastro</h1>
                </span>

                <Box>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            name="email"
                            placeholder="E-mail ou nome de usuário"
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Senha de acesso</label>
                        <input
                            name="password"
                            placeholder="Senha do usuário"
                            type="password"
                            value={senha}
                            onChange={e => setSenha(e.target.value)}
                        />
                    </div>
                </Box>

                <Box>
                    <div>
                        <label htmlFor="cpf">Cpf</label>
                        <input
                            name="cpf"
                            placeholder="E-mail ou nome de usuário"
                            type="text"
                            value={cpf}
                            onChange={e => setCpf(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="login">Nome de usuário</label>
                        <input
                            name="login"
                            placeholder="Senha do usuário"
                            type="text"
                            value={login}
                            onChange={e => setLogin(e.target.value)}
                        />
                    </div>
                </Box>

                <span className='conditions'> Clicando em finalizar cadastro confirmo que tenho mais de 18 (dezoito) anos e que todas as minhas informações acima são verídicas. Confirmo também que concordo com os <Link to=''> Termos​ ​e​ ​Condições​ ​Gerais​ ​de Uso​ ​do T.I Boys.</Link></span>
                <button>Finalizar cadastro</button>
                <span className='haveAccess'>Já tem uma conta? <Link to='/login'>Faça Login!</Link> </span>
            </Form>
        </>
    );

};

export default Cadastro;
