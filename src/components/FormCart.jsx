import React from 'react'
import {
    FormControl,
    FormLabel,
    Heading,
    Input,
    Button
} from '@chakra-ui/react'
import { collection, addDoc, getFirestore } from "firebase/firestore"
import { useState } from "react"

function FormCart() {
    const [orderId, setOrderId] = useState(null);
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");

    const db = getFirestore();

    const compraCarro = (e) => {
        e.preventDefault();
        addDoc(orderCollection, order).then(({ id }) => setOrderId(id));
    }

    const order = {
        nombre,
        email
    }

    const orderCollection = collection(db, "order");


    return (
        <>
            <Heading as='h1' size='4xl' noOfLines={1}>
                Datos de compra:
            </Heading>
            <form onSubmit={compraCarro}>
                <FormControl isRequired>
                    <FormLabel>Nombre</FormLabel>
                    <Input placeholder='Nombre' type="text" onChange={(e) => setNombre(e.target.value)} />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>E-mail</FormLabel>
                    <Input placeholder='E-mail' type="email" onChange={(e) => setEmail(e.target.value)} />
                </FormControl>
                <Button variant="solid" colorScheme="blue" type="submit">
                    Comprar
                </Button>
            </form>
            <p>No. de compra: {orderId}</p>
        </>
    )
}

export default FormCart