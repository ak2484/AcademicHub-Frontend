import React, { useState } from "react";

const AttendanceForm = ({ students }) => {
  const [attendance, setAttendance] = useState(
    students.map((student) => ({ id: student.id, present: false }))
  );

  const handleAttendanceChange = (studentId) => {
    setAttendance((prevAttendance) =>
      prevAttendance.map((student) =>
        student.id === studentId ? { ...student, present: !student.present } : student
      )
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Attendance Submitted:", attendance);
    // Implement backend API call if needed
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4 py-6">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-6 md:p-8">
        <h1 className="text-3xl font-bold text-dark-imperial-blue mb-6 text-center">
          Mark Attendance
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            {students.map((student) => (
              <div
                key={student.id}
                className="flex justify-between items-center p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition duration-300"
              >
                <span className="text-lg font-medium text-gray-800">{student.name}</span>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    checked={attendance.find((a) => a.id === student.id)?.present || false}
                    onChange={() => handleAttendanceChange(student.id)}
                    className="form-checkbox h-5 w-5 text-palatinate-blue border-gray-300 rounded focus:ring-palatinate-blue"
                  />
                  <span className="ml-2 text-gray-700">Present</span>
                </label>
              </div>
            ))}
          </div>

          {/* Submit Button */}
          <div className="text-center mt-8">
            <button
              type="submit"
              className="w-full md:w-auto bg-palatinate-blue text-white px-6 py-3 rounded-lg 
                         font-semibold text-lg shadow-md hover:bg-dark-imperial-blue transition duration-300"
            >
              Submit Attendance
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AttendanceForm;
