import React, { useState } from 'react';
import { Box, Button, ChakraProvider, Input } from '@chakra-ui/react';
import axios from 'axios';

function App() {
  const [name, setName] = useState("test name 3");

  const onChange = (event: any) => {
    setName(event.target.value);
  };

  const onClick = async () => {
    const response = await axios.post('http://localhost:3025/name', {
      name,
    });
    console.log("RESPONSE", response.data);
  };

  return (
    <ChakraProvider>
      <Box m={10} display="flex" gap={4}>
        <Input onChange={onChange} placeholder="Type in a name..." />
        <Button colorScheme='purple'onClick={onClick}>
          Add Name
        </Button>
      </Box>
    </ChakraProvider>
  );
}

export default App;
