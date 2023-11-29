import { Link } from "react-router-dom";
import usePayments from "../../../Hooks/usePayments";
import SectionTitle from './../../Shared/SectionTitle';

const Participate = () => {
  const [payments] = usePayments()
  console.log(payments);

  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const date = String(currentDate.getDate()).padStart(2, '0');

  const presendDate = `${year}-${month}-${date}`;
  console.log(presendDate);


  return (
    <div className="grid grid-cols-1 gap-6 mx-auto">
      <div>
        <SectionTitle  heading='Registered Contest'></SectionTitle>
      </div>
      <table className="table table-zebra">
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Deadline</th>
          <th>Price Money</th>
          <th>Participate</th>
        </tr>
      </thead>
      <tbody>
        {
        payments.map( (item,index) =>(
        <tr key={item?._id}>
          <th>{index + 1}</th>
          <td>{item?.contestName}</td>
          <td>{item?.deadline}</td>
          <td>${item?.prizemoney}</td>
           {presendDate=== item?.deadline?<td><button className="btn btn-sm " disabled="disabled">Participate</button></td>:<td><Link to= {`/dashboard/participatecontest/${item?.contestId}`} ><button className="btn btn-sm bg-[#ff8147f0] text-white">Participate</button></Link></td>}
        </tr>))}
      </tbody>
    </table>
    </div>
  );
};

export default Participate;