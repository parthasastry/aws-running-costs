import React from "react";
import { useSelector } from "react-redux";
import { Bar } from "react-chartjs-2";

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

const MonthChart = () => {
  const data = useSelector((state) => state.data);

  const newData = data.map((item) => {
    const month = new Date(item["Date"]).toLocaleString("default", {
      month: "long",
    });
    const year = new Date(item["Date"]).getFullYear();
    return { ...item, "Mon-Year": month + "-" + year };
  });

  let aggregated = newData.reduce((total, row) => {
    total[row["Mon-Year"]] =
      (total[row["Mon-Year"]] || 0) + Number(row["Cost"]);
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
        backgroundColor: ["rgba(99, 0, 132, 0.8)"],
        borderColor: ["rgba(99, 0, 132, 0.8)"],
      },
    ],
  };

  return (
    <div>
      <h2 className="text-2xl uppercase text-center">Cost ($) per Month</h2>
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

export default MonthChart;
