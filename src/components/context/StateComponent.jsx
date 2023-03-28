import React from 'react';
import { createContext, useState } from 'react';

export const CounterContext = createContext();

const StateComponent = ({ children }) => {

    const [cwCounter, setCwCounter] = useState(0);

    const [carro, setCarro] = useState();


    const actualizarCarro = () => {
        setCarro(carro + cwCounter)
    }

    const [prod, setProd] = useState([]);

    return (
        <CounterContext.Provider value={{ prod, setProd, setCwCounter, cwCounter, carro, actualizarCarro }}>{children}</CounterContext.Provider>
    )
}

export default StateComponent