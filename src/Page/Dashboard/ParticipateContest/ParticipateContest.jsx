
import { useQuery } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import SectionTitle from './../../Shared/SectionTitle';

const ParticipateContest = () => {
  const {user} = useAuth();
  const axiosSecure = useAxiosSecure()
  const {id} = useParams();
  console.log(id);

  const {data: participate=[]} = useQuery({
      queryKey: ['participate'], 
      queryFn: async() =>{
          const res = await axiosSecure.get(`/payments/participate/${id}`);
          return res.data
      }
    })

  const {
    register,
    handleSubmit,
    reset
  } = useForm();

  const onSubmit = (data) =>{
    const task = {
      ...data, 
      username: user?.displayName,
      email: user?.email,
      creatorEmail:participate?.creatorEmail,
      contestName:participate?.contestName,
      contestId:participate?.contestId,
      prizemoney: participate?.prizemoney,
      transactionId:participate?.transactionId,
      result: 'participator'
    }
    axiosSecure.post('/submitted',task)
    .then(res => {
      console.log(res.data)
      if(res.data.insertedId){
        reset();
        Swal.fire({
          position: "top",
          icon: "success",
          title: "Menu Item Add Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    })   
}


  return (
    <div>
      <SectionTitle heading='Submit Your Task'></SectionTitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}
        className="w-4/5 md:w-3/4 mx-auto"
        >
        <div className="form-control">
            <textarea
              type="text"
              {...register("task")}
              placeholder="Enter Your Task"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6 w-40 mx-auto">
            <button className="btn bg-[#0776a6] text-white ">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ParticipateContest;