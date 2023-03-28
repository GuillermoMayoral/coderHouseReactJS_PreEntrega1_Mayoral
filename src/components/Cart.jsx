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
    Image,
    Stack,
    Text,
    Divider,
    Button,
    Center,
    Flex
} from "@chakra-ui/react";

const Cart = () => {
    const { prod, setProd, setCwCounter } = useContext(CounterContext);

    const borrarCarro = () => {
        setProd([]);
        setCwCounter(0);
    };

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
                            </Center>
                        </CardFooter>
                    </Card>
                </Flex>
            </Container>
        </>
    )
}

export default Cart