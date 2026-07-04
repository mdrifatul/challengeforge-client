import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useaxiosPublic from '../../../Hooks/useaxiosPublic';
import Loading from './../../Loading/Loading';

const ManageContent = () => {
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
      confirmButtonColor: "#0776a6",
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
    <div className="w-full max-w-6xl mx-auto py-10">
      <div className="flex justify-between items-center mb-8 px-4">
        <div>
          <h2 className="text-3xl font-extrabold text-gray-800">Manage Contests</h2>
          <p className="text-gray-500 mt-1">Review and manage all submitted contests</p>
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
                  <th className="py-4 px-6 text-sm font-bold text-gray-600 uppercase tracking-wider">Status</th>
                  <th className="py-4 px-6 text-sm font-bold text-gray-600 uppercase tracking-wider">Category</th>
                  <th className="py-4 px-6 text-sm font-bold text-gray-600 uppercase tracking-wider">Prize Money</th>
                  <th className="py-4 px-6 text-sm font-bold text-gray-600 uppercase tracking-wider text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {contest?.result.map((item, index) => (
                  <tr key={item?._id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-4 px-6 text-gray-500 font-medium">{(page - 1) * limit + index + 1}</td>
                    <td className="py-4 px-6 text-gray-800 font-bold">{item?.name}</td>
                    <td className="py-4 px-6">
                      <button
                        onClick={() => handleMakeAdmin(item)}
                        className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider transition-colors ${
                          item?.status === "panding"
                            ? "text-orange-700 bg-orange-100 hover:bg-orange-200"
                            : "text-green-700 bg-green-100"
                        }`}
                        disabled={item?.status !== "panding"}
                      >
                        {item?.status}
                      </button>
                    </td>
                    <td className="py-4 px-6 text-gray-600 capitalize">{item?.tags}</td>
                    <td className="py-4 px-6 text-gray-800 font-semibold">${item?.prizemoney}</td>
                    <td className="py-4 px-6 text-center">
                      <button
                        onClick={() => handleDelete(item)}
                        className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
                        title="Delete Contest"
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

      <div className="flex justify-center mt-10 mb-20">
        <div className="flex bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <button 
            onClick={handlePrevious} 
            className="px-4 py-2 text-[#0776a6] hover:bg-gray-50 font-bold transition-colors border-r border-gray-200"
          >
            «
          </button>
          {totalpage.map(item => (
            <button 
              key={item} 
              onClick={() => handlePage(item)} 
              className={`px-4 py-2 font-bold transition-colors ${
                item === page 
                  ? "bg-[#0776a6] text-white" 
                  : "text-gray-600 hover:bg-gray-50 border-r border-gray-200"
              }`}
            >
              {item}
            </button>
          ))}
          <button 
            onClick={handleNext} 
            className="px-4 py-2 text-[#0776a6] hover:bg-gray-50 font-bold transition-colors"
          >
            »
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageContent;