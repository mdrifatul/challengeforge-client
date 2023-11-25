import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
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
      // {
      //   path:'/contest/:tags',
      //   element: <AllContest></AllContest>,
      // },
      {
        path:'/signup',
        element: <Signup></Signup>
      },
      {
        path:'/login',
        element: <Login></Login>
      }
    ]
  }
]);

export default Router;