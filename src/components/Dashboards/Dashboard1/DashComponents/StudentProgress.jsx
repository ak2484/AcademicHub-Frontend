import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const marksData = [
  { subject: "Math", marks: 75 },
  { subject: "English", marks: 85 },
  { subject: "Science", marks: 90 },
  { subject: "History", marks: 80 },
  { subject: "Geography", marks: 88 },
];

const StudentProgress = () => {
  return (
    <div className='m-4 flex justify-start items-center bg-white-smoke w-full'>
      <div className='bg-white shadow-lg rounded-lg p-6 w-full md:w-3/4 lg:w-1/2'>
        <h1 className='text-2xl font-bold mb-6 text-center text-gray-800'>
          Student Progress Tracker
        </h1>

        {/* Chart Container */}
        <div className='w-full h-64'>
          <ResponsiveContainer>
            <LineChart data={marksData}>
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='subject' />
              <YAxis domain={[0, 100]} />
              <Tooltip />
              <Legend />
              <Line
                type='monotone'
                dataKey='marks'
                stroke='#8282ffff'
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Summary Section */}
        <div className='mt-6 text-center'>
          <p className='text-lg text-gray-600'>
            Overall Progress:
            <span className='text-palatinate-blue font-bold'> Good</span>
          </p>
          <p className='text-sm text-gray-500'>
            Keep up the good work in Science and Geography!
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentProgress;
