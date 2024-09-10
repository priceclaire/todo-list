import { Box, Heading, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const pages = [
  {name: "Log In", path: "/log-in"},
  {name: "Create Account", path: "/sign-up"},
  {name: "Projects", path: "/projects"},
  {name: "Account Details", path: "/profile"}
]

const Header = () => {
  return (
    <Box p={4} display="flex" alignItems="center">
      <Box display="flex" gap={4} alignItems="center"> 
        <Image 
          boxSize="70px"
          borderRadius="50%"
          src="../assets/card-sun.png"
          alt="Sun" 
        />
        <Heading fontSize={24}>Project Planning Tool</Heading>
      </Box>
      <Box display="flex" justifyContent="space-around" width="70%">
        {pages.map((page) => {
          return (
            <Link to={page.path}>
              <Box>{page.name}</Box>
            </Link>
          );
        })}
      </Box>
    </Box>
  );
};

export default Header;