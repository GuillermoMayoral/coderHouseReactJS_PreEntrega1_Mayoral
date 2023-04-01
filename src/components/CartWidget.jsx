
import React from "react";
import { CounterContext } from "./context/StateComponent";
import { useContext } from "react";
import { Link } from "react-router-dom"

const CartWidget = () => {
    const { cwCounter } = useContext(CounterContext);

    return (
        <div>
            <button>{cwCounter} - </button>
            <Link to={'/cart'}><span className="material-symbols-outlined">
                shopping_cart
            </span></Link>
        </div>
    );
};

export default CartWidget;
