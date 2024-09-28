import { useState } from "react";
import PropTypes from "prop-types";

export default function ExperimentForm({ labs }) {
  const [formData, setFormData] = useState({
    name: "",
    instruction: "",
    dateOfPerformance: "",
    dateOfSubmission: "",
    subject: "",
    marks: "",
  });

  // Step state
  const [currentStep, setCurrentStep] = useState(0);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  // Move to the next step
  const nextStep = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, 2));
  };

  // Move to the previous step
  const prevStep = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
  };

  return (
    <form
      className="ml-5 h-screen w-screen p-6 bg-white shadow-lg rounded-lg items-start"
      onSubmit={handleSubmit}
    >
      {currentStep === 0 && (
        <div>
          <h2 className="font-bold mb-4 text-palatinate-blue text-sm">Basic Experiment Information</h2>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="name">
              Experiment Name
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

          <div className="flex justify-start">
            <button
              type="button"
              onClick={nextStep}
              className="bg-palatinate-blue text-white-smoke px-5 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-200 text-sm"
            >
              Next
            </button>
          </div>
        </div>
      )}

      {currentStep === 1 && (
        <div>
          <h2 className="font-bold mb-4 text-palatinate-blue text-sm">Set Experiment Dates</h2>

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

          <div className="flex justify-start">
            <button
              type="button"
              onClick={prevStep}
              className="bg-gray-300 text-black px-5 py-3 rounded-full text-sm"
            >
              Back
            </button>
            <button
              type="button"
              onClick={nextStep}
              className="bg-palatinate-blue text-white-smoke px-5 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-200 text-sm"
            >
              Next
            </button>
          </div>
        </div>
      )}

      {currentStep === 2 && (
        <div>
          <h2 className="font-bold mb-4 text-palatinate-blue text-sm">Experiment Marks and Lab Selection</h2>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="subject">
              Subject (Lab)
            </label>
            <select
              id="subject"
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              className="w-auto border rounded-md focus:outline-none focus:ring-2 focus:ring-palatinate-blue text-sm p-2"
            >
              <option value="">Select Lab</option>
              {labs.map((lab) => (
                <option key={lab} value={lab}>
                  {lab}
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

          <div className="flex justify-start">
            <button
              type="button"
              onClick={prevStep}
              className="bg-gray-300 text-black px-5 py-3 rounded-full text-sm"
            >
              Back
            </button>
            <button
              type="submit"
              className="bg-palatinate-blue text-white-smoke px-5 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-200 text-sm"
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </form>
  );
}

ExperimentForm.propTypes = {
  labs: PropTypes.array.isRequired,
};
