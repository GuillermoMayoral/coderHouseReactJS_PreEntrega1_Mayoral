import React from 'react';
import { useParams } from "react-router-dom";
import ItemList from './ItemList';
import Data from "../data.json";
import { Heading, Center } from "@chakra-ui/react";


const ItemListContainer = () => {
    const { category } = useParams();

    const catFilter = Data.filter((producto) => producto.category === category);
    console.log(catFilter);

    return (
        <div>
            <Center h="100px" color="black">
                <Heading as="h2" size="2xl">
                    {!category ? <h2>Catálogo</h2> : <h2>{`${category}`}</h2>}
                </Heading>
            </Center>
            {category ? <ItemList producto={catFilter} /> : <ItemList producto={Data} />}
        </div>
    )
}

export default ItemListContainer