import React from 'react';

import { MenuPerson } from './styles';

import img from '../../assets/images/profiler.jpeg';

const Menu: React.FC = () => {
  return (
      <>
        <MenuPerson>
            <div className="profilePhoto">
                <img src={img} alt=""/>
            </div>
            <div className="profileInfo">
               <h2 className="name">Matheus de Oliveira</h2>
            </div>
        </MenuPerson>
      </>
  )
  }
export default Menu;
