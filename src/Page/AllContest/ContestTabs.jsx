
import ContestCard from './ContestCard';


const ContestTabs = ({item}) => {
  return (
      <div>
      <div className="grid lg:grid-cols-2 gap-6 mx-auto my-20">
        {
          item.map(item => <ContestCard key={item._id} item={item}></ContestCard>)
        }
      </div>
    </div>

  );
};

export default ContestTabs;