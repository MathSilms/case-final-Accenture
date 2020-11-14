import React, { FormEvent, useCallback, useState } from 'react';

import { Container } from './styles';

import planeIcon from '../../assets/images/plane.svg';
import locationIcon from '../../assets/images/location-point.svg';
import calendarIcon from '../../assets/images/calendar.svg';

const TicketSearch: React.FC = () => {
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
    const [initialDate, setInitialDate] = useState('');
    const [finalDate, setFinalDate] = useState('');
    const [adultsQuantity, setAdultsQuantity] = useState(1);
    const [childrenQuantity, setChildrenQuantity] = useState(0);
    const [infantsQuantity, setInfantsQuantity] = useState(0);
    const [currencyCode, setCurrencyCode] = useState('');

    const handleSearch = useCallback((event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();


        console.log({
            origin,
            destination,
            initialDate,
            finalDate,
            adultsQuantity,
            childrenQuantity,
            infantsQuantity,
            currencyCode
        })
    }, [origin, destination, initialDate, finalDate, adultsQuantity, childrenQuantity, infantsQuantity, currencyCode]);

    return (
        <Container onSubmit={handleSearch}>
            <div className="input-row">
                <div className="input-container">
                    <div className="icon-container">
                        <img src={planeIcon} alt="Avião" />
                    </div>
                    <input
                        onChange={e => setOrigin(e.target.value)}
                        value={origin}
                        placeholder="Origem"
                    />
                </div>

                <div className="input-container">
                    <div className="icon-container">
                        <img src={locationIcon} alt="Localidade" />
                    </div>
                    <input
                        onChange={e => setDestination(e.target.value)}
                        value={destination}
                        placeholder="Destino"
                    />
                </div>

                <div className="input-container">
                    <div className="icon-container">
                        <img src={calendarIcon} alt="Calendário" />
                    </div>
                    <input
                        onChange={e => setInitialDate(e.target.value)}
                        value={initialDate}
                        placeholder="Ida"
                    />
                </div>

                <div className="input-container">
                    <div className="icon-container">
                        <img src={calendarIcon} alt="Calendário" />
                    </div>
                    <input
                        onChange={e => setFinalDate(e.target.value)}
                        value={finalDate}
                        placeholder="Volta"
                    />
                </div>

                <button type="submit">Buscar</button>
            </div>
            <div className="input-row advanced-options">
                <select name="adults" id="adults" value={adultsQuantity} onChange={(e) => setAdultsQuantity(Number(e.target.value))}>
                    <option value="1">1 adulto</option>
                    <option value="2">2 adultos</option>
                    <option value="3">3 adultos</option>
                    <option value="4">4 adultos</option>
                </select>
                <select name="children" id="children" value={childrenQuantity} onChange={(e) => setChildrenQuantity(Number(e.target.value))}>
                    <option value="0">Sem crianças</option>
                    <option value="1">1 criança</option>
                    <option value="2">2 crianças</option>
                    <option value="3">3 crianças</option>
                    <option value="4">4 crianças</option>
                </select>
                <select name="infants" id="infants" value={infantsQuantity} onChange={(e) => setInfantsQuantity(Number(e.target.value))}>
                    <option value="0">Sem bebês</option>
                    <option value="1">1 bebê</option>
                    <option value="2">2 bebês</option>
                    <option value="3">3 bebês</option>
                    <option value="4">4 bebês</option>
                </select>
                <select name="currency" id="currencyCode" value={currencyCode} onChange={(e) => setCurrencyCode(e.target.value)}>
                    <option value="BRL">BRL</option>
                    <option value="USD">USD</option>
                </select>

            </div>
        </Container>
    );
};

export default TicketSearch;
