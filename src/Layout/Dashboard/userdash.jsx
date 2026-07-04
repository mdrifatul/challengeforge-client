import { BsFillPersonVcardFill } from "react-icons/bs";
import { GiTrophyCup } from "react-icons/gi";
import { IoMdPerson } from "react-icons/io";
import { NavLink } from "react-router-dom";

const navClass = ({ isActive }) =>
  `flex items-center gap-3 px-4 py-3 rounded-xl transition-colors font-semibold text-base ${
    isActive
      ? "bg-[#0776a6]/10 text-[#0776a6]"
      : "text-gray-600 hover:bg-gray-50 hover:text-[#0776a6]"
  }`;

const Userdash = () => {
  return (
    <>
      <li>
        <NavLink to="/dashboard/participate" className={navClass}>
          <BsFillPersonVcardFill className="text-xl" />
          Participated Contest
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/wincontest" className={navClass}>
          <GiTrophyCup className="text-xl" />
          Winning Contest
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/profile" className={navClass}>
          <IoMdPerson className="text-xl" />
          My Profile
        </NavLink>
      </li>
    </>
  );
};

export default Userdash;

