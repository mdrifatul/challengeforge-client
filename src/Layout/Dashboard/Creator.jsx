import { BiSolidCommentAdd } from "react-icons/bi";
import { GiAchievement } from "react-icons/gi";
import { MdOutlineLibraryAddCheck } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Creator = () => {
  return (
    <>
    <li>
    <NavLink to="/dashboard/userhome" className="text-lg text-white">
    <BiSolidCommentAdd></BiSolidCommentAdd>
      Add Contest</NavLink>
    </li>
    <li>
    <NavLink to="/dashboard/winncontent" className="text-lg text-white">
      <GiAchievement/>
      My Contest</NavLink>
    </li>
    <li>
    <NavLink to="/dashboard/profile" className="text-lg text-white">
      <MdOutlineLibraryAddCheck/>
      Contest Submitted</NavLink>
    </li>
    </>
  );
};

export default Creator;