import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { IoArrowBackOutline } from "react-icons/io5";
import { NavLink, Outlet } from "react-router-dom";
import useRole from "../../Hooks/useRole";
import Adminlayout from "./Adminlayout";
import Creator from "./Creator";
import Userdash from "./userdash";

const SIDEBAR_WIDTH = 280;

const Dashboard = () => {
  const [openNav, setOpenNav] = useState(false);
  const [role] = useRole();
  const roles = role?.role;

  const SidebarContent = () => (
    <>
      <div className="mb-8 px-4">
        <h2 className="text-2xl font-extrabold text-[#0776a6]">ChallengeForge</h2>
        <p className="text-sm text-gray-500 font-medium">Dashboard</p>
      </div>
      <ul className="menu flex-1 space-y-2">
        {roles === 'User' && <Userdash />}
        {roles === 'Creator' && <Creator />}
        {roles === 'Admin' && <Adminlayout />}
      </ul>
      <div className="mt-auto border-t border-gray-100 pt-4">
        <ul className="menu space-y-2">
          <li>
            <NavLink
              to="/"
              className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:text-[#0776a6] hover:bg-gray-50 rounded-xl transition-colors font-semibold"
            >
              <IoArrowBackOutline className="text-xl" />
              Back Home
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );

  return (
    <>
      <div className="flex bg-gray-50 min-h-screen">
        <div
          style={{ width: SIDEBAR_WIDTH, minWidth: SIDEBAR_WIDTH, flexShrink: 0 }}
          className="hidden lg:flex flex-col sticky top-0 h-screen bg-white border-r border-gray-100 p-6 shadow-sm overflow-y-auto"
        >
          <SidebarContent />
        </div>

        <div
          style={{ width: SIDEBAR_WIDTH, minWidth: SIDEBAR_WIDTH }}
          className={`
            fixed top-0 left-0 h-full z-50 flex flex-col p-6
            transform transition-transform duration-300 ease-in-out
            bg-white border-r border-gray-100 shadow-2xl
            ${openNav ? "translate-x-0" : "-translate-x-full"}
            lg:hidden
          `}
        >
          <div className="flex justify-between items-center mb-8 px-4">
            <h2 className="text-xl font-extrabold text-[#0776a6]">ChallengeForge</h2>
            <button
              onClick={() => setOpenNav(false)}
              className="p-2 text-gray-400 hover:text-gray-800 transition-colors bg-gray-50 rounded-lg"
            >
              <FaX className="text-lg" />
            </button>
          </div>
          <SidebarContent />
        </div>

        {!openNav && (
          <button
            onClick={() => setOpenNav(true)}
            className="fixed top-4 left-4 z-40 bg-white text-[#0776a6] p-3 rounded-xl shadow-md border border-gray-100 lg:hidden hover:shadow-lg transition-shadow"
          >
            <FaBars className="text-lg" />
          </button>
        )}

        {openNav && (
          <div
            className="fixed inset-0 bg-gray-800/20 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setOpenNav(false)}
          />
        )}

        <div className="flex-1 min-w-0 p-4 md:p-8 lg:p-12 overflow-x-hidden">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
