const Banner = () => {
  return (
    <div data-aos="zoom-in-up" className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse w-11/12 justify-around ">
        <img
          src="./champion-life.webp"
          loading="lazy"
          className="max-w-sm rounded-lg w-5/6 md:w-full animate-updown"
        />
        <div className="md:w-5/6 lg:w-3/6">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0776a6]">
            Rise to the Challenge
          </h1>
          <p className="py-6 text-gray-600">
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
