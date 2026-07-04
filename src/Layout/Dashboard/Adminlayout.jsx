import { FaUserCog } from 'react-icons/fa';
import { MdManageSearch } from 'react-icons/md';
import { NavLink } from "react-router-dom";

const navClass = ({ isActive }) =>
  `flex items-center gap-3 px-4 py-3 rounded-xl transition-colors font-semibold text-base ${
    isActive
      ? "bg-[#0776a6]/10 text-[#0776a6]"
      : "text-gray-600 hover:bg-gray-50 hover:text-[#0776a6]"
  }`;

const Adminlayout = () => {
  return (
    <>
      <li>
        <NavLink to="/dashboard/alluser" className={navClass}>
          <FaUserCog className="text-xl" />
          Manage User
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/managecontent" className={navClass}>
          <MdManageSearch className="text-xl" />
          Manage Contest
        </NavLink>
      </li>
    </>
  );
};

export default Adminlayout;