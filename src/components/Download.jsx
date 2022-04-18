import React from "react";
import { Link } from "react-router-dom";

import { CSVLink } from "react-csv";

const csvData = [
  ["Date", "Service", "Account", "Cost"],
  ["3/1/22", "EC2", "1000000000", 12.23],
  ["4/1/22", "EBS", "1000000001", 45.88],
];

const Download = () => {
  return (
    <div name="download" className="py-8 mx-auto p-4">
      <div className="mx-auto py-12 px-12 text-center">
        <h2 className="text-3xl font-bold text-center uppercase">
          Download Template
        </h2>
        <p>
          To assist with data upload, click below to get a csv template. Please
          dont change column names (row 1)
        </p>

        <button className="py-3 px-6 my-4 bg-violet-400 rounded-md border-none">
          <CSVLink data={csvData}>Download template</CSVLink>
        </button>

        <p className="text-slate-900 font-bold italic">
          Please visit FAQ section for any issues with download
        </p>
      </div>
    </div>
  );
};

export default Download;
