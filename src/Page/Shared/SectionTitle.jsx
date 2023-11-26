
const SectionTitle = ({heading}) => {
  return (
    <div className="mx-auto text-center md:w-6/12 my-8">
      <h1 className="text-4xl uppercase border-b-4 text-[#02597e] py-4 font-semibold italic">{heading}</h1>
    </div>
  );
};

export default SectionTitle;