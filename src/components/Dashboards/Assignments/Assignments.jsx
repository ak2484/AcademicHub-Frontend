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
            <h3 className='text-2xl font-semibold text-dark-imperial-blue mb-6'>
              Basic Assignment Information
            </h3>
            <div className='mb-4'>
              <label
                className='block text-dark-imperial-blue text-sm font-medium mb-2'
                htmlFor='name'
              >
                Assignment Name
              </label>
              <input
                type='text'
                id='name'
                name='name'
                required
                value={formData.name}
                onChange={handleChange}
                className='w-full px-3 py-2 border border-gray-300 rounded-md placeholder-smoky-black text-smoky-black bg-white focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'
                placeholder='Enter assignment name'
              />
            </div>

            <div className='mb-4'>
              <label
                className='block text-dark-imperial-blue text-sm font-medium mb-2'
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
                className='w-full px-3 py-2 border border-gray-300 rounded-md placeholder-smoky-black text-smoky-black bg-white focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'
                placeholder='Enter instructions'
              />
            </div>
          </>
        );
      case 2:
        return (
          <>
            <h3 className='text-2xl font-semibold text-dark-imperial-blue mb-6'>
              Assignment Dates
            </h3>
            <div className='mb-4'>
              <label
                className='block text-dark-imperial-blue text-sm font-medium mb-2'
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
                className='w-full px-3 py-2 border border-gray-300 rounded-md placeholder-smoky-black text-smoky-black bg-white focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'
              />
            </div>

            <div className='mb-4'>
              <label
                className='block text-dark-imperial-blue text-sm font-medium mb-2'
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
                className='w-full px-3 py-2 border border-gray-300 rounded-md placeholder-smoky-black text-smoky-black bg-white focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'
              />
            </div>
          </>
        );
      case 3:
        return (
          <>
            <h3 className='text-2xl font-semibold text-dark-imperial-blue mb-6'>
              Subject & Marks
            </h3>
            <div className='mb-4'>
              <label
                className='block text-dark-imperial-blue text-sm font-medium mb-2'
                htmlFor='subjectType'
              >
                Subject Type
              </label>
              <select
                id='subjectType'
                name='subjectType'
                required
                value={formData.subjectType}
                onChange={handleChange}
                className='w-full px-3 py-2 border border-gray-300 rounded-md text-smoky-black bg-white focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'
              >
                <option value='Course'>Course</option>
                <option value='Lab'>Lab</option>
              </select>
            </div>

            <div className='mb-4'>
              <label
                className='block text-dark-imperial-blue text-sm font-medium mb-2'
                htmlFor='subject'
              >
                Subject
              </label>
              <select
                id='subject'
                name='subject'
                required
                value={formData.subject}
                onChange={handleChange}
                className='w-full px-3 py-2 border border-gray-300 rounded-md text-smoky-black bg-white focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'
              >
                <option value=''>Select Subject</option>
                {availableSubjects.map((subject) => (
                  <option key={subject} value={subject}>
                    {subject}
                  </option>
                ))}
              </select>
            </div>

            <div className='mb-4'>
              <label
                className='block text-dark-imperial-blue text-sm font-medium mb-2'
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
                className='w-full px-3 py-2 border border-gray-300 rounded-md placeholder-smoky-black text-smoky-black bg-white focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'
                placeholder='Enter marks'
              />
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className='flex justify-center items-center min-h-screen'>
      <form
        className='mx-auto p-8 bg-lavender-web shadow-lg rounded-lg w-[400px]'
        onSubmit={handleSubmit}
      >
        {renderStep()}
        <div className='flex  justify-between mt-5'>
          {currentStep > 1 && (
            <button
              type='button'
              onClick={handlePrevStep}
              className='bg-smoky-black text-white-smoke px-6 py-2 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-gray-500'
            >
              Previous
            </button>
          )}
          {currentStep < 3 ? (
            <button
              type='button'
              onClick={handleNextStep}
              className='bg-palatinate-blue text-white-smoke px-6 py-2 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-palatinate-blue'
            >
              Next
            </button>
          ) : (
            <button
              type='submit'
              className='bg-palatinate-blue text-white-smoke px-6 py-2 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-palatinate-blue'
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
