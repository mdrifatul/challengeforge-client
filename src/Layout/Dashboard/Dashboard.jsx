import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { IoArrowBackOutline } from "react-icons/io5";
import { NavLink, Outlet } from "react-router-dom";
import useRole from "../../Hooks/useRole";
import Adminlayout from "./Adminlayout";
import Creator from "./Creator";
import Userdash from "./userdash";

const Dashboard = () => {
  const [openNav, setOpenNav] = useState(false);
  const [role] = useRole();
  const roles = role?.role;

  
  return (
    <>
      <div className="flex w-full">
        <div className="min-h-screen hidden xl:w-3/12 lg:w-4/12 lg:flex bg-[#0776a6] p-5 flex-col">
        <ul className="menu">
          {roles ==='User' && <Userdash/>}
          {roles  === 'Creator' && <Creator/>}
          {roles === 'Admin' && <Adminlayout/>}
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
        <div
          className={`
        fixed top-0 left-0 h-full z-50 transform transition-transform duration-300 
        ${openNav ? "translate-x-0" : "-translate-x-full"}
        w-3/4 max-w-xs bg-[#0776a6] 
      `}
        >
          <div className="text-right p-2 lg:hidden">
            <button
              onClick={() => setOpenNav(false)}
              className="p-2 text-white"
            >
              <FaX className="inline text-lg" />
            </button>
          </div>
          <ul className="menu">
          <ul className="menu">
          {roles ==='User' && <Userdash></Userdash>}
          {roles  === 'Creator' && <Creator></Creator>}
          {roles === 'Admin' && <Adminlayout></Adminlayout>}
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
          </ul>
        </div>

        {!openNav && (
          <button
            onClick={() => setOpenNav(true)}
            className="fixed top-4 left-4 z-40 bg-[#0776a6] text-white p-2 rounded-lg lg:hidden"
          >
            <FaBars className="text-lg" />
          </button>
        )}

        {openNav && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setOpenNav(false)}
          />
        )}

        <div
          className={`
        w-full transition-all duration-300 
        ${openNav ? "ml-0 lg:ml-[calc(25%)]" : "ml-0"}
        p-4
      `}
        >
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
