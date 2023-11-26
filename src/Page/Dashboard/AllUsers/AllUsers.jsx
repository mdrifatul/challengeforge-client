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
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${user?._id}`).then((res) => {
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


  const handleUpdaterole = (role,user) => {
    const userrole = {
      role : role
    }
    axiosSecure.put(`/users/admin/${user?._id}`,userrole).then((res) => {
      if (res.data.modifiedCount > 0) {
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
    <div>
      <div className="flex justify-evenly my-4">
        <h2 className="text-3xl text-[#0776a6]">All Users</h2>
      </div>
      <div>
        {loading? <Loading></Loading>:<div className="overflow-x-auto">
          <table className="table table-zebra">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>update Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
              users.map( (user,index) =>(
              <tr key={user?._id}>
                <th>{index + 1}</th>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>{user?.role}</td>
                <td>
                  <select onChange={(e)=>handleUpdaterole(e.target.value,user)}  className="select w-fit">
                    <option value='User'>User</option>
                    <option value='Creator'>Creator</option>
                    <option value='Admin'>Admin</option>
                  </select>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(user)}
                    className="btn btn-ghost text-base  text-red-600 "
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>))}
            </tbody>
          </table>
        </div>}
      </div>
    </div>
  );
};

export default AllUsers;
