import { Link } from "react-router-dom";
import usePayments from "../../../Hooks/usePayments";
import Loading from "./../../Loading/Loading";
import SectionTitle from "./../../Shared/SectionTitle";

const Participate = () => {
  const [payments, loading] = usePayments();

  const presendDate = new Date().toLocaleDateString();

  return (
    <>
      <div>
        <SectionTitle heading="Registered Contest"></SectionTitle>
      </div>
      <div className="mx-auto overflow-x-auto">
        {loading ? (
          <Loading></Loading>
        ) : (
          <table className="table table-zebra">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Deadline</th>
                <th>Price Money</th>
                <th>Participate</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((item, index) => (
                <tr key={item?._id}>
                  <th>{index + 1}</th>
                  <td>{item?.contestName}</td>
                  <td>{item?.deadline}</td>
                  <td>${item?.prizemoney}</td>
                  {presendDate > item?.deadline ? (
                    <td>
                      <button className="btn btn-sm " disabled="disabled">
                        Participate
                      </button>
                    </td>
                  ) : (
                    <td>
                      <Link
                        to={`/dashboard/participatecontest/${item?.contestId}`}
                      >
                        <button className="btn btn-sm bg-[#ff8147f0] text-white">
                          Participate
                        </button>
                      </Link>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default Participate;
