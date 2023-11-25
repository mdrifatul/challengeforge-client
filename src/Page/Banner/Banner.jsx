
const Banner = () => {
  return (
    <div  className="bg-cover bg-bottom md:bg-center bg-[url('https://i.ibb.co/hW5484t/34378701-v915-wit-011-l.jpg')]">
      <div className="h-80 md:h-[410px] flex flex-col justify-center">
        <div className="w-10/12 mx-auto flex justify-center">
        <h2 className="text-4xl text-[#0776a6] md:text-6xl font-semibold mb-5 w-96 text-center">Contest Time!</h2>
        </div>
        <div>
        <div className="w-10/12 md:w-6/12 join mt-12 flex justify-center mx-auto ">
          <input className="input input-bordered join-item w-full " placeholder="Find Your Contest"/>
          <button className="btn join-item bg-[#0776a6] text-white">Search</button>
        </div>
        </div>
      </div>
      </div>
  );
};

export default Banner;