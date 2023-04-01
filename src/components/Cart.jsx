import React from 'react'
import SendOrder from './SendOrder'
import { useContext } from 'react';
import { CounterContext } from './context/StateComponent';
import {
    Container,
    Card,
    CardBody,
    CardFooter,
    Heading,
    Divider,
    Button,
    Center,
    Flex
} from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import FormCart from './FormCart';

const Cart = () => {
    const { total, setTotal, prod, setProd, setCwCounter, empty, setEmpty } = useContext(CounterContext);

    const borrarCarro = () => {
        setProd([]);
        setCwCounter(0);
        setTotal(0);
        setEmpty(true)
    };

    if (empty) {
        return (

            <Container maxW="container.lg">
                <Flex gap={"5"} wrap="wrap">
                    <Card>
                        <CardBody>
                            <Heading as='h1' size='4xl' noOfLines={1}>
                                Upss... carrito vacio D,:
                            </Heading>
                        </CardBody>
                        <Divider />
                        <CardFooter>
                            <Center className="btn-center">
                                <Link to="/items">
                                    <Button variant="solid" colorScheme="green" onClick={() => borrarCarro()}>
                                        Ir a catalogo...
                                    </Button>
                                </Link>
                            </Center>
                        </CardFooter>
                    </Card>
                </Flex>
            </Container>
        )
    }

    return (
        <>
            <Container maxW="container.lg">
                <Flex gap={"5"} wrap="wrap">
                    <Card>
                        <CardBody>
                            {prod.map((prod) => (
                                <SendOrder
                                    key={prod.id}
                                    id={prod.id}
                                    img={prod.img}
                                    name={prod.marca}
                                    price={prod.precio}
                                    stock={prod.cantidad}
                                />
                            ))}
                        </CardBody>
                        <Divider />
                        <CardFooter>
                            <Center className="btn-center">
                                <Button variant="solid" colorScheme="red" onClick={() => borrarCarro()}>
                                    ELIMINAR
                                </Button>
                                <Heading size="md">Total ${total}.00</Heading>
                            </Center>
                        </CardFooter>
                        <FormCart />
                    </Card>
                </Flex>
            </Container>
        </>
    )
}

export default Cart