import { IoArrowBackOutline } from "react-icons/io5";
import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Adminlayout from './Adminlayout';

const Dashboard = () => {
  const {user} = useAuth();
  return (
    <div className="grid grid-cols-12 ">
      <div className="col-span-3 min-h-screen bg-[#0776a6] p-5 flex flex-col justify-between">
        <ul className="menu">
          {/* <Userdash></Userdash> */}
          {/* <Creator></Creator> */}
          <Adminlayout></Adminlayout> 
        </ul>

        <div >      
          <ul className="menu">
            <li>
              <NavLink to="/" className="text-lg text-white">
              <IoArrowBackOutline />Back Home
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-span-9 px-5  ">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
