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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
              // if you have an expired token, we will show an error toast and redirect the user to the login page
              console.log("ERROR", error);
              return redirect("/log-in");
            }
          } else {
            console.log("NO TOKEN");
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
    <RouterProvider router={router} />
  </React.StrictMode>
);