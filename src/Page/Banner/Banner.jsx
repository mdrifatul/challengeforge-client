const Banner = () => {
  return (
    <div data-aos="zoom-in-up" className="hero min-h-[80vh] flex items-center px-4">
      <div className="hero-content flex-col lg:flex-row-reverse w-full max-w-7xl mx-auto py-8 lg:py-20">
        <div className="flex-1 flex justify-center w-full">
          <img
            src="./challenge_banner.jpg"
            loading="lazy"
            className="w-full max-w-xs sm:max-w-md object-contain rounded-3xl shadow-2xl transition-transform hover:scale-105 hover:shadow-3xl duration-700 ease-in-out"
            alt="Challenge Banner"
          />
        </div>
        <div className="flex-1 space-y-6 lg:space-y-8 w-full text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-[#0776a6] tracking-tight leading-tight">
            Rise to the Challenge
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed font-medium opacity-90 max-w-2xl mx-auto lg:mx-0">
            Come and unleash your potential with exciting contests and
            challenges! Join now and compete for amazing prizes and glory. Show
            your skills, push your limits, and forge your path to victory at
            ChallengeForge! Your journey to greatness begins here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
