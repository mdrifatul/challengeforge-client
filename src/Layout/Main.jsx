import { Outlet } from "react-router-dom";
import Footer from "../Page/Shared/Footer";
import Navbar from './../Page/Shared/Navbar';

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;