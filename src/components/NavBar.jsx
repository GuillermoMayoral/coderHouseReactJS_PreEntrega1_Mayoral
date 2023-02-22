import React from "react";
import CartWidget from "./CartWidget";
import { Flex, Spacer, Box, Heading } from '@chakra-ui/react'


const NavBar = () => {
    return (
        <>
            <div>


                <Flex>
                    <Box p='4' bg='aliceblue'>
                        <Heading>Top Running</Heading>
                    </Box>
                    <Spacer bg='aliceblue' />
                    <Box p='6' bg='aliceblue'>
                        <button>Inicio</button>
                        <button>Productos</button>
                    </Box>
                    <Spacer bg='aliceblue' />
                    <Box p='4' bg='aliceblue'>
                        <CartWidget />
                    </Box>
                </Flex>
            </div>
        </>
    );
};

export default NavBar;
