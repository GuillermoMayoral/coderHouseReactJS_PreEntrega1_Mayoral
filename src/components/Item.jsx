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
    Flex
} from "@chakra-ui/react";
import { Link } from "react-router-dom"

const Item = ({ id, name, price, description, img }) => {
    return (
        <div>
            <div key={id}>
                <Flex>
                    <Card maxW="sm">
                        <CardBody>
                            <Image src={img} />
                            <Stack mt="6" spacing="3">
                                <Heading size="md">{name}</Heading>
                                <Text>{description}</Text>
                                <Text color="green.600" fontSize="2xl">
                                    {"$" + price + ".00"}
                                </Text>
                            </Stack>
                        </CardBody>
                        <Divider />
                        <CardFooter>
                            <Center className="btn-center">
                                <Button variant="solid" colorScheme="green">
                                    <Link to={`/item/${id}`}>Detalles</Link>
                                </Button>
                            </Center>
                        </CardFooter>
                    </Card>
                </Flex>
            </div>
        </div>
    )
}

export default Item