const HowItWorks = () => {
  const steps = [
    { num: "01", title: "Create Account", desc: "Sign up and set up your creative profile in minutes." },
    { num: "02", title: "Find Contest", desc: "Browse popular contests that match your skills." },
    { num: "03", title: "Submit Entry", desc: "Showcase your talent and submit your best work." },
    { num: "04", title: "Win Prizes", desc: "Get votes, impress judges, and take home the glory." }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 my-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800">
          How It <span className="text-[#0776a6]">Works</span>
        </h2>
        <p className="text-gray-500 mt-4 text-lg max-w-2xl mx-auto">
          Your journey to becoming a champion is simple. Follow these steps to get started.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all hover:-translate-y-1">
            <div className="w-16 h-16 rounded-full bg-[#0776a6] text-white flex items-center justify-center text-2xl font-bold mb-6">
              {step.num}
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">{step.title}</h3>
            <p className="text-gray-600 leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
