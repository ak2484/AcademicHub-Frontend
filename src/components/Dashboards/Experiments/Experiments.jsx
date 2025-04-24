// import { useState } from "react";
// import PropTypes from "prop-types";

// export default function ExperimentForm({ labs }) {
//   const [formData, setFormData] = useState({
//     name: "",
//     instruction: "",
//     dateOfPerformance: "",
//     dateOfSubmission: "",
//     subject: "",
//     marks: "",
//   });

//   // Step state
//   const [currentStep, setCurrentStep] = useState(0);

//   // Handle input change
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//   };

//   // Move to the next step
//   const nextStep = () => {
//     setCurrentStep((prevStep) => Math.min(prevStep + 1, 2));
//   };

//   // Move to the previous step
//   const prevStep = () => {
//     setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
//   };

//   return (
//     <>
//       <div className='flex justify-center items-center w-auto bg-lavender-web rounded-xl'>
//         <form
//           className='mx-auto p-6  bg-white shadow-lg rounded-lg w-[400px]'
//           onSubmit={handleSubmit}
//         >
//           {currentStep === 0 && (
//             <div>
//               <h3 className='text-2xl font-semibold text-dark-imperial-blue mb-6 '>
//                 Basic Experiment Information
//               </h3>

//               <div className='mb-4'>
//                 <label
//                   className='block text-dark-imperial-blue text-sm font-semibold mb-2 '
//                   htmlFor='name'
//                 >
//                   Experiment Name
//                 </label>
//                 <input
//                   type='text'
//                   id='name'
//                   name='name'
//                   required
//                   value={formData.name}
//                   onChange={handleChange}
//                   className='w-full  px-4 py-2 border border-gray-300 rounded-md placeholder-smoky-black text-smoky-black bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'
//                   placeholder='Enter experiment name'
//                 />
//               </div>

//               <div className='mb-4'>
//                 <label
//                   className='block text-dark-imperial-blue text-sm font-semibold mb-2 '
//                   htmlFor='instruction'
//                 >
//                   Instructions
//                 </label>
//                 <textarea
//                   id='instruction'
//                   name='instruction'
//                   required
//                   value={formData.instruction}
//                   onChange={handleChange}
//                   className='w-full  px-4 py-2 border border-gray-300 rounded-md placeholder-smoky-black text-smoky-black bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'
//                   placeholder='Enter the instruction'
//                 />
//               </div>

//               <div className='flex justify-end'>
//                 <button
//                   type='button'
//                   onClick={nextStep}
//                   className='bg-palatinate-blue text-white-smoke px-5 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-200 text-sm'
//                 >
//                   Next
//                 </button>
//               </div>
//             </div>
//           )}

//           {currentStep === 1 && (
//             <div>
//               <h2 className='text-2xl font-bold text-dark-imperial-blue mb-6 '>
//                 Set Experiment Dates
//               </h2>

//               <div className='mb-4'>
//                 <label
//                   className='block text-dark-imperial-blue text-sm font-semibold mb-2 '
//                   htmlFor='dateOfPerformance'
//                 >
//                   Date of Performance
//                 </label>
//                 <input
//                   type='date'
//                   id='dateOfPerformance'
//                   name='dateOfPerformance'
//                   required
//                   value={formData.dateOfPerformance}
//                   onChange={handleChange}
//                   className='w-full  px-4 py-2 border border-gray-300 rounded-md placeholder-smoky-black text-smoky-black bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'
//                 />
//               </div>

//               <div className='mb-4'>
//                 <label
//                   className='block text-dark-imperial-blue text-sm font-semibold mb-2 '
//                   htmlFor='dateOfSubmission'
//                 >
//                   Date of Submission
//                 </label>
//                 <input
//                   type='date'
//                   id='dateOfSubmission'
//                   name='dateOfSubmission'
//                   required
//                   value={formData.dateOfSubmission}
//                   onChange={handleChange}
//                   className='w-full  px-4 py-2 border border-gray-300 rounded-md placeholder-smoky-black text-smoky-black bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'
//                 />
//               </div>

