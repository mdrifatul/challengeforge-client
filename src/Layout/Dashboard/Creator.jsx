import { BiSolidCommentAdd } from "react-icons/bi";
import { GiAchievement } from "react-icons/gi";
import { MdOutlineLibraryAddCheck } from "react-icons/md";
import { NavLink } from "react-router-dom";

const navClass = ({ isActive }) =>
  `flex items-center gap-3 px-4 py-3 rounded-xl transition-colors font-semibold text-base ${
    isActive
      ? "bg-[#0776a6]/10 text-[#0776a6]"
      : "text-gray-600 hover:bg-gray-50 hover:text-[#0776a6]"
  }`;

const Creator = () => {
  return (
    <>
      <li>
        <NavLink to="/dashboard/addcontest" className={navClass}>
          <BiSolidCommentAdd className="text-xl" />
          Add Contest
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/mycontest" className={navClass}>
          <GiAchievement className="text-xl" />
          My Contest
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/submit" className={navClass}>
          <MdOutlineLibraryAddCheck className="text-xl" />
          Contest Submitted
        </NavLink>
      </li>
    </>
  );
};

export default Creator;