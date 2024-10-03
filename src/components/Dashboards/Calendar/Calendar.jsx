import React, { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css'; // default styles for the calendar

// Define the important dates
const importantDates = [
  { date: new Date(2024, 9, 7), label: "Math Exam" }, // Example: Oct 3, 2024
  { date: new Date(2024, 9, 25), label: "Festive Holiday" }, // Example: Dec 25, 2024
  { date: new Date(2024, 9, 30), label: "Summer Break Starts" }, // Example: July 4, 2024
  // Add more important dates here
];

const isSameDay = (d1, d2) => {
  return (
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate()
  );
};

const StudentCalendar = () => {
  const [date, setDate] = useState(new Date());

  // Render tile content based on the important dates
  const tileContent = ({ date, view }) => {
    if (view === "month") {
      const foundDate = importantDates.find((d) => isSameDay(d.date, date));
      if (foundDate) {
        return (
          <div className="text-center text-xs text-white bg-red-500 rounded-lg px-1">
            {foundDate.label}
          </div>
        );
      }
    }
  };

  return (
    <div className="m-4 flex justify-start items-center bg-gray-100 w-full">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-3/4 lg:w-1/2">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Academic Calendar
        </h1>

        <div className="w-full h-auto">
          <Calendar
            onChange={setDate}
            value={date}
            tileContent={tileContent} // Display content on specific dates
            tileClassName={({ date, view }) => {
              // Highlight important dates with Tailwind classes
              const isImportant = importantDates.some((d) => isSameDay(d.date, date));
              return isImportant ? "bg-blue-100" : "";
            }}
            className="mx-auto border rounded-lg shadow"
          />
        </div>

        {/* Selected Date Information */}
        <div className="mt-6 text-center">
          <p className="text-lg text-gray-600">
            Selected Date:{" "}
            <span className="font-bold text-blue-600">
              {date.toDateString()}
            </span>
          </p>
          <p className="text-sm text-gray-500">
            {importantDates
              .filter((d) => isSameDay(d.date, date))
              .map((event, index) => (
                <span key={index}>
                  Event: <span className="font-bold">{event.label}</span>
                </span>
              )) || "No events on this day."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentCalendar;
