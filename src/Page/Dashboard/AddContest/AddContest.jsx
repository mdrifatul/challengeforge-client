import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import useaxiosPublic from "../../../Hooks/useaxiosPublic";
import useAxiosSecure from './../../../Hooks/useAxiosSecure';
import SectionTitle from "./../../Shared/SectionTitle";

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
      // console.log(contestField);
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
    <>
      <div className="my-5 w-8/12 mx-auto">
        <SectionTitle heading="Add You Contest"></SectionTitle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-6 mb-10">
            <div className="form-control">
              <input
                type="text"
                {...register("name", { required: true })}
                className="input input-bordered rounded-none border-0 border-b-2 border-[#299fd2] focus:outline-none"
                placeholder="Contest Name"
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                {...register("description", { required: true })}
                className="input input-bordered rounded-none border-0 border-b-2 border-[#299fd2] focus:outline-none"
                placeholder="Description"
              />
            </div>
            <div className="form-control">
              <input
                type="number"
                step="0.01"
                {...register("contestprice", { required: true })}
                className="input input-bordered rounded-none border-0 border-b-2 border-[#299fd2] focus:outline-none"
                placeholder="Contest Price"
              />
            </div>
            <div className="form-control">
              <input
                type="number"
                step="0.01"
                {...register("prizemoney", { required: true })}
                className="input input-bordered rounded-none border-0 border-b-2 border-[#299fd2] focus:outline-none"
                placeholder="Prize Money"
              />
            </div>
            <div className="form-control">
              <input
                type="date"
                step="0.01"
                {...register("deadline", { required: true })}
                className="input input-bordered rounded-none border-0 border-b-2 border-[#299fd2] focus:outline-none"
                placeholder="Deadline"
              />
            </div>
            <div className="form-control">
              <select {...register("tags", { required: true })} className="select select-ghost w-full max-w-xs rounded-none border-0 border-b-2 border-[#299fd2] focus:outline-none text-gray-500 text-base">
                <option disabled selected>
                  Select Categroy
                </option>
                <option>business</option>
                <option>medical</option>
                <option>article</option>
                <option>gaming</option>
              </select>
            </div>
            <div className="form-control">
              <input
                type="text"
                {...register("instruction", { required: true })}
                className="input input-bordered rounded-none border-0 border-b-2 border-[#299fd2] focus:outline-none"
                placeholder="Instruction"
              />
            </div>
            <div className="form-control">
              <input
                type="file"
                {...register("image", { required: true })}
                className="file-input file-input-bordered w-full max-w-xs"
                placeholder="ImageURL"
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <input
              className="btn btn-outline w-40 mx-auto outline-[#0776a6] text-[#0776a6] hover:bg-[#5999b5] "
              type="submit"
              value="Add"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default AddContest;
