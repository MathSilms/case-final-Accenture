import React from 'react';
import ReactDOM from 'react-dom';
import Footer from '../../components/footer';
import Header from '../../components/header';
import {Form,BoxPerfil,BoxPaginas} from './styles';
import IconLocation from '../../assets/images/IconLocation.jpeg';
import IconEmail from '../../assets/images/IconEmail.jpeg';
import ImagenUsuario from '../../assets/images/ImagenUsuario.jpeg';
import IconUser from '../../assets/images/IconUser.jpeg';
import IconSeg from '../../assets/images/IconSeg.jpeg';



const Dashboard:React.FC = () =>{  
  

return (
    <>
    
       <Header></Header>
          <Form>                        
             <BoxPerfil>
               <img src={ImagenUsuario}/>
               <br/><span>Usuário Teste</span>
               <br/>
               <ul>
                 <li className="email"><img className="icon" src={IconEmail}/>
                 email.co@hotmail.com</li>
                 <li><img className="icon" src={IconLocation}/>Recife, PE</li>
               </ul><br/>
               <button type="button">Editar Perfil</button><br/><br/>
               <div className="AlterarPerfil" >
                 <ul>
                   <li>
                   <img className="icon" src={IconEmail}/>
                   <input placeholder="Novo Email"></input>
                   </li>
                   <li>
                   <img className="icon" src={IconUser}/>
                   <input placeholder="Novo Usuário"></input>
                   </li>
                   <li>
                   <img className="icon" src={IconSeg}/>
                 <input placeholder="Senha Antiga"></input>
                   </li>
                   <li>
                   <img className="icon" src={IconSeg}/>
                 <input placeholder="Nova Senha"></input>
                   </li>
                 </ul>
                 <button type="button" className="save">Salvar</button>
                 <button type="submit" >Cancelar</button>
                 
               </div>
             </BoxPerfil>
              <BoxPaginas>                                
                <div className="tabs">
                    <a className="ativo" href="#ReservaEfetuada" >Reserva Efetuada</a>
                    <a className="desativo" href="#PassagensCompradas">Passagens Compradas</a>
                    <a className="desativo" href="#PassagensFavoritadas">Passagens Favoritadas</a>
                  </div>
                <div className="content" id="ReservaEfetuada">
                  conteudo1                
                </div>
                <div  className="content" id="PassagensCompradas">
                  conteudo2               
                </div><div className="content" id="PassagensFavoritadas">
                  conteudo3                
                </div> 
                
              </BoxPaginas>
          </Form>
       <Footer></Footer> 
    </>
    )

};

export default Dashboard;
