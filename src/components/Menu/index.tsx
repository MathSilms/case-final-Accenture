import React, { FormEvent, useState } from 'react';

import { LocationIcon, MailIcon, MenuPerson } from './styles';

import img from '../../assets/images/profiler.jpeg';

const Menu: React.FC = () => {

    const [open, setOpen] = useState(false)

    function handleEditUser(e:FormEvent<HTMLFormElement>){
        e.preventDefault();
    }

    return (
        <>
            <MenuPerson>
                <div className="profilePhoto">
                    <img src={img} alt="" />
                </div>
                <div className="profileInfo">
                    <h2 className="name">Matheus de Oliveira</h2>
                    <div className="">
                        <MailIcon size={25} />
                    mateheusoliver@gmail.com
                    </div>

                    <div className="">
                        <LocationIcon size={25} />
                        Cabo Frio - Rj
                    </div>
                    <br/>
                    <br/>
                    <button onClick={e => setOpen(!open)}>Editar Perfil</button>
                </div>
                { open && <div className="editContent">


                   <form  onSubmit={handleEditUser}>
                       <input placeholder="Novo email" value="" type="text" name="" id=""/>
                       <input placeholder="Novo nome de usuário" value="" type="text" name="" id=""/>
                       <input placeholder="Senha antiga" value="" type="text" name="" id=""/>
                       <input placeholder="Senha nova" value="" type="text" name="" id=""/>
                       <div className="">
                       <button className="save">salvar</button>
                       <button>cancelar</button>
                       </div>
                   </form>
               </div>}

            </MenuPerson>
        </>
    )
}
export default Menu;
