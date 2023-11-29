import { FaTrash } from 'react-icons/fa';
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useContest from "../../../Hooks/useContest";

const ManageContent = () => {
  const [contest,refetch,] = useContest();
  const axiosSecure = useAxiosSecure();
  console.log(contest);


  const handleDelete = (item,) => {
    console.log(item);
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
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "item has been deleted.",
              icon: "success",
              timer: 1000,
            });
            refetch();
          }
        });
      }
    });
  };

  const handleMakeAdmin = (item) =>{
    const acceptContest = {
      ...item,
      status: 'Accepted'
    }
    axiosSecure.patch(`/contest/${item?._id}`,acceptContest)
    .then(res =>{
      if(res.data.modifiedCount >0) {
        refetch();
        Swal.fire({
          position: "top",
          icon: "success",
          title: `${item?.name} is accepted`,
          showConfirmButton: false,
          timer: 1500,
        })
      }
    })
  }

  return (
    <div>
      <div>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Role</th>
                <th>Category</th>
                <th>Prize Money</th>
              </tr>
            </thead>
            <tbody>
              {
              contest.map( (item,index) =>(
              <tr key={item?._id}>
                <th>{index + 1}</th>
                <td>{item?.name}</td>
                <td>
                <button
                    onClick={() =>handleMakeAdmin(item)}
                    className={
                      item?.status === "panding"
                        ? " text-orange-600 bg-orange-200 p-1 rounded-lg capitalize"
                        : " text-green-700 bg-green-200 p-1 rounded-lg capitalize"
                    }
                  >
                    {item?.status}
                </button>
                </td>
                <td>{item?.tags}</td>
                <td>$ {item?.prizemoney}
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(item)}
                    className="btn btn-ghost text-base  text-red-600 "
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageContent;