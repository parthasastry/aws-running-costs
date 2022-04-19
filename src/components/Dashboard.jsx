import React from "react";
import DisplayData from "./DisplayData";
import ServiceChart from "./ServiceChart";
import AccountChart from "./AccountChart";
import MonthChart from "./MonthChart";

import { useSelector } from "react-redux";

const Dashboard = () => {
  const data = useSelector((state) => state.data);
  return (
    <div>
      <div name="dashboard">
        <h2 className="text-3xl font-bold text-center uppercase">
          Visualization
        </h2>
        {data.length > 0 ? (
          <div>
            <div className="grid grid-cols-2 gap-6 p-12">
              <div className="border">
                <ServiceChart />
              </div>
              <div className="border">
                <AccountChart />
              </div>
              <div className="border col-span-2">
                <MonthChart />
              </div>
              <div className="border col-span-2">
                <DisplayData />
              </div>
            </div>
          </div>
        ) : (
          <p className="text-lg pt-2 pb-4 text-center">
            Upload Data to visualize your AWS Running Costs
          </p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
