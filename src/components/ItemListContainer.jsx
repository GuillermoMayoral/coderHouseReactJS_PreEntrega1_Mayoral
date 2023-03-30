import React from 'react';
import { useParams } from "react-router-dom";
import ItemList from './ItemList';
import { Heading, Center } from "@chakra-ui/react";
import { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore } from "firebase/firestore"


const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const db = getFirestore();

        const itemsCollection = collection(db, "calzado");
        getDocs(itemsCollection).then((snapshot) => {
            const docs = snapshot.docs.map((doc) => doc.data());
            setProductos(docs)
        })
    }, [])


    console.log(productos);


    const { category } = useParams();

    const categoryFilter = productos.filter((producto) => producto.category === category);
    console.log(categoryFilter);

    return (
        <div>
            <Center h="100px" color="black">
                <Heading as="h2" size="2xl">
                    {!category ? <h2>Catálogo</h2> : <h2>{`${category}`}</h2>}
                </Heading>
            </Center>
            {category ? <ItemList producto={categoryFilter} /> : <ItemList producto={productos} />}
        </div>
    )
}

export default ItemListContainer