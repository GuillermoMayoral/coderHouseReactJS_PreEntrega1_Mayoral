import React from 'react'
import { Container, Flex } from "@chakra-ui/react";
import Item from './Item'

const Itemlist = ({ producto }) => {



    return (
        <>
            <Container maxW="container.lg">
                <Flex gap={"5"} wrap="wrap">
                    {producto.map((producto) => (
                        <Item
                            key={producto.id}
                            id={producto.id}
                            name={producto.name}
                            price={producto.price}
                            stock={producto.stock}
                            description={producto.description}
                            category={producto.category}
                            img={producto.img}
                        />
                    ))}
                </Flex>
            </Container>
        </>
    )
}

export default Itemlist