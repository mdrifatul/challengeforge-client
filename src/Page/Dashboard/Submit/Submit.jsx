import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCreatorEmail from "../../../Hooks/useCreatorEmail";
import Loading from "../../Loading/Loading";

const Submit = () => {
  const axiosSecure = useAxiosSecure();
  const [submitedCreator, refetch, loading] = useCreatorEmail();
  console.log(submitedCreator);

  const handlemakeWinner = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    }).then((result) => {
      const winnerContest = {
        ...item,
        result: "winner",
      };
      if (result.isConfirmed) {
        axiosSecure
          .patch(`/submitted/${item?._id}`, winnerContest)
          .then((res) => {
            const makewinner = res.data;
            if (makewinner.modifiedCount > 0) {
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
  };

  return (
    <>
      <div className="overflow-x-auto">
        {loading ? (
          <Loading></Loading>
        ) : (
          <table className="table table-zebra lg:mt-0 mt-14">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Task</th>
                <th>Winner</th>
              </tr>
            </thead>
            <tbody>
              {submitedCreator.map((item, index) => (
                <tr key={item?._id}>
                  <td>{index + 1}</td>
                  <td>{item?.contestName}</td>
                  <td>{item?.email}</td>
                  <td>
                    <button>
                      <button
                        className="btn btn-sm bg-rose-100 text-rose-700"
                        onClick={() =>
                          document.getElementById("my_modal_3").showModal()
                        }
                      >
                        See Task
                      </button>
                      <dialog id="my_modal_3" className="modal">
                        <div className="modal-box">
                          <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                              ✕
                            </button>
                          </form>
                          <p className="py-4 text-md text-gray-600">
                            {item?.task}
                          </p>
                        </div>
                      </dialog>
                    </button>
                  </td>
                  <td>
                    <div>
                      {/* {ContestId>1 ? ( */}
                      {item?.result === "participator" ? (
                        <button
                          onClick={() => handlemakeWinner(item)}
                          className=" text-orange-600 bg-orange-200 p-1 rounded-lg capitalize"
                        >
                          participator
                        </button>
                      ) : (
                        <button className="btn btn-sm bg-green-200 text-green-600">
                          winner
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default Submit;
