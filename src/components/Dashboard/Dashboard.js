import React from "react";
import DashboardLineChart from "../DashboardLineChart/DashboardLineChart";
import DashboardPieChart from "../DashboardPieChart/DashboardPieChart";

const Dashboard = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold my-10">Company Analytical Dashboard</h1>
      <div className="row ">
        <div className="line-chart w-6/12 h-[300px] mx-auto">
          <h1 className="text-xl font-medium my-7">Company Revenue Chart</h1>
          <DashboardLineChart></DashboardLineChart>
        </div>
        <div className="pie-chart w-6/12 h-[300px] mx-auto my-10">
          <h1 className="text-xl font-medium mt-20">
            Company Revenue VS Investment
          </h1>
          <DashboardPieChart></DashboardPieChart>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
