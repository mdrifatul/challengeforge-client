
import { BsFacebook, BsTwitter, BsYoutube } from 'react-icons/bs';
import logo from '../../assets/icon.png';


const Footer = () => {
  return (
    // <div data-aos="fade-up">
    <div data-aos="fade-up">
    <footer className="footer p-10 text-neutral-content md:flex justify-around md:px-20 lg:px-36 border-t border-[#8dc2d9] ">
        <nav>
          <div className="flex items-center">
            <img  className="w-fit h-10"  src={logo} alt="" />
          </div>
          <div className="grid grid-flow-col gap-4 md:mt-10">
            <a><BsFacebook className='w-8 h-8 text-[#0d8ff3]'/></a> 
            <a><BsYoutube className='w-8 h-8  text-[#FF0000]'/></a> 
            <a><BsTwitter className='w-8 h-8  text-[#18A4FC]'/></a>
          </div>
          <p className="py-6 text-gray-600 md:w-72 lg:w-80">Contests offer engaging platforms where individuals showcase their skills, creativity, or expertise in diverse fields such as business innovation, medical research, writing, or gaming.</p>
          
        </nav>
        <nav>
          <p className=" text-3xl text-[#0776a6] ">123-456-78901</p>
          <a className=" text-gray-700 text-base ">challenge@forge.com</a>
          <a className=" text-gray-700 text-base">West 12th Street</a>
          <a className=" text-gray-700 text-base">New York, USA</a>
        </nav>
      </footer>
        <p className="my-4 text-gray-600 text-center">
          Copyright © 2023 Crave | Powered by Crave.
        </p>
      </div>
  );
};

export default Footer;