import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useaxiosPublic from '../../../Hooks/useaxiosPublic';
import Loading from './../../Loading/Loading';

const ManageContent = () => {
  // const [contest, loading, refetch]= useContest();
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useaxiosPublic();
  const [page, setPage] = useState(1)
  const limit = 10;

  const {refetch,data: contest ={result:[]}, isLoading: loading} = useQuery({
    queryKey: ['contestAll',page], 
    queryFn: async() =>{
        const res = await axiosPublic.get(`/contest?page=${page}&limit=${limit}`);
        return res.data
    }
})
const totalcontest = contest?.total



  const numberOfpage = Math.ceil(totalcontest/limit)
  const totalpage = Array.from({length: numberOfpage}, (_, i) => i +1);


  const handlePage = (item) => {
    setPage(item);
    refetch({ page: item });
   };


   const handlePrevious = () =>{
     if(page > 1 ){ 
      setPage(page -1);
      refetch({ page: page })
      console.log('prev',page);
     }
   }
   const handleNext = () =>{
     if(page < totalpage.length){
       setPage(page +1);
       refetch({ page: page })
       console.log("next",page + 1);
    }
   }




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
          if (res.data) {
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
    console.log(item);
    const acceptContest = {
      ...item,
      status: 'accepted'
    }
    axiosSecure.patch(`/contest/${item?._id}`,acceptContest)
    .then(res =>{
      if(res.data) {
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
          {loading? <Loading></Loading>:<table className="table table-zebra">
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
              contest?.result.map( (item,index) =>(
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
          </table>}
        </div>
        <div className="text-center mt-10 mb-20">
      <div className="join border border-[#0776a6]">
        <button onClick={handlePrevious} className="join-item btn text-[#0776a6]">«</button>
        {
          totalpage.map(item =>
            <button key={item} onClick={() => handlePage(item)} className={`${item === page ? "join-item btn text-white bg-[#0776a6] w-10 ": "join-item btn-ghost w-10"}`}>{item}</button>
          )     
        } 

        <button onClick={handleNext} className="join-item btn text-[#0776a6]">»</button>
      </div>
      </div>
      </div>
    </div>
  );
};

export default ManageContent;