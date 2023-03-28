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

const SendOrder = ({ id, name, price, stock, img }) => {
    const totalUnidad = price * stock;

    return (
        <div>
            <div key={id}>
                <Flex>
                    <Card maxW="sm">
                        <CardBody>
                            <Image src={img} />
                            <Stack mt="6" spacing="3">
                                <Heading size="md">x{stock}-{name}</Heading>
                                <Text></Text>
                                <Text color="green.600" fontSize="2xl">
                                    {"$" + totalUnidad + ".00"}
                                </Text>
                            </Stack>
                        </CardBody>
                        <Divider />
                    </Card>
                </Flex>
            </div>
            <div></div>
        </div>
    )
}

export default SendOrder