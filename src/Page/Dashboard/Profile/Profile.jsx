import { Link } from "react-router-dom";
import { Cell, Legend, Pie, PieChart } from "recharts";
import usePayments from "../../../Hooks/usePayments";
import useRole from "../../../Hooks/useRole";
import Loading from "../../Loading/Loading";
import useSubmit from "./../../../Hooks/useSubmit";

const COLORS = ["#0088FE", "#00C49F"];

const Profile = () => {
  const [users, isLoading] = useRole();
  const [payments] = usePayments();
  const [submited] = useSubmit();
  const winner = submited.filter((item) => item?.result === "winner");

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const ChartData = [
    { name: "Participate", value: payments.length },
    { name: "Win", value: winner.length },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto py-10">
      {isLoading ? (
        <Loading />
      ) : (
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 mb-12">
          <div className="h-32 bg-[#0776a6]"></div>
          
          <div className="px-8 pb-8 flex flex-col md:flex-row gap-6 relative">
            <div className="-mt-16 w-32 h-32 rounded-2xl border-4 border-white shadow-lg overflow-hidden bg-white shrink-0 mx-auto md:mx-0">
              <img src={users?.image} alt={users?.name} className="w-full h-full object-cover" />
            </div>
            
            <div className="flex-1 text-center md:text-left mt-4 md:mt-2">
              <h1 className="text-3xl font-extrabold text-gray-800 mb-1">{users?.name}</h1>
              <p className="text-gray-500 font-medium mb-4">{users?.email}</p>
              
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                <span className="px-4 py-1.5 bg-[#0776a6]/10 text-[#0776a6] font-bold text-sm tracking-widest uppercase rounded-full border border-[#0776a6]/20">
                  {users?.role}
                </span>
                
                <Link to="/dashboard/updateprofile">
                  <button className="px-5 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-full transition-colors text-sm border border-gray-200">
                    Edit Profile
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 flex flex-col items-center">
        <h2 className="text-2xl font-extrabold text-gray-800 mb-8 border-b-2 border-[#0776a6] pb-2 inline-block">
          Winning Statistics
        </h2>
        <div className="flex justify-center w-full">
          <PieChart width={400} height={260}>
            <Pie
              data={ChartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {ChartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default Profile;
