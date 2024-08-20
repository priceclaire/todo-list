import React from 'react';
import './App.css';
import { Box, Button, ChakraProvider } from '@chakra-ui/react';
import axios from 'axios';

function App() {
  const onClick = async () => {
    const response = await axios.post('http://localhost:3025/name', {
      name: "Claire",
    });
    console.log("RESPONSE", response.data);
  };

  return (
    <ChakraProvider>
      <Button colorScheme='purple'onClick={onClick}>
        TEST CONNECTIONS
      </Button>
    </ChakraProvider>
  );
}

export default App;
