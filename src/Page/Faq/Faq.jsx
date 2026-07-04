const Faq = () => {
  return (
    <div data-aos="fade-up" className="w-full max-w-4xl mx-auto px-4 my-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
          Frequently <span className="text-[#0776a6]">Asked Questions</span>
        </h1>
        <p className="text-gray-500 mt-4 text-lg">Got questions? We've got answers to help you get started.</p>
      </div>
      <div className="space-y-4">
        {[
          {
            q: "How do I participate in a contest?",
            a: "To participate in a contest, first create an account or log in if you already have one. Browse the available contests and select the one you're interested in. Follow the instructions provided to submit your entry and join the competition."
          },
          {
            q: "Are there any entry fees for participating in contests?",
            a: "Entry fees vary depending on the contest. Some contests are free to enter, while others may require a small fee. The entry fee, if applicable, will be clearly listed on the contest page."
          },
          {
            q: "How are winners selected and notified?",
            a: "Winners are selected based on the criteria specified for each contest, which may include judging by a panel, public voting, or a combination of both. Winners will be notified via email and their names will be announced on the contest page."
          },
          {
            q: "What kind of prizes can I win?",
            a: "Prizes vary depending on the contest and may include cash rewards, gift cards, merchandise, or other exciting items. Specific prize details are provided on each contest page."
          }
        ].map((faq, index) => (
          <div key={index} className="collapse collapse-arrow bg-white border border-gray-200 rounded-xl">
            <input type="radio" name="faq-accordion" defaultChecked={index === 0} />
            <div className="collapse-title text-xl font-bold text-gray-800">
              {faq.q}
            </div>
            <div className="collapse-content text-gray-600 text-base leading-relaxed">
              <p>{faq.a}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
