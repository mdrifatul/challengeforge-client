import { Outlet } from "react-router-dom";
import Footer from "../Page/Shared/Footer";
import Navbar from './../Page/Shared/Navbar';

const Main = () => {
  const noFooter = location.pathname.includes('/login') || location.pathname.includes('/signup');
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      {noFooter || <Footer></Footer>}
    </div>
  );
};

export default Main;