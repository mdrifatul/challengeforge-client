import { IoArrowBackOutline } from "react-icons/io5";
import { NavLink, Outlet } from "react-router-dom";
import useRole from "../../Hooks/useRole";
import Adminlayout from './Adminlayout';
import Creator from './Creator';
import Userdash from './userdash';

const Dashboard = () => {
  const [role] = useRole();
  const roles = role?.role
  return (
    <>
    <div className="grid grid-cols-12">
      <div className="col-span-3 min-h-screen bg-[#0776a6] p-5 flex flex-col">
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
      </div>
      <div className="col-span-9 px-5  ">        
        <Outlet></Outlet>
      </div>
    </div>
    </>
  );
};

export default Dashboard;
