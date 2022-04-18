import React from "react";
import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const AccountChart = () => {
  const data = useSelector((state) => state.data);

  let aggregated = data.reduce((total, row) => {
    total[row["Account"]] = (total[row["Account"]] || 0) + Number(row["Cost"]);
    return total;
  }, {});

  let chartCategories = Object.keys(aggregated);
  let chartData = Object.values(aggregated);

  const displayData = {
    labels: chartCategories,
    datasets: [
      {
        label: "Total data transfer in GB/day",
        data: chartData,
        backgroundColor: ["rgba(99, 99, 132, 0.8)"],
        borderColor: ["rgba(99, 99, 132, 0.8)"],
      },
    ],
  };

  return (
    <div>
      <h2 className="text-2xl uppercase text-center">Cost ($) per Account</h2>
      <Bar
        data={displayData}
        options={{
          title: {
            display: true,
            text: "Size in GB",
            fontSize: 20,
          },
          legend: {
            display: true,
            position: "right",
          },
        }}
      />
    </div>
  );
};

export default AccountChart;
