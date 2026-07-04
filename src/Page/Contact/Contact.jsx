import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="w-full bg-gray-50 py-20">
      <div className="grid lg:grid-cols-2 max-w-7xl mx-auto px-4 gap-12">
        <div data-aos="fade-up" className="flex flex-col justify-center space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-[#0776a6] tracking-wider uppercase">Contact</h3>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mt-2">Get In Touch</h1>
          </div>
          <p className="text-lg text-gray-600 leading-relaxed max-w-md">
            We would love to hear from you. Leave us a message using the form. Our team of experts welcomes the chance to answer your questions.
          </p>
          <div className="pt-6 border-t border-gray-200">
            <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="p-3 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow text-[#0d8ff3]"><BsFacebook className="w-6 h-6"/></a> 
              <a href="#" className="p-3 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow text-[#c13584]"><BsInstagram className="w-6 h-6"/></a> 
              <a href="#" className="p-3 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow text-[#E63933]"><BsYoutube className="w-6 h-6"/></a> 
              <a href="#" className="p-3 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow text-[#18A4FC]"><BsTwitter className="w-6 h-6"/></a>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100"> 
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Send a Message</h3>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full bg-gray-50 focus:bg-white focus:border-[#0776a6] transition-colors"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full bg-gray-50 focus:bg-white focus:border-[#0776a6] transition-colors"
            />
            <textarea
              placeholder="How can we help you?"
              className="textarea textarea-bordered w-full h-32 bg-gray-50 focus:bg-white focus:border-[#0776a6] transition-colors resize-none"
            ></textarea>
            <button className="btn w-full bg-[#0776a6] hover:bg-[#055b82] text-white border-none mt-2">Submit Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
