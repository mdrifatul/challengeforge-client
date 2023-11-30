import { FaUserCog } from 'react-icons/fa';
import { MdManageSearch } from 'react-icons/md';
import { NavLink } from "react-router-dom";

const Adminlayout = () => {
  return (
    <>
    <li>
    <NavLink to="/dashboard/alluser" className="text-lg text-white">
    <FaUserCog />
      Manage User</NavLink>
    </li>
    <li>
    <NavLink to="/dashboard/managecontent" className="text-lg text-white">
      <MdManageSearch/>
      Manage Contest</NavLink>
    </li>
    </>
  );
};

export default Adminlayout;