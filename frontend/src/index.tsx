import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { redirect } from 'react-router-dom';
import SignUp from './Pages/Signup';
import LogIn from './Pages/Login';
import Projects from './Pages/Projects';
import Profile from './Pages/Profile';
import axios from 'axios';
import { createStandaloneToast } from '@chakra-ui/react';

const { ToastContainer, toast } = createStandaloneToast();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const response = await axios.get(
            "http://localhost:3025/auth/user-details", 
            { headers: { Authorization: `Bearer ${token}` } }
          );
          return response.data;
        } catch (error) {
          return {};
        }
      } else {
        return {};
      }
    },

    children: [
      {
        path: "sign-up",
        element: <SignUp />,
      },
      {
        path: "log-in",
        element: <LogIn />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "profile",
        element: <Profile />,
        loader: async () => {
          // get a token from local storage
          const token = localStorage.getItem("token");

          // if user has a token, use it as a bearer token on request for user data
          if (token) {
            try {
              const response = await axios.get(
                "http://localhost:3025/auth/user-details", 
                { headers: { Authorization: `Bearer ${token}` } }
              );
              return response.data;
            } catch (error) {
              // if you have an expired token, show an error toast and redirect the user to the login page
              toast({
                title: "An error occured",
                description: "You must be signed in to view this page!",
                status: "error",
                duration: 3000,
                isClosable: true,
              });
              return redirect("/log-in");
            }
          } else {
            toast({
              title: "An error occured",
              description: "You must have an account to view this page!",
              status: "error",
              duration: 3000,
              isClosable: true,
            });
            return redirect("/sign-up");
          }
            
            
          // if user does not have a token we will show in error toast and redirect the user to the sign-up page
          
          
          
        }
      },
    ],
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ToastContainer />
    <RouterProvider router={router} />
  </React.StrictMode>
);