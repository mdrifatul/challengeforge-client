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
    <div>
      <div>
        {isLoading ? (
          <Loading></Loading>
        ) : (
          <div className="card shadow-xl md:flex-row md:w-2/3 mt-10 mx-auto  bg-teal-400">
            <figure className="px-10 md:py-0 pt-6">
              <img src={users?.image} alt="Shoes" className="rounded-xl w-32" />
            </figure>
            <div className="card-body">
              <div>
                <h1 className="text-2xl font-bold text-white">{users.name}</h1>
                <p className="text-white">{users?.email}</p>
              </div>
              <div className="">
                <p className="text-md uppercase bg-orange-400 w-fit px-2 py-1 rounded-full mb-3 text-white">
                  {users?.role}
                </p>
                <Link to="/dashboard/updateprofile">
                  <button className="btn btn-sm rounded-full text-white bg-green-700">
                    Update Profile
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
      <div>
        <p className="text-3xl text-center mt-10 text-[#0776a6] font-bold">
          Wining Percentage
        </p>
      </div>
      <div className="-mt-25 mx-auto mb-10">
        <div className="md:w-1/2 mx-auto">
            <PieChart width={400} height={260}>
              <Pie
                data={ChartData}
                cx="50%"
                cy="60%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
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
              <Legend></Legend>
            </PieChart>
        </div>
      </div>
    </div>
  );
};

export default Profile;
