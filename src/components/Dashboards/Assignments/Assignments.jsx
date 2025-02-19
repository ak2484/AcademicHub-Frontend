import { useState } from "react";
import PropTypes from "prop-types";

export default function AssignmentForm({ courses, labs }) {
  const [formData, setFormData] = useState({
    name: "",
    instruction: "",
    dateOfPerformance: "",
    dateOfSubmission: "",
    subjectType: "Course",
    subject: "",
    marks: "",
  });

  const [currentStep, setCurrentStep] = useState(1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNextStep = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, 3));
  };

  const handlePrevStep = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const availableSubjects = formData.subjectType === "Course" ? courses : labs;

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <>
            <h3 className="text-2xl font-semibold text-dark-imperial-blue mb-6 text-center">
              Basic Assignment Information
            </h3>
            <div className="mb-4">
              <label className="block text-dark-imperial-blue text-sm font-medium mb-2">
                Assignment Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white-smoke text-smoky-black 
                          focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue outline-none"
                placeholder="Enter assignment name"
              />
            </div>

            <div className="mb-4">
              <label className="block text-dark-imperial-blue text-sm font-medium mb-2">
                Instructions
              </label>
              <textarea
                name="instruction"
                required
                value={formData.instruction}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white-smoke text-smoky-black 
                          focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue outline-none"
                placeholder="Enter instructions"
                rows="3"
              />
            </div>
          </>
        );
      case 2:
        return (
          <>
            <h3 className="text-2xl font-semibold text-dark-imperial-blue mb-6 text-center">
              Assignment Dates
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-dark-imperial-blue text-sm font-medium mb-2">
                  Date of Performance
                </label>
                <input
                  type="date"
                  name="dateOfPerformance"
                  required
                  value={formData.dateOfPerformance}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white-smoke text-smoky-black 
                            focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue outline-none"
                />
              </div>

              <div>
                <label className="block text-dark-imperial-blue text-sm font-medium mb-2">
                  Date of Submission
                </label>
                <input
                  type="date"
                  name="dateOfSubmission"
                  required
                  value={formData.dateOfSubmission}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white-smoke text-smoky-black 
                            focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue outline-none"
                />
              </div>
            </div>
          </>
        );
      case 3:
        return (
          <>
            <h3 className="text-2xl font-semibold text-dark-imperial-blue mb-6 text-center">
              Subject & Marks
            </h3>
            <div className="mb-4">
              <label className="block text-dark-imperial-blue text-sm font-medium mb-2">
                Subject Type
              </label>
              <select
                name="subjectType"
                required
                value={formData.subjectType}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white-smoke text-smoky-black 
                          focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue outline-none"
              >
                <option value="Course">Course</option>
                <option value="Lab">Lab</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-dark-imperial-blue text-sm font-medium mb-2">
                Subject
              </label>
              <select
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white-smoke text-smoky-black 
                          focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue outline-none"
              >
                <option value="">Select Subject</option>
                {availableSubjects.map((subject) => (
                  <option key={subject} value={subject}>
                    {subject}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-dark-imperial-blue text-sm font-medium mb-2">
                Marks
              </label>
              <input
                type="number"
                name="marks"
                required
                value={formData.marks}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white-smoke text-smoky-black 
                          focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue outline-none"
                placeholder="Enter marks"
              />
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <form className="w-full max-w-lg p-6 md:p-8 bg-lavender-web shadow-lg rounded-lg" onSubmit={handleSubmit}>
        {renderStep()}
        <div className="flex justify-between mt-5">
          {currentStep > 1 && (
            <button
              type="button"
              onClick={handlePrevStep}
              className="bg-gray-500 text-white px-6 py-2 rounded-md hover:bg-gray-600 transition duration-200"
            >
              Previous
            </button>
          )}
          {currentStep < 3 ? (
            <button
              type="button"
              onClick={handleNextStep}
              className="bg-palatinate-blue text-white px-6 py-2 rounded-md hover:bg-dark-imperial-blue transition duration-200"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="bg-palatinate-blue text-white px-6 py-2 rounded-md hover:bg-dark-imperial-blue transition duration-200"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

AssignmentForm.propTypes = {
  courses: PropTypes.array.isRequired,
  labs: PropTypes.array.isRequired,
};
