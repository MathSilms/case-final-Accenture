import React, { FormEvent, useCallback, useState } from 'react';

import { Container } from './styles';
import { Exit, Modal } from '../../pages/cadastro/styles';


import planeIcon from '../../assets/images/plane.svg';
import locationIcon from '../../assets/images/location-point.svg';
import calendarIcon from '../../assets/images/calendar.svg';

import data from '../../assets/data/airports.json';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

interface AirportCodes {
    code: string;
    name: string;
    type: string;
}

interface TicketSearchProps {
    redirectPath?: string;
}

const TicketSearch: React.FC<TicketSearchProps> = ({ redirectPath }) => {
    const history = useHistory();

    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
    const [initialDate, setInitialDate] = useState('');
    const [finalDate, setFinalDate] = useState('');
    const [adultsQuantity, setAdultsQuantity] = useState(1);
    const [childrenQuantity, setChildrenQuantity] = useState(0);
    const [infantsQuantity, setInfantsQuantity] = useState(0);
    const [currencyCode, setCurrencyCode] = useState('BRL');
    const [error, setError] = useState(false);

    useEffect(() => {
        setOrigin('');
        setDestination('');
        setInitialDate('');
        setFinalDate('');
    }, [error]);


    const handleSearch = useCallback((event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!origin || !destination || !initialDate || !finalDate ) {
            setError(true);
            return;
        }

        let originIndex = data.findIndex((airport: AirportCodes) => (
            airport.code === origin.toUpperCase() ||
            airport.name.toUpperCase().includes(origin.toUpperCase())
        ));

        let destinationIndex = data.findIndex((airport: AirportCodes) => (
            airport.code === destination.toUpperCase() ||
            airport.name.toUpperCase().includes(destination.toUpperCase())
        ));

        const searchData = {
            adults: adultsQuantity,
            children: childrenQuantity,
            currencyCode,
            departureDate: initialDate,
            destinationCode: destinationIndex !== -1 ? data[destinationIndex].code : setError(true),
            infants: infantsQuantity,
            max: 5,
            originCode: originIndex !== -1 ? data[originIndex].code : setError(true),
            returnDate: finalDate,
        };

        localStorage.setItem('centaurus@search', JSON.stringify(searchData));

        redirectPath && history.push(redirectPath);

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
                        placeholder="Ida (yyyy-mm-dd)"
                    />
                </div>

                <div className="input-container">
                    <div className="icon-container">
                        <img src={calendarIcon} alt="Calendário" />
                    </div>
                    <input
                        onChange={e => setFinalDate(e.target.value)}
                        value={finalDate}
                        placeholder="Volta (yyyy-mm-dd)"
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

            {error && (
                <Modal color="red">
                    <Exit size={25} onClick={() => setError(false)} />
                    <h1>Digite todos os campos de busca</h1>
                </Modal>
            )}
        </Container>
    );
};

export default TicketSearch;
