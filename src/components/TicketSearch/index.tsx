import React from 'react';

import { Container } from './styles';

import planeIcon from '../../assets/images/plane.svg';
import locationIcon from '../../assets/images/location-point.svg';
import calendarIcon from '../../assets/images/calendar.svg';

const TicketSearch: React.FC = () => {
    return (
        <Container>
            <div className="input-row">
                <div className="input-container">
                    <div className="icon-container">
                        <img src={planeIcon} alt="Avião" />
                    </div>
                    <input type="text" name="origin" placeholder="Origem" />
                </div>

                <div className="input-container">
                    <div className="icon-container">
                        <img src={locationIcon} alt="Localidade" />
                    </div>
                    <input type="text" name="destination" placeholder="Destino" />
                </div>

                <div className="input-container">
                    <div className="icon-container">
                        <img src={calendarIcon} alt="Calendário" />
                    </div>
                    <input type="text" name="initialDate" placeholder="Ida" />
                </div>

                <div className="input-container">
                    <div className="icon-container">
                        <img src={calendarIcon} alt="Calendário" />
                    </div>
                    <input type="text" name="finalDate" placeholder="Volta" />
                </div>

                <button type="button">Buscar</button>
            </div>
            <div className="input-row advanced-options">
                <select name="adults" id="adults">
                    <option value="1">1 adulto</option>
                    <option value="2">2 adultos</option>
                    <option value="3">3 adultos</option>
                    <option value="4">4 adultos</option>
                </select>
                <select name="children" id="children">
                    <option value="0">Sem crianças</option>
                    <option value="1">1 criança</option>
                    <option value="2">2 crianças</option>
                    <option value="3">3 crianças</option>
                    <option value="4">4 crianças</option>
                </select>
                <select name="infants" id="infants">
                    <option value="1">Sem bebês</option>
                    <option value="1">1 bebê</option>
                    <option value="2">2 bebês</option>
                    <option value="3">3 bebês</option>
                    <option value="4">4 bebês</option>
                </select>
                <select name="currency" id="currencyCode">
                    <option value="BRL">BRL</option>
                    <option value="USD">USD</option>
                </select>

            </div>
        </Container>
    );
};

export default TicketSearch;
