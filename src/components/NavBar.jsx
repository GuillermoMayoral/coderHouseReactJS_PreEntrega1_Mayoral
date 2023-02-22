import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <>
            <div>
                <h1>Top Running</h1>
                <div>
                    <ul>
                        <li>
                            <button>inicio</button>
                        </li>
                        <li>
                            <button>productos</button>
                        </li>
                    </ul>
                </div>
                <CartWidget />
            </div>
        </>
    );
};

export default NavBar;
