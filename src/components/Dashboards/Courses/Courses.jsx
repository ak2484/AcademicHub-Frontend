import { useState } from "react";
import PropTypes from "prop-types";

export default function CourseForm({ departments, teachers }) {
  const [formData, setFormData] = useState({
    name: "",
    courseCode: "",
    year: "",
    semester: "",
    credits: "",
    department: "",
    teachersIncharge: "",
  });

  const [currentStep, setCurrentStep] = useState(1);

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
      className="h-screen w-screen mx-auto p-6 bg-white shadow-lg rounded-lg"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Create a New Course - Step {currentStep}
      </h2>

      {currentStep === 1 && (
        <>
          {/* Course Name */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="name">
              Course Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-auto px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-gray-50 focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue"
              placeholder="Enter course name"
            />
          </div>

          {/* Course Code */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="courseCode">
              Course Code
            </label>
            <input
              type="text"
              id="courseCode"
              name="courseCode"
              required
              value={formData.courseCode}
              onChange={handleChange}
              className="w-auto px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-gray-50 focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue"
              placeholder="Enter course code"
            />
          </div>

          {/* Submit Button */}
          <div className="flex items-start">
            <button
              type="button"
              onClick={() => setCurrentStep(2)}
              className="bg-palatinate-blue text-white-smoke px-5 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-palatinate-blue text-sm"
            >
              Next
            </button>
          </div>
        </>
      )}

      {currentStep === 2 && (
        <>
          {/* Year */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="year">
              Year
            </label>
            <select
              id="year"
              name="year"
              required
              value={formData.year}
              onChange={handleChange}
              className="w-auto px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-gray-50 focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue"
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
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="semester">
              Semester
            </label>
            <select
              id="semester"
              name="semester"
              required
              value={formData.semester}
              onChange={handleChange}
              className="w-auto px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-gray-50 focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue"
            >
              <option value="">Select Semester</option>
              {[...Array(8)].map((_, index) => (
                <option key={index + 1} value={index + 1}>
                  {index + 1} Semester
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-start">
            <button
              type="button"
              onClick={() => setCurrentStep(1)}
              className="bg-gray-500 text-white-smoke px-5 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500 text-sm"
            >
              Back
            </button>
            <button
              type="button"
              onClick={() => setCurrentStep(3)}
              className="bg-palatinate-blue text-white-smoke px-5 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-palatinate-blue text-sm"
            >
              Next
            </button>
          </div>
        </>
      )}

      {currentStep === 3 && (
        <>
          {/* Credits */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="credits">
              Credits
            </label>
            <input
              type="number"
              id="credits"
              name="credits"
              required
              value={formData.credits}
              onChange={handleChange}
              className="w-auto px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-gray-50 focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue"
              placeholder="Enter course credits"
            />
          </div>

          {/* Department */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="department">
              Department
            </label>
            <select
              id="department"
              name="department"
              required
              value={formData.department}
              onChange={handleChange}
              className="w-auto px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-gray-50 focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue"
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
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="teachersIncharge">
              Teachers In Charge
            </label>
            <select
              id="teachersIncharge"
              name="teachersIncharge"
              value={formData.teachersIncharge}
              onChange={handleChange}
              className="w-auto px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-gray-50 focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue"
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
          <div className="flex items-start">
            <button
              type="button"
              onClick={() => setCurrentStep(2)}
              className="bg-gray-500 text-white-smoke px-5 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500 text-sm"
            >
              Back
            </button>
            <button
              type="submit"
              className="bg-palatinate-blue text-white-smoke px-5 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-palatinate-blue text-sm"
            >
              Submit
            </button>
          </div>
        </>
      )}
    </form>
  );
}

CourseForm.propTypes = {
  departments: PropTypes.array.isRequired,
  teachers: PropTypes.array.isRequired,
};
