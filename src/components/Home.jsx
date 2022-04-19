import React from "react";

import Download from "./Download";
import Upload from "./Upload";
import Dashboard from "./Dashboard";

const Home = () => {
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
        <Dashboard />
      </div>
    </div>
  );
};

export default Home;
