import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import { ChakraProvider } from '@chakra-ui/react'
import "bootswatch/dist/Minty/bootstrap.min.css";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ShoopingCartContext from "./components/ShoopingCartContext";
import Cart from "./components/Cart";
import Welcome from "./components/Welcome";
import { BrowserRouter, Routes, Route, } from "react-router-dom"

function App() {
  return (
    <>

      <BrowserRouter>
        <ChakraProvider>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Welcome />} />
            <Route exact path="/items" element={<ItemListContainer />} />
            <Route
              exact
              path="/category/:category"
              element={<ItemListContainer />}
            />
            <Route exact path="/item/:id" element={<ItemDetailContainer />} />
            <Route exact path="/shooping" element={<ShoopingCartContext />} />
            <Route exact path="/cart" element={<Cart />} />
          </Routes>
        </ChakraProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
