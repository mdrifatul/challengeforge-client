import Banner from "../Banner/Banner";
import HowItWorks from '../HowItWorks/HowItWorks';
import Loading from "../Loading/Loading";
import Stats from '../Stats/Stats';
import useAuth from './../../Hooks/useAuth';
import Advertise from './../Advertise/Advertise';
import BestCreator from './../BestCreator/BestCreator';
import Contact from './../Contact/Contact';
import Faq from './../Faq/Faq';
import PopularContest from './../PopularContest/PopularContest';

const Home = () => {
  const {loading} = useAuth();
  return (
    loading? <Loading></Loading>:
    <div className="flex flex-col gap-16 md:gap-24 mb-24 overflow-hidden">
      <Banner></Banner>
      <PopularContest></PopularContest>
      <HowItWorks></HowItWorks>
      <Advertise></Advertise>
      <BestCreator></BestCreator>
      <Stats></Stats>
      <Faq></Faq>
      <Contact></Contact>
    </div>
  );
};

export default Home;