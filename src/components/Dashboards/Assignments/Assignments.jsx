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

  const [currentStep, setCurrentStep] = useState(1); // Tracks the current step

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
    // Submit the form data
    console.log(formData);
  };

  const availableSubjects = formData.subjectType === "Course" ? courses : labs;

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <>
            <h2 className="w-screen font-bold text-palatinate-blue text-sm mb-4">Basic Assignment Information</h2>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="name">
                Assignment Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-auto border rounded-md focus:outline-none focus:ring-2 focus:ring-palatinate-blue text-sm p-2"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="instruction">
                Instructions
              </label>
              <textarea
                id="instruction"
                name="instruction"
                required
                value={formData.instruction}
                onChange={handleChange}
                className="w-auto border rounded-md focus:outline-none focus:ring-2 focus:ring-palatinate-blue text-sm p-2"
              />
            </div>
          </>
        );
      case 2:
        return (
          <>
            <h2 className="font-bold text-palatinate-blue text-sm mb-4">Assignment Dates</h2>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="dateOfPerformance">
                Date of Performance
              </label>
              <input
                type="date"
                id="dateOfPerformance"
                name="dateOfPerformance"
                required
                value={formData.dateOfPerformance}
                onChange={handleChange}
                className="w-auto border rounded-md focus:outline-none focus:ring-2 focus:ring-palatinate-blue text-sm p-2"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="dateOfSubmission">
                Date of Submission
              </label>
              <input
                type="date"
                id="dateOfSubmission"
                name="dateOfSubmission"
                required
                value={formData.dateOfSubmission}
                onChange={handleChange}
                className="w-auto border rounded-md focus:outline-none focus:ring-2 focus:ring-palatinate-blue text-sm p-2"
              />
            </div>
          </>
        );
      case 3:
        return (
          <>
            <h2 className="font-bold text-palatinate-blue text-sm mb-4">Subject & Marks</h2>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="subjectType">
                Subject Type
              </label>
              <select
                id="subjectType"
                name="subjectType"
                required
                value={formData.subjectType}
                onChange={handleChange}
                className="w-auto border rounded-md focus:outline-none focus:ring-2 focus:ring-palatinate-blue text-sm p-2"
              >
                <option value="Course">Course</option>
                <option value="Lab">Lab</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="subject">
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-auto border rounded-md focus:outline-none focus:ring-2 focus:ring-palatinate-blue text-sm p-2"
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
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="marks">
                Marks
              </label>
              <input
                type="number"
                id="marks"
                name="marks"
                required
                value={formData.marks}
                onChange={handleChange}
                className="w-auto border rounded-md focus:outline-none focus:ring-2 focus:ring-palatinate-blue text-sm p-2"
              />
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <form className="h-screen mx-auto p-6 bg-white shadow-lg rounded-lg" onSubmit={handleSubmit}>
      {renderStep()}
      <div className="flex justify-between mt-5">
        {currentStep > 1 && (
          <button
            type="button"
            onClick={handlePrevStep}
            className="px-6 py-2 bg-gray-500 text-white font-semibold rounded-full hover:bg-gray-600"
          >
            Previous
          </button>
        )}
        {currentStep < 3 ? (
          <button
            type="button"
            onClick={handleNextStep}
            className="px-6 py-2 bg-palatinate-blue text-white font-semibold rounded-full hover:bg-blue-700"
          >
            Next
          </button>
        ) : (
          <button
            type="submit"
            className="px-6 py-2 bg-palatinate-blue text-white font-semibold rounded-full hover:bg-blue-700"
          >
            Submit
          </button>
        )}
      </div>
    </form>
  );
}

AssignmentForm.propTypes = {
  courses: PropTypes.array.isRequired,
  labs: PropTypes.array.isRequired,
};
