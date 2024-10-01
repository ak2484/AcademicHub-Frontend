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
    <>
      <div className='flex justify-center items-center w-auto bg-lavender-web rounded-xl'>
        <form
          className='mx-auto p-6  bg-white shadow-lg rounded-lg w-[400px]'
          onSubmit={handleSubmit}
        >
          {currentStep === 0 && (
            <div>
              <h3 className='text-2xl font-semibold text-dark-imperial-blue mb-6 '>
                Basic Experiment Information
              </h3>

              <div className='mb-4'>
                <label
                  className='block text-dark-imperial-blue text-sm font-semibold mb-2 '
                  htmlFor='name'
                >
                  Experiment Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className='w-full  px-4 py-2 border border-gray-300 rounded-md placeholder-smoky-black text-smoky-black bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'
                  placeholder='Enter experiment name'
                />
              </div>

              <div className='mb-4'>
                <label
                  className='block text-dark-imperial-blue text-sm font-semibold mb-2 '
                  htmlFor='instruction'
                >
                  Instructions
                </label>
                <textarea
                  id='instruction'
                  name='instruction'
                  required
                  value={formData.instruction}
                  onChange={handleChange}
                  className='w-full  px-4 py-2 border border-gray-300 rounded-md placeholder-smoky-black text-smoky-black bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'
                  placeholder='Enter the instruction'
                />
              </div>

              <div className='flex justify-end'>
                <button
                  type='button'
                  onClick={nextStep}
                  className='bg-palatinate-blue text-white-smoke px-5 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-200 text-sm'
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {currentStep === 1 && (
            <div>
              <h2 className='text-2xl font-bold text-dark-imperial-blue mb-6 '>
                Set Experiment Dates
              </h2>

              <div className='mb-4'>
                <label
                  className='block text-dark-imperial-blue text-sm font-semibold mb-2 '
                  htmlFor='dateOfPerformance'
                >
                  Date of Performance
                </label>
                <input
                  type='date'
                  id='dateOfPerformance'
                  name='dateOfPerformance'
                  required
                  value={formData.dateOfPerformance}
                  onChange={handleChange}
                  className='w-full  px-4 py-2 border border-gray-300 rounded-md placeholder-smoky-black text-smoky-black bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'
                />
              </div>

              <div className='mb-4'>
                <label
                  className='block text-dark-imperial-blue text-sm font-semibold mb-2 '
                  htmlFor='dateOfSubmission'
                >
                  Date of Submission
                </label>
                <input
                  type='date'
                  id='dateOfSubmission'
                  name='dateOfSubmission'
                  required
                  value={formData.dateOfSubmission}
                  onChange={handleChange}
                  className='w-full  px-4 py-2 border border-gray-300 rounded-md placeholder-smoky-black text-smoky-black bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'
                />
              </div>

              <div className='flex justify-between'>
                <button
                  type='button'
                  onClick={prevStep}
                  className='bg-smoky-black text-white-smoke px-5 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500 text-sm'
                >
                  Back
                </button>
                <button
                  type='button'
                  onClick={nextStep}
                  className='bg-palatinate-blue text-white-smoke px-5 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-palatinate-blue text-sm'
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div>
              <h2 className='text-2xl font-bold text-dark-imperial-blue mb-6 '>
                Experiment Marks and Lab Selection
              </h2>

              <div className='mb-4'>
                <label
                  className='block text-dark-imperial-blue text-sm font-semibold mb-2 '
                  htmlFor='subject'
                >
                  Subject (Lab)
                </label>
                <select
                  id='subject'
                  name='subject'
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className='w-full  px-4 py-2 border border-gray-300 rounded-md placeholder-smoky-black text-smoky-black bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'
                >
                  <option value=''>Select Lab</option>
                  {labs.map((lab) => (
                    <option key={lab} value={lab}>
                      {lab}
                    </option>
                  ))}
                </select>
              </div>

              <div className='mb-4'>
                <label
                  className='block text-dark-imperial-blue text-sm font-semibold mb-2 '
                  htmlFor='marks'
                >
                  Marks
                </label>
                <input
                  type='number'
                  id='marks'
                  name='marks'
                  required
                  value={formData.marks}
                  onChange={handleChange}
                  className='w-full  px-4 py-2 border border-gray-300 rounded-md placeholder-smoky-black text-smoky-black bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'
                  placeholder='Marks'
                />
              </div>

              <div className='flex justify-between'>
                <button
                  type='button'
                  onClick={prevStep}
                  className='bg-smoky-black text-white-smoke px-7 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500 text-sm'
                >
                  Back
                </button>
                <button
                  type='submit'
                  className='bg-palatinate-blue text-white-smoke px-5 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-palatinate-blue text-sm'
                >
                  Submit
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </>
  );
}

ExperimentForm.propTypes = {
  labs: PropTypes.array.isRequired,
};
