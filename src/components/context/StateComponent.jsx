import React from 'react';
import { createContext, useState } from 'react';

export const CounterContext = createContext();

const StateComponent = ({ children }) => {

    const [cwCounter, setCwCounter] = useState(0);

    const [carro, setCarro] = useState();


    const actualizarCarro = () => {
        setCarro(carro + cwCounter)
    }



    return (
        <CounterContext.Provider value={{ setCwCounter, cwCounter, carro, actualizarCarro }}>{children}</CounterContext.Provider>
    )
}

export default StateComponent