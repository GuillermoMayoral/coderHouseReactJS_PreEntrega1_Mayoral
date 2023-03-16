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




const ItemDetail = ({ Data }) => {
    const { id } = useParams();
    const filter = Data.filter((datos) => datos.id == id);


    return (
        <>
            {filter.map((datos) => (
                <div key={datos.id}>
                    <Center>
                        <Card maxW="sm">
                            <CardBody>
                                <Image src={datos.img} />
                                <Stack mt="6" spacing="3">
                                    <Heading size="md">{datos.name}</Heading>
                                    <Text>{datos.description}</Text>
                                    <Text color="blue.600" fontSize="2xl">
                                        {"$" + datos.price + ".00"}
                                    </Text>
                                </Stack>
                            </CardBody>
                            <Divider />
                            <CardFooter>
                                <Center className="card-footer">
                                    <ItemCount
                                        stock={datos.stock}
                                        id={datos.id}
                                        price={datos.price}
                                        name={datos.name}
                                    />
                                </Center>
                            </CardFooter>
                        </Card>
                    </Center>
                </div>
            ))}
        </>
    )
}

export default ItemDetail