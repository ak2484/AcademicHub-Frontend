import { useState } from "react";
import PropTypes from "prop-types";

/*
  CourseForm - for creating courses
  fields: name (required, textbox), courseCode (required, textbox), year (required, number), semester (required, number), credits (required, number), department (required, selection[available department]), teachersIncharge (multiple selection [from avialable teaching staff])
*/
// export function CourseForm() {}

export function CourseForm({ departments, teachers }) {
  const [formData, setFormData] = useState({
    name: "",
    courseCode: "",
    year: "",
    semester: "",
    credits: "",
    department: "",
    teachersIncharge: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form
      className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg transition-all duration-300 hover:shadow-xl"
      onSubmit={handleSubmit}
    >
      <h2 className="text-xl font-semibold text-gray-700 mb-6 text-center">
        Create a New Course
      </h2>

      {/* Course Name */}
      <div className="mb-4">
        <label className="block text-gray-800 text-sm font-semibold mb-1" htmlFor="name">
          Course Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Course Code */}
      <div className="mb-4">
        <label className="block text-gray-800 text-sm font-semibold mb-1" htmlFor="courseCode">
          Course Code
        </label>
        <input
          type="text"
          id="courseCode"
          name="courseCode"
          required
          value={formData.courseCode}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Year */}
      <div className="mb-4">
        <label className="block text-gray-800 text-sm font-semibold mb-1" htmlFor="year">
          Year
        </label>
        <select
          id="year"
          name="year"
          required
          value={formData.year}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Select Year</option>
          <option value="1">1st Year</option>
          <option value="2">2nd Year</option>
          <option value="3">3rd Year</option>
          <option value="4">4th Year</option>
        </select>
      </div>

      {/* Semester */}
      <div className="mb-4">
        <label className="block text-gray-800 text-sm font-semibold mb-1" htmlFor="semester">
          Semester
        </label>
        <select
          id="semester"
          name="semester"
          required
          value={formData.semester}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Select Semester</option>
          <option value="1">1st Semester</option>
          <option value="2">2nd Semester</option>
          <option value="3">3rd Semester</option>
          <option value="4">4th Semester</option>
          <option value="5">5th Semester</option>
          <option value="6">6th Semester</option>
          <option value="7">7th Semester</option>
          <option value="8">8th Semester</option>
        </select>
      </div>

      {/* Credits */}
      <div className="mb-4">
        <label className="block text-gray-800 text-sm font-semibold mb-1" htmlFor="credits">
          Credits
        </label>
        <input
          type="number"
          id="credits"
          name="credits"
          required
          value={formData.credits}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Department */}
      <div className="mb-4">
        <label className="block text-gray-800 text-sm font-semibold mb-1" htmlFor="department">
          Department
        </label>
        <select
          id="department"
          name="department"
          required
          value={formData.department}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Select Department</option>
          {departments.map((dept) => (
            <option key={dept} value={dept}>
              {dept}
            </option>
          ))}
        </select>
      </div>

      {/* Teachers In Charge */}
      <div className="mb-4">
        <label className="block text-gray-800 text-sm font-semibold mb-1" htmlFor="teachersIncharge">
          Teacher In Charge
        </label>
        <select
          id="teachersIncharge"
          name="teachersIncharge"
          value={formData.teachersIncharge}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Select Teacher</option>
          {teachers.map((teacher) => (
            <option key={teacher} value={teacher}>
              {teacher}
            </option>
          ))}
        </select>
      </div>

      {/* Submit Button */}
      <div className="flex justify-end">
        <button
          type="submit"
          className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all duration-200 focus:ring-4 focus:ring-blue-300 focus:outline-none"
        >
          Create Course
        </button>
      </div>
    </form>
  );
}

CourseForm.propTypes = {
  departments: PropTypes.array.isRequired,
  teachers: PropTypes.array.isRequired,
};


// Usage:
// You would use this component by passing in departments and teachers as props, representing the available departments and teachers, respectively.

// <CourseForm
//   departments={['Computer Science', 'Mechanical', 'Electrical']}
//   teachers={['Mr. Smith', 'Ms. Johnson', 'Dr. Brown']}
// />