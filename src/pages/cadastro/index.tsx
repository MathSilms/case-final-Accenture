import React, { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header';
import { Api } from '../../services/api';
import { Form, Box, Modal, Exit } from './styles';

const Cadastro: React.FC = () => {
    const [success, setSuccess] = useState(false);
    // const [error, setError] = useState(false);
    const [inputError, setInputError] = useState<string>('');

    const [email, setEmail] = useState<string>('')
    const [senha, setSenha] = useState<string>('')
    const [cpf, setCpf] = useState<string>('')
    const [nome, setNome] = useState<string>('')


    async function handleCreateUser(e: FormEvent<HTMLFormElement>): Promise<void> {
        e.preventDefault();

        const data = { email, senha, nome, cpf }

        // @ts-ignore
        const keyWithError = Object.keys(data).find(key => !data[key])
        if (keyWithError) {
            return setInputError(keyWithError.toUpperCase())
        }


        try {
            const response = await Api.post('/signup', {
                cpf,
                email,
                login: email,
                nome,
                senha,
            })

            setSuccess(true)

        } catch (err) {
            setInputError('tivemos um pequeno erro, tente novamente mais tarde!')
            return
        }

    }

    return (
        <>
            <Header></Header>
            <Form onSubmit={handleCreateUser}>
                <span className='title'>
                    <h1>Cadastro</h1>
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
                        <label htmlFor="nome">Seu nome Completo</label>
                        <input
                            name="nome"
                            placeholder="E-mail ou nome de usuário"
                            type="text"
                            value={nome}
                            onChange={e => setNome(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="cpf">Cpf</label>
                        <input
                            name="cpf"
                            placeholder="Senha do usuário"
                            type="text"
                            value={cpf}
                            onChange={e => setCpf(e.target.value)}
                        />
                    </div>
                </Box>

                <span className='conditions'> Clicando em finalizar cadastro confirmo que tenho mais de 18 (dezoito) anos e que todas as minhas informações acima são verídicas. Confirmo também que concordo com os <Link to=''> Termos​ ​e​ ​Condições​ ​Gerais​ ​de Uso​ ​do T.I Boys.</Link></span>
                <button>Finalizar cadastro</button>
                <span className='haveAccess'>Já tem uma conta? <Link to='/login'>Faça Login!</Link> </span>
            </Form>


            { success &&
                <Modal color={'green'}>
                    <Exit size={25} onClick={() => setSuccess(false)} />
                    <h1>Cadastro Efetuado com sucesso</h1>
                </Modal>
            }

            { inputError &&
                <Modal color={'red'}>
                    <Exit size={25} onClick={() => setInputError('')} />
                    <h1>Preencha corretamente o campo {inputError} com dados validos</h1>
                </Modal>
            }
        </>
    );

};

export default Cadastro;
