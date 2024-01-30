import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layout/Dashboard/Dashboard";
import Main from "../Layout/Main";
import AddContest from "../Page/Dashboard/AddContest/AddContest";
import AllUsers from "../Page/Dashboard/AllUsers/AllUsers";
import ManageContent from "../Page/Dashboard/ManageContent/ManageContent";
import MyContest from "../Page/Dashboard/MyContest/MyContest";
import Participate from "../Page/Dashboard/Participate/Participate";
import ParticipateContest from "../Page/Dashboard/ParticipateContest/ParticipateContest";
import Payment from "../Page/Dashboard/Payment/Payment";
import Profile from "../Page/Dashboard/Profile/Profile";
import Submit from "../Page/Dashboard/Submit/Submit";
import Update from "../Page/Dashboard/Update/Update";
import UpdateProfile from "../Page/Dashboard/UpdateProfile/UpdateProfile";
import WinContest from "../Page/Dashboard/WinContest/WinContest";
import Details from "../Page/Details/Details";
import Error from "../Page/Error/Error";
import Home from "../Page/Home/Home";
import Login from "../Page/Login/Login";
import Signup from "../Page/Signup/Signup";
import AllContest from './../Page/AllContest/AllContest';
import PrivateRoute from './PrivateRoute';

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
        element: <PrivateRoute><Details></Details></PrivateRoute>,
      },
      {
        path:'/signup',
        element: <Signup></Signup>
      },
      {
        path:'/login',
        element: <Login></Login>
      },
      {
        path:'/payment/:id',
        element: <Payment></Payment>
      },
    ]
   },
  {
    path: '/dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      // user route
      {
        path: 'participate',
        element: <Participate></Participate>
      },
      {
        path: 'profile',
        element:<Profile></Profile>
      },
      {
        path: 'updateprofile',
        element: <UpdateProfile></UpdateProfile>
      },
      {
        path: 'wincontest',
        element: <WinContest></WinContest>
      },

      
      // Creator route
      {
        path:'addcontest',
        element: <AddContest></AddContest>
      },
      {
        path:'mycontest',
        element: <MyContest></MyContest>
      },
      {
        path:'submit',
        element: <Submit></Submit>
      },
      {
        path:'update/:id',
        element: <Update></Update>
      },
      {
        path:'participatecontest/:id',
        element: <ParticipateContest></ParticipateContest>
      },
     

      // Admin route
      {
        path: 'alluser',
        element: <AllUsers></AllUsers>
      },
      {
        path: 'managecontent',
        element: <PrivateRoute><ManageContent></ManageContent></PrivateRoute>
      }
    ]
  }
]);

export default Router;