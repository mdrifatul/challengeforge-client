const Faq = () => {
  return (
    <div data-aos="fade-up" className="w-9/12 mx-auto mb-10">
        <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold text-[#0776a6] text-center" >Frequently
        Asked Questions</h1>
      <div className="mt-16 mb-10">
        <div className="collapse bg-[#0776a6]">
          <input type="checkbox" />
          <div className="collapse-title md:text-2xl text-xl font-bold text-white">
          How do I participate in a contest?
          </div>
          <div className="collapse-content md:text-lg text-base text-white">
            <p>To participate in a contest, first create an account or log in if you already have one. Browse the available contests and select the one youre interested in. Follow the instructions provided to submit your entry and join the competition.</p>
          </div>
        </div>
        <div className="collapse bg-[#0776a6] my-5">
          <input type="checkbox" />
          <div className="collapse-title md:text-2xl text-xl font-bold text-white">
          Are there any entry fees for participating in contests?
          </div>
          <div className="collapse-content md:text-lg text-base text-white">
            <p>Entry fees vary depending on the contest. Some contests are free to enter, while others may require a small fee. The entry fee, if applicable, will be clearly listed on the contest page.</p>
          </div>
        </div>
        <div className="collapse bg-[#0776a6] mb-5">
          <input type="checkbox" />
          <div className="collapse-title md:text-2xl text-xl font-bold text-white">
          How are winners selected and notified?
          </div>
          <div className="collapse-content md:text-lg text-base text-white">
            <p>Winners are selected based on the criteria specified for each contest, which may include judging by a panel, public voting, or a combination of both. Winners will be notified via email and their names will be announced on the contest page.</p>
          </div>
        </div>
        <div className="collapse bg-[#0776a6]">
          <input type="checkbox" />
          <div className="collapse-title md:text-2xl text-xl font-bold text-white">
          What kind of prizes can I win?
          </div>
          <div className="collapse-content md:text-lg text-base text-white">
            <p>Prizes vary depending on the contest and may include cash rewards, gift cards, merchandise, or other exciting items. Specific prize details are provided on each contest page.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
