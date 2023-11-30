import useSubmit from "../../../Hooks/useSubmit";

const WinContest = () => {
  const [submited] = useSubmit();
  const winner = submited.filter((item) => item?.result === "winner");
  console.log(winner);
  return (
    <div className=" w-4/5 mx-auto">
      <div
        className="hero mt-10"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/QDvrx0f/16738212-SL-012421-39970-08.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-0"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <label className="swap swap-active text-6xl">
              <div className="swap-on">🥳</div>
            </label>
            <h1 className="mb-5 text-4xl font-bold text-rose-600 italic">
              Congratulations
            </h1>
            <p className="mb-5 text-sky-500 font-bold text-lg">
              You have win {winner.length} contest
            </p>
            <p></p>
          </div>
          <div></div>
        </div>
      </div>
      <div>
        <div className="overflow-x-auto my-10">
          <table className="table">
            <thead>
              <tr>
                {/* <th></th> */}
                {/* <th>Name</th>
                <th>Job</th> */}
              </tr>
            </thead>
            <tbody>
              {winner.map((item,index) =>
              <tr key={item?._id}>
              <th>{index+1}</th>
              <th className="text-lg text-gray-600">{item?.contestName}</th>
              <th  className="text-lg text-rose-500">$ {item?.prizemoney}</th>
            </tr>)}
            </tbody>
          </table>
        </div>
        
      </div>
    </div>
  );
};

export default WinContest;
