import { Box, Button, Heading, Input, Text } from '@chakra-ui/react';

const SignUp = () => {
  return (
    <Box>
        <Heading textAlign="center" mb={4}>Create an Account</Heading>
        <Box maxW="75%" display="flex" flexDirection="column" alignItems="center" margin="0 auto" gap="4">
            <Box display="flex" flexDirection="column" gap="2" w="100%">
                <Text>Name: </Text>
                <Input />
            </Box>
            <Box display="flex" flexDirection="column" gap="2" w="100%">
                <Text>Email Address: </Text>
                <Input />
            </Box>
            <Box display="flex" flexDirection="column" gap="2" w="100%">
                <Text>Username: </Text>
                <Input />
            </Box>
            <Box display="flex" flexDirection="column" gap="2" w="100%">
                <Text>Password: </Text>
                <Input />
            </Box>
            <Button w="100%">Submit</Button>
        </Box>
    </Box>
  );
};

export default SignUp;