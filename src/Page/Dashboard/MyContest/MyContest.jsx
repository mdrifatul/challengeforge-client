import { FaTrash } from "react-icons/fa";
import { RxUpdate } from "react-icons/rx";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useContestByEmail from "../../../Hooks/useContestByEmail";
import Loading from "../../Loading/Loading";

const MyContest = () => {
  const [contest,loading, refetch] = useContestByEmail();
  const axiosSecure = useAxiosSecure();

  const contests = contest?.result
  console.log(contest);
  console.log(contest?.result);

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/contest/${item?._id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "user has been deleted.",
              icon: "success",
              timer: 1000,
            });
          }
        });
      }
    });
  };



  return (
    <div>
      <div className="flex justify-evenly my-4">
        <h2 className="text-3xl text-[#0776a6]">My Contest</h2>
      </div>
      <div>
        <div className="overflow-x-auto">
          {loading? <Loading></Loading>:<table className="table table-zebra">
            <thead>
              <tr>
                <th></th>
                <th>Image</th>
                <th>Name</th>
                <th>Status</th>
                <th>Edit</th>
                <th>Delete</th>
                <th>Accepted</th>
              </tr>
            </thead>
            <tbody>
              {contests.map((item, index) => (
                <tr key={item?._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item?.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item?.name}</td>
                  <td>
                    <button

                      className={
                        item?.status === "panding"
                          ? " text-orange-600 bg-orange-200 rounded-lg p-1 capitalize"
                          : " text-green-700 bg-green-200 p-1 rounded-lg capitalize"
                      }
                    >
                      {item?.status}
                    </button>
                  </td>
                  <td>
                    {item?.status === "accepted" ? (
                      <Link>
                        <button
                          className="btn btn-sm"
                          disabled="disabled"
                        >
                          <RxUpdate />
                        </button>
                      </Link>
                    ) : (
                      <Link to={`/dashboard/update/${item._id}`}>
                        <button className="btn btn-sm btn-ghost text-lg text-orange-500">
                          <RxUpdate />
                        </button>
                      </Link>
                    )}
                  </td>
                  <td>
                    {item?.status === "accepted" ? (
                      <button
                        onClick={() => handleDelete(item)}
                        className="btn btn-sm btn-ghost text-base  text-red-500 "
                        disabled="disabled"
                      >
                        <FaTrash />
                      </button>
                    ) : (
                      <button
                        onClick={() => handleDelete(item)}
                        className="btn btn-sm btn-ghost text-base  text-red-500 "
                      >
                        <FaTrash />
                      </button>
                    )}
                  </td>
                  <td>
                    <Link to="/dashboard/submit">
                      <button className="btn btn-sm text-green-700">
                        submission
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>}
        </div>
      </div>
    </div>
  );
};

export default MyContest;
