import React from "react";
import { Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const DashboardPieChart = () => {
  const data01 = [
    {
      month: "Jan",
      investment: 100000,
      sell: 241,
    },
    {
      month: "Feb",
      investment: 200000,
      sell: 423,
    },
    {
      month: "Mar",
      investment: 560000,
      sell: 726,
    },
    {
      month: "Apr",
      investment: 670000,
      sell: 529,
    },
  ];

  const data02 = [
    {
      month: "May",
      investment: 700000,
      sell: 726,
    },
    {
      month: "Jun",
      investment: 400000,
      sell: 529,
    },
    {
      month: "Jul",
      investment: 600000,
      sell: 601,
    },
    {
      month: "Aug",
      investment: 700000,
      sell: 670,
    },
    {
      month: "Sep",
      investment: 500000,
      sell: 670,
    },
  ];
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={300} height={300}>
        <Pie
          data={data01}
          dataKey="investment"
          cx="50%"
          cy="50%"
          outerRadius={60}
          fill="#8884d8"
        />
        <Pie
          data={data02}
          dataKey="investment"
          cx="50%"
          cy="50%"
          innerRadius={70}
          outerRadius={90}
          fill="#82ca9d"
          label
        />
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default DashboardPieChart;
