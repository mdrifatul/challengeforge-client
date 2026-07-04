const Stats = () => {
  return (
    <div className="w-full bg-[#0776a6] py-16 text-white my-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-12">Platform Impact</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center">
            <h3 className="text-4xl md:text-6xl font-black mb-2">50K+</h3>
            <p className="text-lg font-medium opacity-90 uppercase tracking-wider">Active Users</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-4xl md:text-6xl font-black mb-2">1,200</h3>
            <p className="text-lg font-medium opacity-90 uppercase tracking-wider">Contests Hosted</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-4xl md:text-6xl font-black mb-2">$5M+</h3>
            <p className="text-lg font-medium opacity-90 uppercase tracking-wider">Prizes Won</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-4xl md:text-6xl font-black mb-2">99%</h3>
            <p className="text-lg font-medium opacity-90 uppercase tracking-wider">Satisfaction</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
