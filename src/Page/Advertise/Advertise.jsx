import winner1 from "./../../assets/winner1.jpg";
import winner2 from "./../../assets/winner2.jpg";
import winner3 from "./../../assets/winner3.jpg";

const Advertise = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/QDvrx0f/16738212-SL-012421-39970-08.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-0 md:flex">
          <div className="hero-content md:w-1/2 bg-no-repeat bg-center"
          style={{
            backgroundImage:
              "url(https://i.ibb.co/N10VXh3/Animation-1700858668343-1.gif)",
          }}
          >
            <h1 className="text-2xl md:text-5xl w-10/12 leading-2 text-gray-700"><span className="text-4xl md:text-7xl text-rose-500">B</span>e part of something bigger. Join our contest to not only compete but to connect, learn, and grow alongside fellow enthusiasts.</h1>
          </div>
          <div className="hero-content w-10/12 md:w-1/2 mx-auto flex-col gap-10 items-start">
            <div className="max-w-md flex ">
              <div>
                <img className="w-20 h-20 rounded-full" src={winner1} alt="" />
              </div>
              <div className="ml-10">
                <h1 className="text-2xl font-bold text-rose-500">
                  Emily Johnson
                </h1>
                <p className="my-1 text-base text-gray-700">
                  Tech Startup Innovation Challenge
                </p>
                <p className="text-red-500 font-bold">Win: $7000</p>
              </div>
            </div>
            <div className="max-w-md flex">
              <div>
                <img className="w-20 h-20 rounded-full" src={winner2} alt="" />
              </div>
              <div className="ml-10">
                <h1 className="text-2xl font-bold text-rose-500">
                  Emily Johnson
                </h1>
                <p className="my-1 text-base text-gray-700">
                  Tech Startup Innovation Challenge
                </p>
                <p className="text-red-500 font-bold">Win: $7000</p>
              </div>
            </div>
            <div className="max-w-md flex">
              <div>
                <img className="w-20 h-20 rounded-full" src={winner3} alt="" />
              </div>
              <div className="ml-10">
                <h1 className="text-2xl font-bold text-rose-500">
                  Emily Johnson
                </h1>
                <p className="my-1 text-base text-gray-700">
                  Tech Startup Innovation Challenge
                </p>
                <p className="text-red-500 font-bold">Win: $7000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertise;
