import useAuth from "../../Hooks/useAuth";
import Banner from "../Banner/Banner";
import Loading from "../Loading/Loading";
import Advertise from './../Advertise/Advertise';
import BestCreator from './../BestCreator/BestCreator';
import PopularContest from './../PopularContest/PopularContest';

const Home = () => {
  const {loading} = useAuth();
  return (
    loading? <Loading></Loading>:
    <div>
      <Banner></Banner>
      <PopularContest></PopularContest>
      <Advertise></Advertise>
      <BestCreator></BestCreator>
    </div>
  );
};

export default Home;