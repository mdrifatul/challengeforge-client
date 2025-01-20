import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import logo from "../../assets/icon.webp";
import userPicture from '../../assets/user.webp';

const activeLink = "text-[#0787be] px-2 font-bold border-b-2 border-[#0787be]";
const normalLink = "text-gray-800";

const navLink = (
  <>
    <span className="flex justify-center items-center p-2 text-lg">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? activeLink : normalLink)}
      >
        Home
      </NavLink>
    </span>
    <span className="flex justify-center items-center p-2 text-lg mx-2">
      <NavLink
        to="/allcontest"
        className={({ isActive }) => (isActive ? activeLink : normalLink)}
      >
        All Contest
      </NavLink>
    </span>
  </>
);

const Navbar = () => {
  const { user, logOut } = useAuth();
  const handlelogOut = () => {
    logOut().then().catch();
  };

  return (
    <div data-aos="fade-down" className="navbar w-11/12 mx-auto justify-between">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLink}
            {!user &&<Link
              to="/login"
              className="px-4 py-2 hover:bg-base-300 rounded-lg"
            >                           
            <button
              className="btn btn-sm w-full bg-[#0776a6] text-white"
            >
              login
            </button>
            </Link>}
            </ul>
        </div>
        <Link to='/'>
        <button className="w-60 h-5 ">
          <img src={logo} alt="" />
        </button>
        </Link>
      </div>
      <div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
        {navLink}
        {!user &&<Link
            to="/login"
            className="px-4 py-2 hover:bg-base-300 rounded-lg"
          >                           
          <button
            className="btn btn-sm w-full bg-[#0776a6] text-white"
          >
            login
          </button>
          </Link>}
        </ul>
      </div>
      <div className="">
        {user && (
          <>
            
            <div className="dropdown dropdown-end flex">
              <label tabIndex={0} className="mr-2">
              <div className="w-8 rounded-full mx-auto md:mx-2 ">
                <img className="rounded-full" src={user.photoURL || userPicture} />
              </div>
            </label>
            <div
                tabIndex={0}
                className="mt-10 dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 "
              >
                <p className="px-1 py-2 hover:bg-base-300 rounded-lg">{user.email}</p>
                <NavLink
                  to="/dashboard"
                  className="px-1 py-2 hover:bg-base-300 rounded-lg"
                >
                  Dashboard
                </NavLink>
                
                <NavLink
                  to="/"
                  className="px-1 py-2 hover:bg-base-300 rounded-lg"
                >
                                        
                <button
                  className="btn btn-sm w-full bg-[#0776a6] text-white hover:"
                  onClick={handlelogOut}
                >
                  logout
                </button>
                </NavLink>
              </div>
              </div>
          </>
        )}
      </div>
      </div>
    </div>
  );
};

export default Navbar;
