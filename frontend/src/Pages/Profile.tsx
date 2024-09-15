import React from "react";
import { Avatar, Box, Button, IconButton, Text, useToast } from "@chakra-ui/react";
import { useLoaderData, useNavigate, useOutletContext } from "react-router-dom";
import { Context } from "../App";
import UserDetailsRow from "../Components/Profile/UserDetailsRow";

type Data = {
    email: string;
    name: string;
    username: string;
};

const Profile = () => {
    const data = useLoaderData() as Data;
    const navigate = useNavigate();
    const toast = useToast();
    const context = useOutletContext() as Context;

    const logOut = () => {
        localStorage.removeItem("token");
        context.toggleLoggedIn();
        navigate("/log-in");
        toast({
            title: "Success",
            description: "You have been logged out of your acount",
            status: "success",
            duration: 3000,
            isClosable: true,
        });
    };

    return (
        <Box display="flex" flexDirection="column">
            <Text textAlign="center" mb={4} fontSize={20}>
                Account Details
            </Text>
            <Text textAlign="center">
                Welcome, {data.name}! You can manage your account details here.
            </Text>
            <Box display="flex" w="60%" gap={10} alignSelf="center" py={20}>
                <Box display="flex" alignItems="center">
                    <Avatar 
                        size="2xl" 
                        name={data.name}
                        src="" />
                </Box>
                <Box w="100%" display="flex" flexDirection="column" gap={3}>
                    <UserDetailsRow field="Name" value={data.name} username={data.username}/>
                    <UserDetailsRow field="Email" value={data.email} username={data.username} />
                    <UserDetailsRow field="Username" value={data.username} username={data.username} />
                    <UserDetailsRow field="Password" value="********" username={data.username} />
                </Box>
            </Box>
            <Box display="flex" gap={4} justifyContent="center">
                <Button onClick={logOut} w={160}>Log out</Button>
                <Button onClick={() => {}} w={160}>Delete Account</Button>
            </Box>
            
        </Box>
    );
};

export default Profile;