import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const ResetPassword = () => {
  const { id, token } = useParams();

  const [password, setPassword] = useState("");
  const [secondPassword, setSecondPassword] = useState("");

  const [submitPassword, setSubmitPassword] = useState(false);
  const [submitSecondPassword, setSubmitSecondPassword] = useState(false);

  const isErrorPassword = password === "" && submitPassword;
  const isErrorSecondPassword =
    password !== secondPassword && submitSecondPassword;

  const onChangePassword = (e: any) => {
    setSubmitPassword(false);
    setSubmitSecondPassword(false);
    setPassword(e.target.value);
  };

  const onChangeSecondPassword = (e: any) => {
    setSubmitSecondPassword(false);
    setSecondPassword(e.target.value);
  };

  const onSubmit = () => {
    console.log("PASSWORD", password);
    console.log("SECOND PASSWORD", secondPassword);

    setSubmitPassword(true);
    setSubmitSecondPassword(true);

    // setPassword("");
    // setSecondPassword("");
  };

  return (
    <Box>
      <Text textAlign="center" mb={4} fontSize={20}>
        Reset Your Password
      </Text>
      <Box
        maxW="75%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        margin="0 auto"
        gap="4"
      >
        <FormControl isInvalid={isErrorPassword} isRequired>
          <FormLabel>Password</FormLabel>
          <Input type="password" value={password} onChange={onChangePassword} />
          {!isErrorPassword ? null : (
            <FormErrorMessage>Password is required</FormErrorMessage>
          )}
        </FormControl>

        <FormControl isInvalid={isErrorSecondPassword} isRequired>
          <FormLabel>Re-enter Password</FormLabel>
          <Input
            type="password"
            value={secondPassword}
            onChange={onChangeSecondPassword}
          />
          {!isErrorSecondPassword ? null : (
            <FormErrorMessage>Passwords must match</FormErrorMessage>
          )}
        </FormControl>

        <Button w="100%" onClick={onSubmit}>
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default ResetPassword;
