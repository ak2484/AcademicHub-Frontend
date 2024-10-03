import React, { useState } from 'react';

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
    console.log('Attendance Submitted:', attendance);
    // Implement backend API call if needed
  };

  return (
    <div className="m-4 p-6 bg-white rounded-lg shadow-lg w-full md:w-3/4 lg:w-1/2">
      <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">Mark Attendance</h1>
      <form onSubmit={handleSubmit}>
        {students.map((student) => (
          <div key={student.id} className="flex justify-between items-center my-4">
            <span className="text-lg text-gray-700">{student.name}</span>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                checked={attendance.find((a) => a.id === student.id)?.present || false}
                onChange={() => handleAttendanceChange(student.id)}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-2 text-gray-600">Present</span>
            </label>
          </div>
        ))}
        <div className="text-center mt-6">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Submit Attendance
          </button>
        </div>
      </form>
    </div>
  );
};

export default AttendanceForm;
