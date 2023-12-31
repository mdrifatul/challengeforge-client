import { Link } from "react-router-dom";

const ContestCard = ({item}) => {
  const {_id,name,image,attempted,description} = item
  return (
    <div data-aos="fade-up" >
      <div className="card card-compact shadow-xl flex md:flex-row h-96 md:h-48 rounded-none">
        <figure>
          <img
          className=" w-auto md:h-full md:w-64"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-gray-700">{name}</h2>
          <p className="text-gray-600 text-lg">participants: {attempted || 0}</p>
          <p className="md:w-auto lg:w-80 text-gray-600">{description.slice(0, 40)}...</p>
          <div className="card-actions justify-start">
            <Link to={`/details/${_id}`}>
              <button className="btn btn-sm btn-outline outline-[#0776a6] text-[#0776a6]">Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContestCard;