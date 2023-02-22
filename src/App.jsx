import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <>
      <ChakraProvider>
        <NavBar />
        <ItemListContainer greeting={"Bienvenidos a mi tienda online!"} />
      </ChakraProvider>
    </>
  );
}

export default App;
