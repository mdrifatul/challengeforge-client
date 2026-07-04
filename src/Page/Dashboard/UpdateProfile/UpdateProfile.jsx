import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useaxiosPublic from "../../../Hooks/useaxiosPublic";
import useRole from './../../../Hooks/useRole';
import Loading from './../../Loading/Loading';

const imageHosting_Key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const imageHosting_api = `https://api.imgbb.com/1/upload?key=${imageHosting_Key}`

const UpdateProfile = () => {
  const [role, isloading] = useRole();
  const axiosPublic = useaxiosPublic();
  const axiosSecure = useAxiosSecure()

  const {
    register,
    handleSubmit,
  } = useForm();

  const onSubmit = async(data) => {
    const imageFile = {image: data.image[0]}
    const res = await axiosPublic.post(imageHosting_api,imageFile,{
      headers: {
        "content-type": "multipart/form-data",
      }
    })
    console.log(res.data);
    if(res.data.success){
      const profileupdate = {
        name:data.name,
        image:res.data.data.display_url,
      }
      console.log(data);
      const contestPost = await axiosSecure.put(`/users/${role?.email}`, profileupdate)
      if(contestPost.data){
        Swal.fire({
          position: "top",
          icon: "success",
          title: "Profile Updated Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }  
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto py-10 px-4">
      {isloading ? (
        <Loading />
      ) : (
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="bg-[#0776a6] px-8 py-8 text-center relative overflow-hidden">
            <h2 className="text-3xl font-extrabold text-white relative z-10">Update Profile</h2>
            <p className="text-white/80 mt-1 relative z-10">Manage your personal information</p>
            <div className="absolute w-40 h-40 bg-white opacity-10 rounded-full -top-10 -right-10 blur-xl"></div>
            <div className="absolute w-32 h-32 bg-white opacity-10 rounded-full -bottom-10 -left-10 blur-xl"></div>
          </div>
          
          <form onSubmit={handleSubmit(onSubmit)} className="p-8 md:p-12">
            <div className="space-y-6">
              <div className="form-control w-full">
                <label className="label text-sm font-bold text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="Enter your name"
                  className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0776a6] focus:border-transparent transition-all text-gray-700"
                  defaultValue={role?.name}
                />
              </div>
              
              <div className="form-control w-full">
                <label className="label text-sm font-bold text-gray-700 mb-1">Profile Photo</label>
                <input
                  type="file"
                  {...register("image",{ required: true })}
                  className="file-input file-input-bordered w-full rounded-xl bg-gray-50 border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0776a6]"
                  required
                />
              </div> 
            </div>
            
            <div className="flex justify-center mt-10">
              <button 
                type="submit" 
                className="px-10 py-3.5 bg-[#0776a6] hover:bg-[#06618a] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 w-full"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default UpdateProfile;