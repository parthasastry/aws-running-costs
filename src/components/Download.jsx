import React from "react";
import { Link } from "react-router-dom";
import testFile from "../data-template.csv";

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
        <Link to={testFile} target="_blank" download={testFile}>
          <button className="py-3 px-6 my-4 bg-violet-400 rounded-md border-none">
            Download CSV Template
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Download;
