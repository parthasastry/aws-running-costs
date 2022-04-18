import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const DisplayData = () => {
  const data = useSelector((state) => state.data);

  const [text, setText] = useState("");

  const headers = Object.keys(data[0]);
  const tableHeaders = Object.keys(data[0]).map((h) => {
    return (
      <td className="bg-blue-100 border text-left px-8 py-4" key={h}>
        {h}
      </td>
    );
  });

  const tableData = data
    .filter((d) => {
      let searchText = text.toLocaleLowerCase();
      return (
        d["Service"].toLowerCase().includes(searchText) ||
        d["Account"].toLowerCase().includes(searchText)
      );
    })
    .map((item, index) => {
      return (
        <tr className="bg-gray-100 border-b" key={index}>
          {headers.map((h, i) => {
            return (
              <td
                className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                key={i}
              >
                {item[h]}
              </td>
            );
          })}
        </tr>
      );
    });

  return (
    <div className="p-4">
      <div>
        <h2 className="text-3xl font-bold text-center uppercase">
          Data you uploaded
        </h2>
        <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
          <form>
            <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
              <input
                onChange={(e) => setText(e.target.value)}
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder="Search Service/Account..."
              />
            </div>
          </form>
        </div>
        <div className="flex justify-center items-center m-4">
          <table className="table-fixed w-full">
            <thead>
              <tr>{tableHeaders}</tr>
            </thead>
            <tbody>{tableData}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DisplayData;