//               <div className='flex justify-between'>
//                 <button
//                   type='button'
//                   onClick={prevStep}
//                   className='bg-smoky-black text-white-smoke px-5 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500 text-sm'
//                 >
//                   Back
//                 </button>
//                 <button
//                   type='button'
//                   onClick={nextStep}
//                   className='bg-palatinate-blue text-white-smoke px-5 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-palatinate-blue text-sm'
//                 >
//                   Next
//                 </button>
//               </div>
//             </div>
//           )}

//           {currentStep === 2 && (
//             <div>
//               <h2 className='text-2xl font-bold text-dark-imperial-blue mb-6 '>
//                 Experiment Marks and Lab Selection
//               </h2>

//               <div className='mb-4'>
//                 <label
//                   className='block text-dark-imperial-blue text-sm font-semibold mb-2 '
//                   htmlFor='subject'
//                 >
//                   Subject (Lab)
//                 </label>
//                 <select
//                   id='subject'
//                   name='subject'
//                   required
//                   value={formData.subject}
//                   onChange={handleChange}
//                   className='w-full  px-4 py-2 border border-gray-300 rounded-md placeholder-smoky-black text-smoky-black bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'
//                 >
//                   <option value=''>Select Lab</option>
//                   {labs.map((lab) => (
//                     <option key={lab} value={lab}>
//                       {lab}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div className='mb-4'>
//                 <label
//                   className='block text-dark-imperial-blue text-sm font-semibold mb-2 '
//                   htmlFor='marks'
//                 >
//                   Marks
//                 </label>
//                 <input
//                   type='number'
//                   id='marks'
//                   name='marks'
//                   required
//                   value={formData.marks}
//                   onChange={handleChange}
//                   className='w-full  px-4 py-2 border border-gray-300 rounded-md placeholder-smoky-black text-smoky-black bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'
//                   placeholder='Marks'
//                 />
//               </div>

//               <div className='flex justify-between'>
//                 <button
//                   type='button'
//                   onClick={prevStep}
//                   className='bg-smoky-black text-white-smoke px-7 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500 text-sm'
//                 >
//                   Back
//                 </button>
//                 <button
//                   type='submit'
//                   className='bg-palatinate-blue text-white-smoke px-5 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-palatinate-blue text-sm'
//                 >
//                   Submit
//                 </button>
//               </div>
//             </div>
//           )}
//         </form>
//       </div>
//     </>
//   );
// }

// ExperimentForm.propTypes = {
//   labs: PropTypes.array.isRequired,
// };

