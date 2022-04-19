import React from "react";

import { CSVLink } from "react-csv";

const csvData = `Date, Service, Account, Cost
3/1/22, EC2, 1000000001, 12.23
3/2/22, EBS, 1000000002, 99.99,
4/2/22, Storage Gateway, 1000000003, 102.45`;

const Download = () => {
  return (
    <div name="download" className="py-8 mx-auto p-4 border">
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
