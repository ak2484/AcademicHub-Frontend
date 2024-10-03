import React from "react";

const Schedule = () => {
  const schedule = {
    Monday: [
      { time: "9:00 AM - 10:00 AM", subject: "SE /AP R_N-313" },
      { time: "10:00 AM - 11:00 AM", subject: "ADMT /DG R_N-313" },
      { time: "11:20 AM - 12:20 PM", subject: "EEB /NS R_N-313" },
      { time: "12:20 PM - 1:20 PM", subject: "PCE-II /MG R_N-313" },
      { time: "2:00 PM - 4:00 PM", subject: "IP Lab /MK-LAB-102" },
    ],
    Tuesday: [
      { time: "9:00 AM - 10:00 AM", subject: "ADMT /DG R_N-313" },
      { time: "10:00 AM - 11:00 AM", subject: "IP /MK R_N-313" },
      { time: "11:20 AM - 12:20 PM", subject: "EEB /NS R_N-313" },
      { time: "12:20 PM - 1:20 PM", subject: "CNS /PM R_N-313" },
      { time: "2:00 PM - 4:00 PM", subject: "PCE-II /MG LAB-006" },
    ],
    Wednesday: [
      { time: "9:00 AM - 10:00 AM", subject: "IP /MK R_N-313" },
      { time: "10:00 AM - 11:00 AM", subject: "PCE-II /MG R_N-313" },
      { time: "11:20 AM - 12:20 PM", subject: "SE /AP R_N-313" },
      { time: "12:20 PM - 1:20 PM", subject: "CNS /PM R_N-313" },
      { time: "2:00 PM - 4:00 PM", subject: "DevOps /PP LAB-103" },
    ],
    Thursday: [
      { time: "9:00 AM - 10:00 AM", subject: "SE /AP R_N-313" },
      { time: "10:00 AM - 11:00 AM", subject: "CNS /PM R_N-313" },
      { time: "11:20 AM - 12:20 PM", subject: "EEB /NS R_N-313" },
      { time: "12:20 PM - 1:20 PM", subject: "IP /MK R_N-313" },
      { time: "2:00 PM - 4:00 PM", subject: "Mini Project /PM LAB-108" },
    ],
    Friday: [
      { time: "9:00 AM - 10:00 AM", subject: "MENTOR SESSION" },
      { time: "10:00 AM - 11:00 AM", subject: "ADMT /DG R_N-313" },
      { time: "11:20 AM - 12:20 PM", subject: "IP /MK R_N-313" },
      { time: "12:20 PM - 1:20 PM", subject: "EEB /NS R_N-313" },
      { time: "2:00 PM - 4:00 PM", subject: "SL /KD LAB-108" },
    ],
  };

  // Generate a map for the times
  const times = [
    "9:00 AM - 10:00 AM",
    "10:00 AM - 11:00 AM",
    "11:00 AM - 11:20 AM", // Lunch Break
    "11:20 AM - 12:20 PM",
    "12:20 PM - 1:20 PM",
    "1:20 PM - 2:00 PM", // Lunch Break
    "2:00 PM - 4:00 PM",
  ];

  return (
    <div className='flex flex-col items-center justify-center p-6 bg-gray-100 '>
      <div className='w-full max-w-4xl bg-white rounded-lg shadow-lg p-6 overflow-x-auto'>
        <h2 className='text-1xl font-semibold text-palatinate-blue mb-6 text-center'>
          Schedule
        </h2>
        <table className='min-w-full border-collapse border border-gray-300'>
          <thead>
            <tr className='bg-blue-100'>
              <th className='border border-gray-300 p-3 bg-palatinate-blue text-white-smoke font-semibold text-center'>
                Day/Time
              </th>
              {times.map((time, index) => (
                <th
                  key={index}
                  className='border border-gray-300 p-3 bg-palatinate-blue text-white-smoke font-semibold text-center'
                >
                  {time}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Object.keys(schedule).map((day) => (
              <tr key={day} className='hover:bg-gray-100'>
                <td className='border border-gray-300 p-3 text-center font-semibold text-gray-700'>
                  {day}
                </td>
                {times.map((time, index) => {
                  const session = schedule[day].find((s) => s.time === time);
                  return (
                    <td
                      key={index}
                      className='border border-gray-300 p-3 text-center'
                    >
                      {session
                        ? session.subject
                        : time === "11:00 AM - 11:20 AM"
                        ? "Break"
                        : time === "1:20 PM - 2:00 PM"
                        ? "Lunch Break"
                        : ""}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Schedule;