import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function ExperimentForm({ labs }) {
  // State for experiment list
  const [experiments, setExperiments] = useState([]);
  // State for showing/hiding the form
  const [showForm, setShowForm] = useState(false);
  // Form data state
  const [formData, setFormData] = useState({
    name: '',
    instruction: '',
    dateOfPerformance: '',
    dateOfSubmission: '',
    subject: '',
    marks: '',
  });
  // Step state
  const [currentStep, setCurrentStep] = useState(1);

  // Load experiments from localStorage on component mount
  useEffect(() => {
    const savedExperiments = localStorage.getItem('experiments');
    if (savedExperiments) {
      setExperiments(JSON.parse(savedExperiments));
    }
  }, []);

  // Save experiments to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('experiments', JSON.stringify(experiments));
  }, [experiments]);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new experiment object
    const newExperiment = {
      id: Date.now(), // Generate a unique ID
      ...formData,
      dateAdded: new Date().toISOString(),
    };

    // Add new experiment to the list
    setExperiments([...experiments, newExperiment]);

    // Reset form
    resetForm();

    // Hide form and show experiment list
    setShowForm(false);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      instruction: '',
      dateOfPerformance: '',
      dateOfSubmission: '',
      subject: '',
      marks: '',
    });
    setCurrentStep(1);
  };

  // Format the date to a readable format
  const formatDate = (dateString) => {
    if (!dateString) return '';

    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    } catch (e) {
      return dateString;
    }
  };

  return (
    <div className='container mx-auto px-4 py-8 max-w-6xl'>
      {!showForm ? (
        // Experiment List View
        <>
          <div className='flex justify-between items-center mb-8'>
            <h2 className='text-3xl font-bold text-dark-imperial-blue'>
              Experiment Management
            </h2>
            <button
              onClick={() => setShowForm(true)}
              className='bg-palatinate-blue text-white px-5 py-2 rounded-full hover:bg-dark-imperial-blue transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-palatinate-blue flex items-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5 mr-2'
                viewBox='0 0 20 20'
                fill='currentColor'>
                <path
                  fillRule='evenodd'
                  d='M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z'
                  clipRule='evenodd'
                />
              </svg>
              Add New Experiment
            </button>
          </div>

          {experiments.length === 0 ? (
            // Empty state
            <div className='flex flex-col items-center justify-center py-16 bg-gray-50 rounded-xl border border-gray-200'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-16 w-16 text-gray-400 mb-4'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={1}
                  d='M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z'
                />
              </svg>
              <h3 className='text-xl font-semibold text-gray-700 mb-2'>
                No Experiments Added Yet
              </h3>
              <p className='text-gray-500 text-center max-w-md mb-6'>
                Start by adding your first experiment.
              </p>
              <button
                onClick={() => setShowForm(true)}
                className='bg-palatinate-blue text-white px-6 py-2 rounded-full hover:bg-dark-imperial-blue transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-palatinate-blue'>
                Add First Experiment
              </button>
            </div>
          ) : (
            // Experiment cards grid
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {experiments.map((experiment) => (
                <div
                  key={experiment.id}
                  className='bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300'>
                  <div className='bg-lavender-web p-4 border-b border-gray-100'>
                    <h3 className='text-xl font-bold text-dark-imperial-blue truncate'>
                      {experiment.name}
                    </h3>
                    <p className='text-smoky-black font-medium mt-1'>
                      Lab: {experiment.subject}
                    </p>
                  </div>

                  <div className='p-4'>
                    <div className='mb-3'>
                      <h4 className='text-sm font-semibold text-gray-600 mb-1'>
                        Instructions:
                      </h4>
                      <p className='text-smoky-black'>
                        {experiment.instruction.length > 100
                          ? `${experiment.instruction.substring(0, 100)}...`
                          : experiment.instruction}
                      </p>
                    </div>

                    <div className='grid grid-cols-2 gap-y-2 text-sm mt-4'>
                      <div className='text-gray-600'>Performance Date:</div>
                      <div className='font-medium text-dark-imperial-blue'>
                        {formatDate(experiment.dateOfPerformance)}
                      </div>

                      <div className='text-gray-600'>Submission Date:</div>
                      <div className='font-medium text-dark-imperial-blue'>
                        {formatDate(experiment.dateOfSubmission)}
                      </div>

                      <div className='text-gray-600'>Marks:</div>
                      <div className='font-medium text-dark-imperial-blue'>
                        {experiment.marks}
                      </div>

                      <div className='text-gray-600'>Added On:</div>
                      <div className='font-medium text-dark-imperial-blue'>
                        {formatDate(experiment.dateAdded)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      ) : (
        // Experiment Form
        <div className='flex justify-center items-center'>
          <div className='flex justify-center items-center w-full max-w-md bg-lavender-web rounded-xl'>
            <form
              className='mx-auto p-6 shadow-lg rounded-lg w-full'
              onSubmit={handleSubmit}>
              <div className='flex justify-between items-center mb-6'>
                <h3 className='text-2xl font-bold text-dark-imperial-blue'>
                  Add Experiment - Step {currentStep}/3
                </h3>
                <button
                  type='button'
                  onClick={() => setShowForm(false)}
                  className='text-smoky-black hover:text-palatinate-blue focus:outline-none'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                </button>
              </div>

              {currentStep === 1 && (
                <>
                  <h3 className='text-xl font-bold text-dark-imperial-blue mb-6'>
                    Basic Experiment Information
                  </h3>
                  <div className='mb-4'>
                    <label
                      className='block text-dark-imperial-blue text-sm font-semibold mb-2'
                      htmlFor='name'>
                      Experiment Name
                    </label>
                    <input
                      type='text'
                      id='name'
                      name='name'
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className='w-full px-4 py-2 border border-gray-300 rounded-md placeholder-smoky-black text-smoky-black bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'
                      placeholder='Enter Experiment Name'
                    />
                  </div>

                  <div className='mb-4'>
                    <label
                      className='block text-dark-imperial-blue text-sm font-semibold mb-2'
                      htmlFor='instruction'>
                      Instructions
                    </label>
                    <textarea
                      id='instruction'
                      name='instruction'
                      required
                      value={formData.instruction}
                      onChange={handleChange}
                      className='w-full px-4 py-2 border border-gray-300 rounded-md placeholder-smoky-black text-smoky-black bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'
                      placeholder='Enter Instructions'
                      rows='3'
                    />
                  </div>
                </>
              )}

              {currentStep === 2 && (
                <>
                  <h3 className='text-xl font-bold text-dark-imperial-blue mb-6'>
                    Experiment Dates
                  </h3>
                  <div className='mb-4'>
                    <label
                      className='block text-dark-imperial-blue text-sm font-semibold mb-2'
                      htmlFor='dateOfPerformance'>
                      Date of Performance
                    </label>
                    <input
                      type='date'
                      id='dateOfPerformance'
                      name='dateOfPerformance'
                      required
                      value={formData.dateOfPerformance}
                      onChange={handleChange}
                      className='w-full px-4 py-2 border border-gray-300 rounded-md text-smoky-black bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'
                    />
                  </div>

                  <div className='mb-4'>
                    <label
                      className='block text-dark-imperial-blue text-sm font-semibold mb-2'
                      htmlFor='dateOfSubmission'>
                      Date of Submission
                    </label>
                    <input
                      type='date'
                      id='dateOfSubmission'
                      name='dateOfSubmission'
                      required
                      value={formData.dateOfSubmission}
                      onChange={handleChange}
                      className='w-full px-4 py-2 border border-gray-300 rounded-md text-smoky-black bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'
                    />
                  </div>
                </>
              )}

              {currentStep === 3 && (
                <>
                  <h3 className='text-xl font-bold text-dark-imperial-blue mb-6'>
                    Lab Selection & Marks
                  </h3>
                  <div className='mb-4'>
                    <label
                      className='block text-dark-imperial-blue text-sm font-semibold mb-2'
                      htmlFor='subject'>
                      Subject (Lab)
                    </label>
                    <select
                      id='subject'
                      name='subject'
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className='w-full px-4 py-2 border border-gray-300 rounded-md text-smoky-black bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'>
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
                      className='block text-dark-imperial-blue text-sm font-semibold mb-2'
                      htmlFor='marks'>
                      Marks
                    </label>
                    <input
                      type='number'
                      id='marks'
                      name='marks'
                      required
                      value={formData.marks}
                      onChange={handleChange}
                      className='w-full px-4 py-2 border border-gray-300 rounded-md placeholder-smoky-black text-smoky-black bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'
                      placeholder='Enter Marks'
                    />
                  </div>
                </>
              )}

              <div className='flex justify-between mt-6'>
                {currentStep > 1 ? (
                  <button
                    type='button'
                    onClick={() => setCurrentStep((prev) => prev - 1)}
                    className='bg-smoky-black text-white-smoke px-5 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500 text-sm'>
                    Back
                  </button>
                ) : (
                  <button
                    type='button'
                    onClick={() => setShowForm(false)}
                    className='bg-smoky-black text-white-smoke px-5 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500 text-sm'>
                    Cancel
                  </button>
                )}

                {currentStep < 3 ? (
                  <button
                    type='button'
                    onClick={() => setCurrentStep((prev) => prev + 1)}
                    className='bg-palatinate-blue text-white-smoke px-5 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-palatinate-blue text-sm'>
                    Next
                  </button>
                ) : (
                  <button
                    type='submit'
                    className='bg-palatinate-blue text-white-smoke px-5 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-palatinate-blue text-sm'>
                    Submit
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

ExperimentForm.propTypes = {
  labs: PropTypes.arrayOf(PropTypes.string).isRequired,
};
