import { useQuery } from "@tanstack/react-query";
import useaxiosPublic from "../../Hooks/useaxiosPublic";
import Loading from "../Loading/Loading";
import Contest from "./Contest";

const PopularContest = ({tags}) => {
  const axiosPublic = useaxiosPublic();
  const { data: contest = [], isPending: loading } = useQuery({
    queryKey: ["contest",tags],
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/contest?sortField=attempted&sortOrder=desc&tags=${tags}`
      );
      return res.data;
    },
  });
  return (
    <div>
      {/* <SectionTitle heading={"popular contest"}></SectionTitle> */}
      {loading ? <Loading></Loading>:<div className="grid lg:grid-cols-2 gap-6 w-10/12 md:w-11/12 mx-auto my-20">
        {contest.slice(0, 6).map((item) => <Contest key={item?._id} item={item}></Contest>)}
      </div>}
    </div>
  );
};

export default PopularContest;
