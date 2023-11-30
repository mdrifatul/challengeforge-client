import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useContest from "./../../Hooks/useContest";
import ContestTabs from "./ContestTabs";

const AllContest = () => {
  // const categories = ["business", "medical", "article", "gaming"];
  const [contest, loading] = useContest();
  const acceptedContest = contest.filter((item) => item.status === "accepted")
  const business = acceptedContest.filter((item) => item.tags === "business");
  const medical = acceptedContest.filter((item) => item.tags === "medical");
  const article = acceptedContest.filter((item) => item.tags === "article");
  const gaming = acceptedContest.filter((item) => item.tags === "gaming");
  return (
    <div>
      <div className="w-11/12 mx-auto my-20">
        <Tabs defaultIndex={0}>
          <TabList
            role="tablist"
            className="flex md:gap-8 capitalize tabs tabs-boxed w-fit mx-auto p-2 "
          >
            <Tab role="tab" className="tab text-xl text-[#0776a6]">
              business
            </Tab>
            <Tab role="tab" className="tab text-xl text-[#0776a6]">
              medical
            </Tab>
            <Tab role="tab" className="tab text-xl text-[#0776a6]">
              article
            </Tab>
            <Tab role="tab" className="tab text-xl text-[#0776a6]">
              gaming
            </Tab>
          </TabList>
            <>
              <TabPanel>
                <ContestTabs
                  loading={loading}
                  key={business._id}
                  item={business}
                ></ContestTabs>
              </TabPanel>
              <TabPanel>
                <ContestTabs
                  loading={loading}
                  key={medical._id}
                  item={medical}
                ></ContestTabs>
              </TabPanel>
              <TabPanel>
                <ContestTabs
                  loading={loading}
                  key={medical._id}
                  item={article}
                ></ContestTabs>
              </TabPanel>
              <TabPanel>
                <ContestTabs
                  loading={loading}
                  key={medical._id}
                  item={gaming}
                ></ContestTabs>
              </TabPanel>
            </>
        </Tabs>
      </div>
    </div>
  );
};

export default AllContest;
