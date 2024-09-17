import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Box,
  Input,
  Button,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";

type Props = {
    isOpen: boolean;
    onClose: () => void;
};

const ForgotPasswordModal = ({ isOpen, onClose }: Props) => {
    const [email, setEmail] = useState("");

    const saveEmail = (e: any) => { 
        setEmail(e.target.value);
    };

    const submitEmail = () => {
        console.log("EMAIL: ", email);
        axios
            .post("http://localhost:3025/auth/reset-password", {
                email,
            })
            .then((response) => {
                console.log(response.data);
            });
        onClose();
    };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader></ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box>
            <Text mb={4}>
              Enter the email address associated with your account
            </Text>
            <Input type={"text"} onChange={saveEmail} />
          </Box>
        </ModalBody>
        <Button onClick={submitEmail} mx={6} mt={2} mb={4}>
          Send Verification Email
        </Button>
      </ModalContent>
    </Modal>
  );
};

export default ForgotPasswordModal;
