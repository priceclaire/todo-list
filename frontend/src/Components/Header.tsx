import { Box, Heading, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import imagePaths from './imagePaths';

const pages = [
  {name: "Log In", path: "/log-in", showWhenLoggedIn: false}, 
  {name: "Create Account", path: "/sign-up", showWhenLoggedIn: false},
  {name: "Projects", path: "/projects", showWhenLoggedIn: true},
  {name: "Account Details", path: "/profile", showWhenLoggedIn: true}
]

type Props = {
  loggedIn: boolean
}

const Header = ({ loggedIn }: Props) => {
  return (
    <Box p={4} display="flex" alignItems="center">
      <Box display="flex" gap={4} alignItems="center"> 
        <Image 
          src={imagePaths.placeholderLogo} 
          alt="Placeholder" 
          width="50px"
        /> 
        <Heading fontSize={24}>Project Planning Tool</Heading>
      </Box>
      <Box display="flex" justifyContent="space-around" width="70%">
        {pages.map((page) => {
          if (
            (loggedIn && page.showWhenLoggedIn) ||
            (!loggedIn && !page.showWhenLoggedIn) 
          ) {
            return (
              <Link to={page.path} key={page.name}>
                <Box>{page.name}</Box>
              </Link>
            );} else {
              return null;
            }
        })}
      </Box>
    </Box>
  );
};

export default Header;