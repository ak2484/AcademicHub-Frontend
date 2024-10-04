// AttendancePieChart.js
import React, { useEffect, useRef } from "react";
import { Pie } from "react-chartjs-2";
import Chart from "chart.js/auto";

function AttendancePieChart({ presentDays, totalDays }) {
  const chartContainer = useRef(null);
  const chartInstance = useRef(null);

  // Calculate the percentage of days present and absent
  const absentDays = totalDays - presentDays;
  const presentPercentage = ((presentDays / totalDays) * 100).toFixed(2);

  // Data for the Pie Chart
  const data = {
    labels: ["Present", "Absent"],
    datasets: [
      {
        label: "Attendance",
        data: [presentDays, absentDays],
        backgroundColor: ["#2c2cff", "#ff1010ff"],
        hoverBackgroundColor: ["#2c2cff ", "#ff1010ff"],
      },
    ],
  };

  useEffect(() => {
    // Destroy chart if it already exists
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    if (chartContainer && chartContainer.current) {
      chartInstance.current = new Chart(chartContainer.current, {
        type: "pie",
        data: data,
        options: {
          responsive: true,
        },
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [presentDays, totalDays]);

  return (
    <div className='bg-white-smoke w-[500px]  rounded-xl shadow-sm shadow-smoky-black m-2'>
      <h1 className='text-center text-2xl font-bold  text-dark-imperial-blue'>
        Attendance: {presentPercentage}%
      </h1>
      <canvas ref={chartContainer} />
    </div>
  );
}

export default AttendancePieChart;
