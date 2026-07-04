import { useQuery } from "@tanstack/react-query";
import { BsCalendarDateFill, BsCashCoin, BsPeopleFill, BsTrophyFill } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import useaxiosPublic from "../../Hooks/useaxiosPublic";
import Loading from "../Loading/Loading";

const Details = () => {
  const { id } = useParams();
  const axiosPublic = useaxiosPublic();

  const { data: details = [], isPending: panding } = useQuery({
    queryKey: ["details", id],
    queryFn: async () => {
      const res = await axiosPublic.get(`/contest/${id}`);
      return res.data;
    },
  });

  const {
    _id,
    name,
    image,
    attempted,
    description,
    contestprice,
    deadline,
    prizemoney,
  } = details;

  return (
    <>
      {panding ? (
        <Loading></Loading>
      ) : (
        <div className="w-full bg-gray-50 pb-20">
          <div className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
            >
              <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
            </div>
            
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto text-white">
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 drop-shadow-lg">
                {name}
              </h1>
              <p className="text-lg md:text-2xl font-medium opacity-90 drop-shadow-md">
                {description}
              </p>
            </div>
          </div>

          <div className="relative z-20 max-w-5xl mx-auto px-4 -mt-20">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                  <BsTrophyFill className="w-10 h-10 text-[#0776a6] mb-4" />
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Prize Money</p>
                  <p className="text-2xl font-black text-gray-800 mt-2">${prizemoney}</p>
                </div>
                
                <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                  <BsCashCoin className="w-10 h-10 text-[#0776a6] mb-4" />
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Entry Fee</p>
                  <p className="text-2xl font-black text-gray-800 mt-2">${contestprice}</p>
                </div>

                <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                  <BsPeopleFill className="w-10 h-10 text-[#0776a6] mb-4" />
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Participants</p>
                  <p className="text-2xl font-black text-gray-800 mt-2">{attempted}</p>
                </div>

                <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                  <BsCalendarDateFill className="w-10 h-10 text-[#0776a6] mb-4" />
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Deadline</p>
                  <p className="text-2xl font-black text-gray-800 mt-2">{deadline}</p>
                </div>
              </div>

              <div className="flex flex-col items-center border-t border-gray-200 pt-10">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Ready to showcase your talent?</h3>
                <Link to={`/payment/${_id}`} className="w-full sm:w-auto">
                  <button className="w-full sm:w-44 py-3 bg-[#0776a6] hover:bg-[#055b82] text-white text-md font-bold rounded-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
                    Register Now
                  </button>
                </Link>
              </div>
              
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Details;
