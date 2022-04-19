import React from "react";
import { useSelector } from "react-redux";
import DisplayData from "./DisplayData";
import ServiceChart from "./ServiceChart";
import AccountChart from "./AccountChart";
import MonthChart from "./MonthChart";
import Download from "./Download";
import Upload from "./Upload";

const Home = () => {
  const data = useSelector((state) => state.data);

  return (
    <div name="home" className="py-24">
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col justify-center md:items-start w-full px-4 py-8">
          <p className="text-2xl">Operational Excellence</p>
          <h1 className="py-3 text-5xl md:text-7xl font-bold">Cloud Costs</h1>
          <p className="text-xl">
            Understand your AWS operational costs to achieve Cost Optimization
          </p>
        </div>

        <div className="">
          <div className="mx-auto py-12 px-12 text-center">
            <Download />
          </div>
          <div className="mx-auto py-12 px-12 text-center">
            <Upload />
          </div>
        </div>
      </div>

      <div>
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

export default Home;
