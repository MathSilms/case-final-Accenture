import React from 'react';
import { Link } from 'react-router-dom';
import { Bar, Content, Box,FacebookIcon, InstagranIcon, LinkedinIcon } from './styles'

const Footer: React.FC = () => {
    return (
        <Bar>
            <Content >
                <Box>
                    <h4>
                        Navegação
                    </h4>
                    <Link to=''>Perfil</Link>
                    <Link to=''>Favoritos</Link>
                    <Link to=''>Viagens</Link>
                    <Link to=''>Passagens</Link>
                </Box>
                <Box>
                    <h4>
                        Atendimento 24h
                    </h4>
                    <Link to=''>Dúvidas Frequentes</Link>
                    <Link to=''>Remarcar/Cancelar</Link>
                    <Link to=''>Fale conosco</Link>
                </Box>
                <Box>
                    <h4>
                        Formas de pagamento
                    </h4>
                    <Link to=''>Cartões de crédito</Link>
                    <Link to=''>Transferência em conta</Link>
                </Box>
            </Content>
            <div className='teste2'>
                <a href="#"><FacebookIcon size={50}/></a>
                <a href="#"><InstagranIcon size={50}/></a>
                <a href="#"><LinkedinIcon size={50}/></a>
            </div>

        </Bar>
    )
}

export default Footer
