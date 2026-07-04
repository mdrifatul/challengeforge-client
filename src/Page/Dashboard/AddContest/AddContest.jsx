import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import useaxiosPublic from "../../../Hooks/useaxiosPublic";
import useAxiosSecure from './../../../Hooks/useAxiosSecure';

const imageHosting_Key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const imageHosting_api = `https://api.imgbb.com/1/upload?key=${imageHosting_Key}`

const AddContest = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useaxiosPublic()
  const axiosSecure = useAxiosSecure()
  const {user} = useAuth()

  const onSubmit = async(data) => {
    const imageFile = {image: data.image[0]}
    const res = await axiosPublic.post(imageHosting_api,imageFile,{
      headers: {
        "content-type": "multipart/form-data",
      }
    })
    if(res.data.success){
      const contestField = {
        name: data.name,
        deadline: data.deadline,
        description: data.description,
        contestprice: parseFloat(data.contestprice),
        prizemoney: parseFloat(data.prizemoney),
        tags: data.tags,
        instruction: data.instruction,
        image: res.data.data.display_url,
        email: user?.email,
        status: 'panding' 
      } 
      const contestPost = await axiosSecure.post('/contest', contestField)
      console.log(contestPost.data);
      if(contestPost.data){
        Swal.fire({
          position: "top",
          icon: "success",
          title: "Menu Item Add Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
      }
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto py-10 px-4">
      <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
        <div className="bg-[#0776a6] px-8 py-10 text-center">
          <h2 className="text-3xl font-extrabold text-white">Add New Contest</h2>
          <p className="text-[#0776a6] bg-white/20 mt-2 inline-block px-4 py-1 rounded-full text-sm font-semibold backdrop-blur-sm text-white">Create a challenge for users</p>
        </div>
        
        <form onSubmit={handleSubmit(onSubmit)} className="p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="form-control w-full">
              <label className="label text-sm font-bold text-gray-700 mb-1">Contest Name</label>
              <input
                type="text"
                {...register("name", { required: true })}
                className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0776a6] focus:border-transparent transition-all text-gray-700"
                placeholder="Enter contest name"
              />
            </div>
            <div className="form-control w-full">
              <label className="label text-sm font-bold text-gray-700 mb-1">Description</label>
              <input
                type="text"
                {...register("description", { required: true })}
                className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0776a6] focus:border-transparent transition-all text-gray-700"
                placeholder="Brief description"
              />
            </div>
            <div className="form-control w-full">
              <label className="label text-sm font-bold text-gray-700 mb-1">Contest Price ($)</label>
              <input
                type="number"
                step="0.01"
                {...register("contestprice", { required: true })}
                className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0776a6] focus:border-transparent transition-all text-gray-700"
                placeholder="0.00"
              />
            </div>
            <div className="form-control w-full">
              <label className="label text-sm font-bold text-gray-700 mb-1">Prize Money ($)</label>
              <input
                type="number"
                step="0.01"
                {...register("prizemoney", { required: true })}
                className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0776a6] focus:border-transparent transition-all text-gray-700"
                placeholder="0.00"
              />
            </div>
            <div className="form-control w-full">
              <label className="label text-sm font-bold text-gray-700 mb-1">Deadline</label>
              <input
                type="date"
                {...register("deadline", { required: true })}
                className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0776a6] focus:border-transparent transition-all text-gray-700"
              />
            </div>
            <div className="form-control w-full">
              <label className="label text-sm font-bold text-gray-700 mb-1">Category</label>
              <select 
                {...register("tags", { required: true })} 
                className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0776a6] focus:border-transparent transition-all text-gray-700"
                defaultValue=""
              >
                <option disabled value="">Select Category</option>
                <option value="business">Business</option>
                <option value="medical">Medical</option>
                <option value="article">Article</option>
                <option value="gaming">Gaming</option>
              </select>
            </div>
            <div className="form-control w-full md:col-span-2">
              <label className="label text-sm font-bold text-gray-700 mb-1">Instruction</label>
              <textarea
                {...register("instruction", { required: true })}
                className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0776a6] focus:border-transparent transition-all text-gray-700 h-32 resize-none"
                placeholder="Detailed instructions for participants..."
              ></textarea>
            </div>
            <div className="form-control w-full md:col-span-2">
              <label className="label text-sm font-bold text-gray-700 mb-1">Cover Image</label>
              <input
                type="file"
                {...register("image", { required: true })}
                className="file-input file-input-bordered w-full rounded-xl bg-gray-50 border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0776a6]"
              />
            </div>
          </div>
          
          <div className="flex justify-center mt-12">
            <button
              type="submit"
              className="px-10 py-4 bg-[#0776a6] hover:bg-[#06618a] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 w-full md:w-auto min-w-[200px]"
            >
              Publish Contest
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default AddContest;
