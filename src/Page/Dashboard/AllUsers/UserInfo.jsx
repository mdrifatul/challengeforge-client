import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const UserInfo = ({user,index,refetch}) => {
  const axiosSecure = useAxiosSecure();
// console.log(user);
  const handleUpdaterole = (role) => {
    const userrole = {
      role : role
    }
    console.log(user);
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
      <>
      <tr key={user._id}>
        <th>{index + 1}</th>
        <td>{user?.name}</td>
        <td>{user?.email}</td>
        <td>{user?.role}</td>
        <td>
          <select onBlur={(e)=>handleUpdaterole(e.target.value)}  className="select w-fit">
            <option value='User'>User</option>
            <option value='Creator'>Creator</option>
            <option value='Admin'>Admin</option>
          </select>
        </td>
        <td>
          {/* <button
            onClick={() => handleDelete(user)}
            className="btn btn-ghost text-base  text-red-600 "
          >
            <FaTrash />
          </button> */}
        </td>
      </tr>
      </>
    </div>
  );
};

export default UserInfo;