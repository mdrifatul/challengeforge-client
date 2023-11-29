import { BsFillPersonVcardFill } from "react-icons/bs";
import { GiTrophyCup } from "react-icons/gi";
import { IoMdPerson } from "react-icons/io";
import { NavLink } from "react-router-dom";

const Userdash = () => {
  return (
    <><li>
    <NavLink to="/dashboard/participate" className="text-lg text-white">
    <BsFillPersonVcardFill />
      Participated Contest</NavLink>
    </li>
    <li>
    <NavLink to="/dashboard/wincontest" className="text-lg text-white">
    <GiTrophyCup />
      Winning Contest</NavLink>
    </li>
    <li>
    <NavLink to="/dashboard/profile" className="text-lg text-white">
    <IoMdPerson />
      My Profile</NavLink>
    </li>
    </>
  );
};

export default Userdash;

