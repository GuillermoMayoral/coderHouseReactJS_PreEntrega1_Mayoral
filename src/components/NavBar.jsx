import React from "react";
import CartWidget from "./CartWidget";
import { Heading } from '@chakra-ui/react'
import { Link } from "react-router-dom"


const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <Link to="/">
                        <Heading>Top-Running</Heading>
                    </Link><a className="navbar-brand" href="#">
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <a className="nav-link active" href="#">
                                    <Link to="/">
                                        <button>Inicio</button>
                                    </Link>
                                    <span className="visually-hidden">(current)</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <Link to="/items">
                                        <button>Productos</button>
                                    </Link></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <Link to={`/category/${"nike"}`}>
                                        <button>Nike</button>
                                    </Link></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <Link to={`/category/${"adidas"}`}>
                                        <button>Adidas</button>
                                    </Link></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <Link to={`/category/${"sketchers"}`}>
                                        <button>Sketchers</button>
                                    </Link></a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <button className="btn btn-secondary my-2 my-sm-0" type="submit">
                                <Link to="/cart">
                                    <CartWidget />
                                </Link></button>
                        </form>
                    </div>
                </div>
            </nav>



        </>
    );
};

export default NavBar;
