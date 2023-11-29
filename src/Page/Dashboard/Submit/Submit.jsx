import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useSubmit from "../../../Hooks/useSubmit";

const Submit = () => {
  const axiosSecure = useAxiosSecure();
  const [submited, refetch] = useSubmit();
  console.log(submited);

  const handlemakeWinner = (item) =>{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      const winnerContest = {
        ...item,
        result : 'winner'
      }
      if (result.isConfirmed) {
        axiosSecure.patch(`/submitted/${item?._id}`,winnerContest)
        .then((res) => {
          const makewinner = res.data
          console.log(makewinner);
          if(makewinner.modifiedCount>0){
            Swal.fire({
              position: "top",
              icon: "success",
              title: `${item?.email} is the winner`,
              showConfirmButton: false,
              timer: 1500,
            });
            refetch();
          }
        });
      }
    });
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
                <th>Email</th>
                <th>Task</th>
                <th>Winner</th>
              </tr>
            </thead>
            <tbody>
              {submited.map((item, index) => (
                <tr key={item?._id}>
                  <td>{index + 1}</td>
                  <td>{item?.contestName}</td>
                  <td>{item?.email}</td>
                  <td><button>
                    <button className="btn btn-sm bg-rose-200 text-rose-700" onClick={()=>document.getElementById('my_modal_3').showModal()}>See Task</button>
                    <dialog id="my_modal_3" className="modal">
                      <div className="modal-box">
                        <form method="dialog">
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <p className="py-4 text-md text-gray-600">{item?.task}</p>
                      </div>
                    </dialog>  
                    
                  </button></td>
                  <td>
                  <button
                    onClick={() =>handlemakeWinner(item)}
                    className={
                      item?.result === "participator"
                        ? " text-orange-600 bg-orange-200 p-1 rounded-lg capitalize"
                        : " text-green-700 bg-green-200 p-1 rounded-lg capitalize"
                      }
                    >
                    {item?.result}
                  </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Submit;