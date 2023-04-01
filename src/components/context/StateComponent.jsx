import React from 'react';
import { createContext, useState } from 'react';

export const CounterContext = createContext();

const StateComponent = ({ children }) => {

    const [cwCounter, setCwCounter] = useState(0);

    const [carro, setCarro] = useState();

    const [empty, setEmpty] = useState(true);



    const actualizarCarro = () => {
        setCarro(carro + cwCounter)
    }

    const [prod, setProd] = useState([]);

    const [total, setTotal] = useState(0);

    return (
        <CounterContext.Provider value={{ empty, setEmpty, total, setTotal, prod, setProd, setCwCounter, cwCounter, carro, actualizarCarro }}>{children}</CounterContext.Provider>
    )
}

export default StateComponent