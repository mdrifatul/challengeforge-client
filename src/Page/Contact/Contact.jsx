import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";

const Contact = () => {
  return (
      <div className="grid lg:grid-cols-2 w-11/12 mx-auto gap-y-10 my-28  ">
      <div data-aos="fade-up" className="flex flex-col mt-5 md:mx-10 gap-5">
        <div className="flex flex-col gap-3">
        <h1 className="text-2xl md:text-4xl font-bold text-[#0776a6]">Contact</h1>
        <h1  className="text-3xl md:text-4xl font-bold text-[#0776a6] ">GET IN TOUCH</h1>
        </div>
        <h1 className="text-lg">
          We would love to hear from you. Leave us a message using the form.Our
          team of experts welcome the chance to answer your questions
        </h1>
        <h1 className="text-lg font-bold">FOLLOW US ON SOCIAL MEDIA</h1>
        <div className="flex gap-3">
            <a><BsFacebook className='w-8 h-8 text-[#0d8ff3]'/></a> 
            <a><BsInstagram className='w-8 h-8  text-[#c13584]'/></a> 
            <a><BsYoutube className='w-8 h-8  text-[#E63933]'/></a> 
            <a><BsTwitter className='w-8 h-8  text-[#18A4FC]'/></a>
          </div>
      </div>
      <div data-aos="fade-up" className="flex flex-col justify-center items-center bg-[#0776a6] pt-10 py-7 md:mx-10 rounded-md shadow-2xl shadow-gray-500"> 
      <input
          type="text"
          placeholder="Enter your name"
          className="input input-bordered w-full md:max-w-sm max-w-xs h-10"
        />
        <input
          type="text"
          placeholder="Enter your email"
          className="input input-bordered w-full md:max-w-sm max-w-xs  h-10 my-5"
        />
        <textarea
          placeholder="Hi there.."
          className="textarea textarea-bordered textarea-md w-full md:max-w-sm max-w-xs"
        ></textarea>
        <button className="btn btn-md mt-5 uppercase font-bold text-[#0776a6]">Submit</button>
      </div>
    </div>    
  );
};

export default Contact;
