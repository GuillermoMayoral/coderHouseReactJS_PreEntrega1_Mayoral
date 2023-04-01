import React from 'react'
import {
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
    Flex,
} from "@chakra-ui/react";
import ItemCount from './ItemCount'
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import Loading from './Loading';




const ItemDetail = () => {

    const [producto, setProducto] = useState([]);
    const [load, setLoad] = useState(true);



    useEffect(() => {
        const db = getFirestore();

        const itemId = doc(db, "calzado", `${id}`)
        getDoc(itemId).then((snapshot) => {
            if (snapshot.exists()) {
                const docs = snapshot.data();
                console.log(docs);
                setProducto(docs);
                setLoad(false);
            }
        })


    }, [])

    console.log(producto);


    const { id } = useParams();

    if (load) {
        return <Loading />
    }

    return (
        <>
            <div key={producto.id}>
                <Center>
                    <Card maxW="sm">
                        <CardBody>
                            <Image src={producto.img} />
                            <Stack mt="6" spacing="3">
                                <Heading size="md">{producto.name}</Heading>
                                <Text>{producto.description}</Text>
                                <Text color="blue.600" fontSize="2xl">
                                    {"$" + producto.price + ".00"}
                                </Text>
                            </Stack>
                        </CardBody>
                        <Divider />
                        <CardFooter>
                            <Center className="card-footer">
                                <ItemCount
                                    stock={producto.stock}
                                    id={producto.id}
                                    price={producto.price}
                                    name={producto.name}
                                    img={producto.img}
                                />
                            </Center>
                        </CardFooter>
                    </Card>
                </Center>
            </div>
        </>
    )
}

export default ItemDetail