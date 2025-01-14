import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useaxiosPublic from "../../../Hooks/useaxiosPublic";
import useRole from './../../../Hooks/useRole';
import Loading from './../../Loading/Loading';

const imageHosting_Key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const imageHosting_api = `https://api.imgbb.com/1/upload?key=${imageHosting_Key}`

const UpdateProfile = () => {
  const [role,isloading] = useRole();
  const axiosPublic = useaxiosPublic();
  const axiosSecure = useAxiosSecure()

  // const {name,email,} = role
  // console.log(name,image);

  const {
    register,
    handleSubmit,
  } = useForm();

  const onSubmit  = async(data) =>{
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
          title: "Contest Item Add Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }  
  }
}


  return (
    <div>
      {isloading? <Loading></Loading>:<form
          onSubmit={handleSubmit(onSubmit)}
          className="w-4/5 md:w-1/3 mx-auto mt-24"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="name"
              {...register("name", { required: true })}
              placeholder="Name"
              className="input input-bordered"
              defaultValue={role?.name}
            />
          </div>
          
            <div className="form-control">
            <label className="label">
              <span className="label-text">PhotoURL</span>
            </label>
              <input
                type="file"
                {...register("image",{ required: true })}
                className="file-input file-input-bordered w-full max-w-xs"
                placeholder="ImageURL"
                required
              />
            </div> 
          <div className="form-control mt-6">
            <button className="btn bg-[#0776a6] text-white">Update</button>
          </div>
        </form>}
    </div>
  );
};

export default UpdateProfile;