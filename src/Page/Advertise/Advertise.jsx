import winner1 from "./../../assets/winner1.webp";
import winner2 from "./../../assets/winner2.webp";
import winner3 from "./../../assets/winner3.webp";

const Advertise = () => {
  return (
    <div data-aos="zoom-in-up" className="my-16">
      <div className="w-full bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 md:flex items-center gap-12">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 leading-tight">
              Be part of <span className="text-[#0776a6]">something bigger.</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Join our contest to not only compete but to connect, learn, and grow alongside fellow enthusiasts. Start your journey today!
            </p>
          </div>
          <div className="md:w-1/2 flex-col gap-6 items-start mt-12 md:mt-0 space-y-6">
            {[winner1, winner2, winner3].map((winner, index) => (
              <div key={index} className="flex items-center bg-white p-4 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <img className="w-16 h-16 rounded-full object-cover border-2 border-[#0776a6]" src={winner} alt="Winner" />
                <div className="ml-6">
                  <h1 className="text-xl font-bold text-gray-800">Emily Johnson</h1>
                  <p className="text-sm text-gray-500 my-1">Tech Startup Innovation Challenge</p>
                  <p className="text-[#0776a6] font-semibold text-sm">Prize: $7000</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertise;
