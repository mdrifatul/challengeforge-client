import { Link } from 'react-router-dom';
import error from "../../assets/404.png";
const Error = () => {
  return (
    <div className="">
      <img className="w-[500px] h-[450px] mx-auto" src={error} alt="" />
    <div className="text-center -mt-16">
    <Link to='/'>
    <button
        className="btn btn-md bg-[#0776a6] text-white"
      >
        Back to Home
      </button>
      </Link>
    </div>
    </div>
  );
};

export default Error;
