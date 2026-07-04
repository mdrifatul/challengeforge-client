import { useQuery } from "@tanstack/react-query";
import { FaTrash } from 'react-icons/fa';
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Loading from "../../Loading/Loading";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();

  const {
    refetch,
    data: users = [],
    isLoading: loading,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleDelete = (user) => {
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
        axiosSecure.delete(`/users/${user?._id}`).then((res) => {
          if (res.data > 0) {
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

  const handleUpdaterole = (role,user) => {
    const userrole = {
      role : role
    }
    axiosSecure.put(`/users/${user?.email}`,userrole).then((res) => {
      if (res.data > 0) {
        refetch();
        Swal.fire({
          position: "top",
          icon: "success",
          title: `${user?.name} is an ${role} now`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  }

  return (
    <div className="w-full max-w-6xl mx-auto py-10">
      <div className="flex justify-between items-center mb-8 px-4">
        <div>
          <h2 className="text-3xl font-extrabold text-gray-800">User Management</h2>
          <p className="text-gray-500 mt-1">Manage user roles and permissions</p>
        </div>
        <div className="bg-[#0776a6]/10 text-[#0776a6] px-4 py-2 rounded-lg font-bold">
          Total: {users.length}
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
                  <th className="py-4 px-6 text-sm font-bold text-gray-600 uppercase tracking-wider">Name</th>
                  <th className="py-4 px-6 text-sm font-bold text-gray-600 uppercase tracking-wider">Email</th>
                  <th className="py-4 px-6 text-sm font-bold text-gray-600 uppercase tracking-wider">Role</th>
                  <th className="py-4 px-6 text-sm font-bold text-gray-600 uppercase tracking-wider">Update Role</th>
                  <th className="py-4 px-6 text-sm font-bold text-gray-600 uppercase tracking-wider text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {users.map((user, index) => (
                  <tr key={user?._id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-4 px-6 text-gray-500 font-medium">{index + 1}</td>
                    <td className="py-4 px-6 text-gray-800 font-bold">{user?.name}</td>
                    <td className="py-4 px-6 text-gray-500">{user?.email}</td>
                    <td className="py-4 px-6">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                        user?.role === 'Admin' ? 'bg-red-100 text-red-700' :
                        user?.role === 'Creator' ? 'bg-blue-100 text-blue-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {user?.role}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <select 
                        onChange={(e)=>handleUpdaterole(e.target.value,user)} 
                        className="bg-gray-50 border border-gray-200 text-gray-700 text-sm rounded-lg focus:ring-[#0776a6] focus:border-[#0776a6] block p-2"
                        defaultValue="Change"
                      >
                        <option disabled value="Change">Change</option>
                        <option value='User'>User</option>
                        <option value='Creator'>Creator</option>
                        <option value='Admin'>Admin</option>
                      </select>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <button
                        onClick={() => handleDelete(user)}
                        className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
                        title="Delete User"
                      >
                        <FaTrash />
                      </button>
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

export default AllUsers;
