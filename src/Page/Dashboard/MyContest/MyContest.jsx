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
      confirmButtonColor: "#0776a6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/contest/${item?._id}`).then((res) => {
          console.log(res.data);
          if (res.data) {
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
    <div className="w-full max-w-7xl mx-auto py-10">
      <div className="flex justify-between items-center mb-8 px-4">
        <div>
          <h2 className="text-3xl font-extrabold text-gray-800">My Contests</h2>
          <p className="text-gray-500 mt-1">Manage your created contests and track submissions</p>
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
        {loading ? (
          <div className="p-10"><Loading /></div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="py-4 px-6 text-sm font-bold text-gray-600 uppercase tracking-wider">#</th>
                  <th className="py-4 px-6 text-sm font-bold text-gray-600 uppercase tracking-wider">Contest</th>
                  <th className="py-4 px-6 text-sm font-bold text-gray-600 uppercase tracking-wider">Status</th>
                  <th className="py-4 px-6 text-sm font-bold text-gray-600 uppercase tracking-wider text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {contests?.map((item, index) => (
                  <tr key={item?._id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-4 px-6 text-gray-500 font-medium">{index + 1}</td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-4">
                        <img src={item?.image} alt={item?.name} className="w-12 h-12 rounded-lg object-cover shadow-sm" />
                        <span className="font-bold text-gray-800">{item?.name}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                        item?.status === "panding"
                          ? "text-orange-700 bg-orange-100"
                          : "text-green-700 bg-green-100"
                      }`}>
                        {item?.status}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center justify-center gap-2">
                        {item?.status === "accepted" ? (
                          <button className="p-2 text-gray-400 bg-gray-50 rounded-lg cursor-not-allowed" disabled>
                            <RxUpdate className="text-lg" />
                          </button>
                        ) : (
                          <Link to={`/dashboard/update/${item._id}`}>
                            <button className="p-2 text-orange-500 hover:text-orange-700 hover:bg-orange-50 rounded-lg transition-colors" title="Edit">
                              <RxUpdate className="text-lg" />
                            </button>
                          </Link>
                        )}
                        
                        {item?.status === "accepted" ? (
                          <button className="p-2 text-gray-400 bg-gray-50 rounded-lg cursor-not-allowed" disabled>
                            <FaTrash />
                          </button>
                        ) : (
                          <button onClick={() => handleDelete(item)} className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors" title="Delete">
                            <FaTrash />
                          </button>
                        )}

                        <Link to="/dashboard/submit">
                          <button className="px-3 py-1.5 bg-[#0776a6]/10 text-[#0776a6] hover:bg-[#0776a6]/20 font-bold text-sm rounded-lg transition-colors">
                            Submissions
                          </button>
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyContest;
