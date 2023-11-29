import { Link } from "react-router-dom";
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';
import usePayments from "../../../Hooks/usePayments";
import useRole from "../../../Hooks/useRole";
import defaultimage from './../../../assets/user.png';
import Loading from './../../Loading/Loading';


const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];


const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

// const ChartData = payments.map((data) => {
//   return { name: data.category, value: data.revenur };
// });

const Profile = () => {
  const [users,isLoading] = useRole();
  console.log(users);
  console.log(users?.image?.url);
  const [payments] = usePayments();
  console.log(payments.length);
  
  return (
    <div>
      <div>
      {isLoading? <Loading></Loading>:<div className="hero min-h-screen mx-autow-fit">
      <div className="hero-content flex-col">
        <div>
        <img  src={users?.image || defaultimage} alt="UserImg" className="w-[150px] h-[150px] rounded-full -mt-20" />
        </div>
        <div className="flex justify-around w-[550px] gap-16 mt-10">
          <div>
          <h1 className="text-2xl font-bold">{users.name}</h1>
          <p className="py-6 text-gray-500">{users?.email}</p>
          </div>
          <div className="text-right">
            <p className="text-md uppercase bg-orange-400 w-fit px-2 py-1 rounded-full mb-3 text-white">{users?.role}</p>
            <Link  to='/dashboard/updateprofile'><button className="btn btn-sm rounded-full text-white bg-green-700">Update Profile</button></Link>
          </div>
        </div>
      </div>
    </div>}
      </div>
      
    <div>
    <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
    </div>
  );
};

export default Profile;