import React, { useState } from 'react';
import { Box, Button, ChakraProvider, Input } from '@chakra-ui/react';
import axios from 'axios';

function App() {
  const [firstName, setFirstName] = useState("Claire");
  const [lastName, setLastName] = useState("Price");

  const onChangeFirstName = (event: any) => {
    setFirstName(event.target.value);
  };

  const onChangeLastName = (event: any) => {
    setLastName(event.target.value);
  };

  const onClick = async () => {
    const response = await axios.post('http://localhost:3025/name', {
      firstName,
      lastName,
    });
    console.log("RESPONSE", response);
  };

  return (
    <ChakraProvider>
      <Box m={10} display="flex" gap={4}>
        <Input onChange={onChangeFirstName} placeholder="Type in a first name..." />
        <Input onChange={onChangeLastName} placeholder="Type in a last name..." />
        <Button colorScheme='purple'onClick={onClick}>
          Add
        </Button>
      </Box>
    </ChakraProvider>
  );
}

export default App;
