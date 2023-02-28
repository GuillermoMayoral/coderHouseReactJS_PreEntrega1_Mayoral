import React from 'react'
import { useState } from 'react';

const ItemCount = ({ stock }) => {
    const [contador, setContador] = useState(1);
    const stockMenor = () => {
        if (contador <= 1) {
            setContador(1);
        } else {
            setContador(contador - 1);
        }
    };

    const stockMayor = () => {
        if (contador >= stock) {
            setContador(stock);
        } else {
            setContador(contador + 1)
        }
    };

    return (
        <>
            <h1>{contador} de {stock} productos</h1>
            <button onClick={stockMenor}>-</button>
            <button onClick={stockMayor}>+</button>
            <button onClick={() => setContador(1)}>Clear</button>
        </>
    );
}

export default ItemCount