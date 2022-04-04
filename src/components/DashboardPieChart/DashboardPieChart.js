import React from "react";
import { Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const DashboardPieChart = () => {
  const data01 = [
    {
      month: "Mar",
      investment: 100000,
    },
    {
      month: "Apr",
      investment: 200000,
    },
    {
      month: "May",
      investment: 500000,
    },
    {
      month: "Jun",
      investment: 500000,
    },
    {
      month: "Jul",
      investment: 600000,
    },
    {
      month: "Aug",
      investment: 700000,
    },
  ];

  const data02 = [
    {
      month: "Mar",
      revenue: 10401,
    },
    {
      month: "Apr",
      revenue: 24500,
    },
    {
      month: "May",
      revenue: 67010,
    },
    {
      month: "Jun",
      revenue: 40405,
    },
    {
      month: "Jul",
      revenue: 50900,
    },
    {
      month: "Aug",
      revenue: 61000,
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
          dataKey="revenue"
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
