import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useaxiosPublic from "../../../Hooks/useaxiosPublic";
import Loading from "../../Loading/Loading";
import SectionTitle from "../../Shared/SectionTitle";



const Update = () => {
  const { register, handleSubmit} = useForm();
  const {id} = useParams();
  const axiosPublic = useaxiosPublic()
  const axiosSecure = useAxiosSecure()
  

  const {data: update=[],isLoading: loading} = useQuery({
    queryKey: ['update', id],
    queryFn: async() =>{
      const res = await axiosPublic.get(`/contest/${id}`)
      return res.data
    }
  })
  const {name,tags,instruction,description,contestprice,deadline,prizemoney} = update

  const onSubmit = async(data) => {

      const updateField = {
        name: data?.name,
        deadline: data?.deadline,
        description: data?.description,
        contestprice: parseFloat(data?.contestprice),
        prizemoney: parseFloat(data?.prizemoney),
        tags: data?.tags,
        instruction: data?.instruction,
        status: 'pandig'
      } 
      // console.log(updateField);
      const contestPost = await axiosSecure.patch(`/contest/${id}`, updateField)
      // console.log(contestPost.data);
      if(contestPost.data){
        Swal.fire({
          position: "top",
          icon: "success",
          title: "Contest Item Add Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
  };

  return (
    <>
     <div className="my-5 w-8/12 mx-auto">
        <SectionTitle heading="Update You Contest"></SectionTitle>
        {loading? <Loading></Loading>:<form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="form-control">
              <input
                type="text"
                {...register("name", { required: true })}
                className="input input-bordered rounded-none border-0 border-b-2 border-[#299fd2] focus:outline-none"
                placeholder="Contest Name"
                defaultValue={name}
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                {...register("description", { required: true })}
                className="input input-bordered rounded-none border-0 border-b-2 border-[#299fd2] focus:outline-none"
                placeholder="Description"
                defaultValue={description}
              />
            </div>
            <div className="form-control">
              <input
                type="number"
                step="0.01"
                {...register("contestprice", { required: true })}
                className="input input-bordered rounded-none border-0 border-b-2 border-[#299fd2] focus:outline-none"
                placeholder="Contest Price"
                defaultValue={contestprice}
              />
            </div>
            <div className="form-control">
              <input
                type="number"
                step="0.01"
                {...register("prizemoney", { required: true })}
                className="input input-bordered rounded-none border-0 border-b-2 border-[#299fd2] focus:outline-none"
                placeholder="Prize Money"
                defaultValue={prizemoney}
              />
            </div>
            <div className="form-control">
              <input
                type="date"
                step="0.01"
                {...register("deadline", { required: true })}
                className="input input-bordered rounded-none border-0 border-b-2 border-[#299fd2] focus:outline-none"
                placeholder="Deadline"
                defaultValue={deadline}
              />
            </div>
            <div className="form-control">
              <select {...register("tags", { required: true })}  className="select select-ghost w-full max-w-xs rounded-none border-0 border-b-2 border-[#299fd2] focus:outline-none text-gray-500 text-base" defaultValue={tags}
              >
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
                defaultValue={instruction}
              />
            </div>
            {/* <div className="form-control">
              <input
                type="file"
                {...register("image")}
                className="file-input file-input-bordered w-full max-w-xs"
                placeholder="ImageURL"
              />
            </div>       */}
          </div>
          <div className="form-control mt-6">
            <input
              className="btn btn-outline w-40 mx-auto outline-[#0776a6] text-[#0776a6] hover:bg-[#5999b5] "
              type="submit"
              value="Update"
            />
          </div>
        </form>}
      </div> 
    </>
  );
};

export default Update;