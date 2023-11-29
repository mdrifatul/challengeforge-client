import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Loading from "../Loading/Loading";
import useContest from "./../../Hooks/useContest";
import ContestTabs from "./ContestTabs";

const AllContest = () => {
  // const categories = ["business", "medical", "article", "gaming"];
  const [contest, loading] = useContest();
  const business = contest.filter((item) => item.tags === "business");
  const medical = contest.filter((item) => item.tags === "medical");
  const article = contest.filter((item) => item.tags === "article");
  const gaming = contest.filter((item) => item.tags === "gaming");
  return (
    <div>
      <div className="w-11/12 mx-auto my-20">
        <Tabs defaultIndex={0}>
          <TabList role="tablist" className="flex md:gap-8 capitalize tabs tabs-boxed w-fit mx-auto p-2 ">
            <Tab role="tab" className='tab text-xl text-[#0776a6]'>business</Tab>
            <Tab role="tab" className='tab text-xl text-[#0776a6]'>medical</Tab>
            <Tab role="tab" className='tab text-xl text-[#0776a6]'>article</Tab>
            <Tab role="tab" className='tab text-xl text-[#0776a6]'>gaming</Tab> 
          </TabList>

          {
            loading? <Loading></Loading> :
            <>
            <TabPanel>
            <ContestTabs loading={loading} key={business._id} item={business}></ContestTabs>
          </TabPanel>
          <TabPanel>
            <ContestTabs loading={loading} key={medical._id} item={medical}></ContestTabs>
          </TabPanel>
          <TabPanel>
            <ContestTabs loading={loading} key={medical._id} item={article}></ContestTabs>
          </TabPanel>
          <TabPanel>
            <ContestTabs loading={loading} key={medical._id} item={gaming}></ContestTabs>
          </TabPanel>
          </>
          }
        </Tabs>
      </div>
    </div>
  );
};

export default AllContest;
