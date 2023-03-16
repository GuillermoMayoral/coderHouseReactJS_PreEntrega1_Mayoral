import { useContext, useState } from "react";
import {
    Text,
    ButtonGroup,
    IconButton,
    Tooltip,
    Center,
    Button,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { CounterContext } from './context/StateComponent';





const ItemCount = ({ stock, id, price, name }) => {
    const [count, setCount] = useState(1);
    const { setCwCounter, cwCounter } = useContext(CounterContext)

    const aumento = () => {
        setCount(count + 1);
    };

    const disminuir = () => {
        setCount(count - 1);
    };

    const agregarCartW = () => {
        { cwCounter < stock ? (setCwCounter(cwCounter + count)) : (<IconButton isDisabled />) }
    };






    return (
        <>
            <ButtonGroup size="sm" isAttached variant="outline">
                {count <= 1 ? (
                    <Tooltip label="No puedes tener menos de un producto" placement="bottom">
                        <IconButton icon={<MinusIcon />} isDisabled />
                    </Tooltip>
                ) : (
                    <IconButton icon={<MinusIcon />} onClick={disminuir} />
                )}
                <Center>
                    <Button
                        onClick={() => agregarCartW()}
                        variant="solid"
                        colorScheme="green"
                    >
                        Agregar a carrito: {count}
                    </Button>
                </Center>
                {count < stock - cwCounter ? (
                    <IconButton icon={<AddIcon />} onClick={aumento} />
                ) : (
                    <Tooltip label="Has alcanzado el maximo Stock" placement="bottom">
                        <IconButton icon={<AddIcon />} isDisabled />
                    </Tooltip>
                )}
            </ButtonGroup>
            <h1>{cwCounter}</h1>
        </>
    );
};

export default ItemCount;
