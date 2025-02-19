import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // default styles for the calendar

// Define important dates
const importantDates = [
  { date: new Date(2024, 9, 7), label: "Math Exam" },
  { date: new Date(2024, 9, 25), label: "Festive Holiday" },
  { date: new Date(2024, 9, 30), label: "Summer Break Starts" },
  // Add more important dates
];

// Function to compare dates
const isSameDay = (d1, d2) => {
  return (
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate()
  );
};

const StudentCalendar = () => {
  const [date, setDate] = useState(new Date());

  // Render tile content for important dates
  const tileContent = ({ date, view }) => {
    if (view === "month") {
      const foundDate = importantDates.find((d) => isSameDay(d.date, date));
      if (foundDate) {
        return (
          <div className="text-xs text-white bg-red-500 rounded-lg px-1 text-center">
            {foundDate.label}
          </div>
        );
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4 py-6">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-6 md:p-8">
        {/* Header */}
        <h1 className="text-3xl font-bold mb-6 text-center text-dark-imperial-blue">
          📅 Academic Calendar
        </h1>

        {/* Calendar Component */}
        <div className="w-full">
          <Calendar
            onChange={setDate}
            value={date}
            tileContent={tileContent} // Show event labels
            tileClassName={({ date }) => {
              const isImportant = importantDates.some((d) => isSameDay(d.date, date));
              return isImportant ? "bg-blue-100 rounded-lg" : "";
            }}
            className="mx-auto border rounded-lg shadow bg-white"
          />
        </div>

        {/* Selected Date Information */}
        <div className="mt-6 text-center">
          <p className="text-lg text-gray-700">
            Selected Date:{" "}
            <span className="font-bold text-blue-600">{date.toDateString()}</span>
          </p>
          <p className="text-sm text-gray-600 mt-2">
            {importantDates.some((d) => isSameDay(d.date, date)) ? (
              importantDates
                .filter((d) => isSameDay(d.date, date))
                .map((event, index) => (
                  <span key={index} className="font-semibold text-red-500">
                    {event.label}
                  </span>
                ))
            ) : (
              <span className="text-gray-400">No events on this day.</span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentCalendar;
