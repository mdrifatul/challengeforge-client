import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layout/Dashboard/Dashboard";
import Main from "../Layout/Main";
import AllUsers from "../Page/Dashboard/AllUsers/AllUsers";
import UserHome from "../Page/Dashboard/UserHome/UserHome";
import Details from "../Page/Details/Details";
import Error from "../Page/Error/Error";
import Home from "../Page/Home/Home";
import Login from "../Page/Login/Login";
import Signup from "../Page/Signup/Signup";
import AllContest from './../Page/AllContest/AllContest';

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:'/allcontest',
        element: <AllContest></AllContest>
      },
      {
        path:'/details/:id',
        element: <Details></Details>,
      },
      {
        path:'/signup',
        element: <Signup></Signup>
      },
      {
        path:'/login',
        element: <Login></Login>
      }
    ]
  },
  {
    path: '/dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: 'userhome',
        element: <UserHome></UserHome>
      },

      // Admin route
      {
        path: 'alluser',
        element: <AllUsers></AllUsers>
      }
    ]
  }
]);

export default Router;