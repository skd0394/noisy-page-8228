import logo from './logo.svg';
import './App.css';
import Nav from './components/navbar';
import { ChakraProvider } from '@chakra-ui/react'
import Slider from './components/slider'
import RestBody from './components/rest_body';


function App() {
  return (
    <>
      <ChakraProvider>
        <Nav />
      </ChakraProvider>
      <br />
      <ChakraProvider>
        <RestBody />
      </ChakraProvider>
    </>
  );
}

export default App;
