import { useConst } from "@chakra-ui/react";
import React from "react";
import { CounterContext } from "./context/StateComponent";
import { useContext } from "react";

const CartWidget = () => {
    const { cwCounter } = useContext(CounterContext);


    return (
        <div>
            <button>{cwCounter} - </button>
            <span className="material-symbols-outlined">
                shopping_cart
            </span>
        </div>
    );
};

export default CartWidget;
