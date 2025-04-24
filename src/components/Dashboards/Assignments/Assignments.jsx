// import { useState } from 'react';
// import PropTypes from 'prop-types';

// export default function AssignmentForm({ courses, labs }) {
//   const [formData, setFormData] = useState({
//     name: '',
//     instruction: '',
//     dateOfPerformance: '',
//     dateOfSubmission: '',
//     subjectType: 'Course',
//     subject: '',
//     marks: '',
//   });

//   const [currentStep, setCurrentStep] = useState(1);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleNextStep = () => {
//     setCurrentStep((prevStep) => Math.min(prevStep + 1, 3));
//   };

//   const handlePrevStep = () => {
//     setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//   };

//   const availableSubjects = formData.subjectType === 'Course' ? courses : labs;

//   const renderStep = () => {
//     switch (currentStep) {
//       case 1:
//         return (
//           <>
//             <h3 className='text-2xl font-semibold text-dark-imperial-blue mb-6 text-center'>
//               Basic Assignment Information
//             </h3>
//             <div className='mb-4'>
//               <label className='block text-dark-imperial-blue text-sm font-medium mb-2'>
//                 Assignment Name
//               </label>
//               <input
//                 type='text'
//                 name='name'
//                 required
//                 value={formData.name}
//                 onChange={handleChange}
//                 className='w-full px-3 py-2 border border-gray-300 rounded-md bg-white-smoke text-smoky-black
//                           focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue outline-none'
//                 placeholder='Enter assignment name'
//               />
//             </div>

//             <div className='mb-4'>
//               <label className='block text-dark-imperial-blue text-sm font-medium mb-2'>
//                 Instructions
//               </label>
//               <textarea
//                 name='instruction'
//                 required
//                 value={formData.instruction}
//                 onChange={handleChange}
//                 className='w-full px-3 py-2 border border-gray-300 rounded-md bg-white-smoke text-smoky-black
//                           focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue outline-none'
//                 placeholder='Enter instructions'
//                 rows='3'
//               />
//             </div>
//           </>
//         );
//       case 2:
//         return (
//           <>
//             <h3 className='text-2xl font-semibold text-dark-imperial-blue mb-6 text-center'>
//               Assignment Dates
//             </h3>
//             <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
//               <div>
//                 <label className='block text-dark-imperial-blue text-sm font-medium mb-2'>
//                   Date of Performance
//                 </label>
//                 <input
//                   type='date'
//                   name='dateOfPerformance'
//                   required
//                   value={formData.dateOfPerformance}
//                   onChange={handleChange}
//                   className='w-full px-3 py-2 border border-gray-300 rounded-md bg-white-smoke text-smoky-black
//                             focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue outline-none'
//                 />
//               </div>

//               <div>
//                 <label className='block text-dark-imperial-blue text-sm font-medium mb-2'>
//                   Date of Submission
//                 </label>
//                 <input
//                   type='date'
//                   name='dateOfSubmission'
//                   required
//                   value={formData.dateOfSubmission}
//                   onChange={handleChange}
//                   className='w-full px-3 py-2 border border-gray-300 rounded-md bg-white-smoke text-smoky-black
//                             focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue outline-none'
//                 />
//               </div>
//             </div>
//           </>
//         );
//       case 3:
//         return (
//           <>
//             <h3 className='text-2xl font-semibold text-dark-imperial-blue mb-6 text-center'>
//               Subject & Marks
//             </h3>
//             <div className='mb-4'>
//               <label className='block text-dark-imperial-blue text-sm font-medium mb-2'>
//                 Subject Type
//               </label>
//               <select
//                 name='subjectType'
//                 required
//                 value={formData.subjectType}
//                 onChange={handleChange}
//                 className='w-full px-3 py-2 border border-gray-300 rounded-md bg-white-smoke text-smoky-black
//                           focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue outline-none'>
//                 <option value='Course'>Course</option>
//                 <option value='Lab'>Lab</option>
//               </select>
//             </div>

//             <div className='mb-4'>
//               <label className='block text-dark-imperial-blue text-sm font-medium mb-2'>
//                 Subject
//               </label>
//               <select
//                 name='subject'
//                 required
//                 value={formData.subject}
//                 onChange={handleChange}
//                 className='w-full px-3 py-2 border border-gray-300 rounded-md bg-white-smoke text-smoky-black
//                           focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue outline-none'>
//                 <option value=''>Select Subject</option>
//                 {availableSubjects.map((subject) => (
//                   <option key={subject} value={subject}>
//                     {subject}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             <div className='mb-4'>
//               <label className='block text-dark-imperial-blue text-sm font-medium mb-2'>
//                 Marks
//               </label>
//               <input
//                 type='number'
//                 name='marks'
//                 required
//                 value={formData.marks}
//                 onChange={handleChange}
//                 className='w-full px-3 py-2 border border-gray-300 rounded-md bg-white-smoke text-smoky-black
//                           focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue outline-none'
//                 placeholder='Enter marks'
//               />
//             </div>
//           </>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className='flex justify-center items-center min-h-screen p-4'>
//       <form
//         className='w-full max-w-lg p-6 md:p-8 bg-lavender-web shadow-lg rounded-lg'
//         onSubmit={handleSubmit}>
//         {renderStep()}
//         <div className='flex justify-between mt-5'>
//           {currentStep > 1 && (
//             <button
//               type='button'
//               onClick={handlePrevStep}
//               className='bg-gray-500 text-white px-6 py-2 rounded-md hover:bg-gray-600 transition duration-200'>
//               Previous
//             </button>
//           )}
//           {currentStep < 3 ? (
//             <button
//               type='button'
//               onClick={handleNextStep}
//               className='bg-palatinate-blue text-white px-6 py-2 rounded-md hover:bg-dark-imperial-blue transition duration-200'>
//               Next
//             </button>
//           ) : (
//             <button
//               type='submit'
//               className='bg-palatinate-blue text-white px-6 py-2 rounded-md hover:bg-dark-imperial-blue transition duration-200'>
//               Submit
//             </button>
//           )}
//         </div>
//       </form>
//     </div>
//   );
// }

// AssignmentForm.propTypes = {
//   courses: PropTypes.array.isRequired,
//   labs: PropTypes.array.isRequired,
// };

import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function AssignmentForm({ courses, labs }) {
  // State for assignment list
  const [assignments, setAssignments] = useState([]);
  // State for showing/hiding the form
  const [showForm, setShowForm] = useState(false);
  // Form data state
  const [formData, setFormData] = useState({
    name: '',
    instruction: '',
    dateOfPerformance: '',
    dateOfSubmission: '',
    subjectType: 'Course',
    subject: '',
    marks: '',
  });
  // Step state
  const [currentStep, setCurrentStep] = useState(1);

  // Load assignments from localStorage on component mount
  useEffect(() => {
    const savedAssignments = localStorage.getItem('assignments');
    if (savedAssignments) {
      setAssignments(JSON.parse(savedAssignments));
    }
  }, []);

  // Save assignments to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('assignments', JSON.stringify(assignments));
  }, [assignments]);

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

    // Create a new assignment object
    const newAssignment = {
      id: Date.now(), // Generate a unique ID
      ...formData,
      dateAdded: new Date().toISOString(),
    };

    // Add new assignment to the list
    setAssignments([...assignments, newAssignment]);

    // Reset form
    resetForm();

    // Hide form and show assignment list
    setShowForm(false);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      instruction: '',
      dateOfPerformance: '',
      dateOfSubmission: '',
      subjectType: 'Course',
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

  const availableSubjects = formData.subjectType === 'Course' ? courses : labs;

  return (
    <div className='container mx-auto px-4 py-8 max-w-6xl'>
      {!showForm ? (
        // Assignment List View
        <>
          <div className='flex justify-between items-center mb-8'>
            <h2 className='text-3xl font-bold text-dark-imperial-blue'>
              Assignment Management
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
              Add New Assignment
            </button>
          </div>

          {assignments.length === 0 ? (
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
                  d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                />
              </svg>
              <h3 className='text-xl font-semibold text-gray-700 mb-2'>
                No Assignments Added Yet
              </h3>
              <p className='text-gray-500 text-center max-w-md mb-6'>
                Start by adding your first assignment.
              </p>
              <button
                onClick={() => setShowForm(true)}
                className='bg-palatinate-blue text-white px-6 py-2 rounded-full hover:bg-dark-imperial-blue transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-palatinate-blue'>
                Add First Assignment
              </button>
            </div>
          ) : (
            // Assignment cards grid
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {assignments.map((assignment) => (
                <div
                  key={assignment.id}
                  className='bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300'>
                  <div className='bg-lavender-web p-4 border-b border-gray-100'>
                    <h3 className='text-xl font-bold text-dark-imperial-blue truncate'>
                      {assignment.name}
                    </h3>
                    <p className='text-smoky-black font-medium mt-1'>
                      {assignment.subjectType}: {assignment.subject}
                    </p>
                  </div>

                  <div className='p-4'>
                    <div className='mb-3'>
                      <h4 className='text-sm font-semibold text-gray-600 mb-1'>
                        Instructions:
                      </h4>
                      <p className='text-smoky-black'>
                        {assignment.instruction.length > 100
                          ? `${assignment.instruction.substring(0, 100)}...`
                          : assignment.instruction}
                      </p>
                    </div>

                    <div className='grid grid-cols-2 gap-y-2 text-sm mt-4'>
                      <div className='text-gray-600'>Performance Date:</div>
                      <div className='font-medium text-dark-imperial-blue'>
                        {formatDate(assignment.dateOfPerformance)}
                      </div>

                      <div className='text-gray-600'>Submission Date:</div>
                      <div className='font-medium text-dark-imperial-blue'>
                        {formatDate(assignment.dateOfSubmission)}
                      </div>

                      <div className='text-gray-600'>Marks:</div>
                      <div className='font-medium text-dark-imperial-blue'>
                        {assignment.marks}
                      </div>

                      <div className='text-gray-600'>Added On:</div>
                      <div className='font-medium text-dark-imperial-blue'>
                        {formatDate(assignment.dateAdded)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      ) : (
        // Assignment Form
        <div className='flex justify-center items-center'>
          <div className='flex justify-center items-center w-full max-w-md bg-lavender-web rounded-xl'>
            <form
              className='mx-auto p-6 shadow-lg rounded-lg w-full'
              onSubmit={handleSubmit}>
              <div className='flex justify-between items-center mb-6'>
                <h3 className='text-2xl font-bold text-dark-imperial-blue'>
                  Add Assignment - Step {currentStep}/3
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
                    Basic Assignment Information
                  </h3>
                  <div className='mb-4'>
                    <label
                      className='block text-dark-imperial-blue text-sm font-semibold mb-2'
                      htmlFor='name'>
                      Assignment Name
                    </label>
                    <input
                      type='text'
                      id='name'
                      name='name'
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className='w-full px-4 py-2 border border-gray-300 rounded-md placeholder-smoky-black text-smoky-black bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'
                      placeholder='Enter Assignment Name'
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
                    Assignment Dates
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
                    Subject & Marks
                  </h3>
                  <div className='mb-4'>
                    <label
                      className='block text-dark-imperial-blue text-sm font-semibold mb-2'
                      htmlFor='subjectType'>
                      Subject Type
                    </label>
                    <select
                      id='subjectType'
                      name='subjectType'
                      required
                      value={formData.subjectType}
                      onChange={handleChange}
                      className='w-full px-4 py-2 border border-gray-300 rounded-md text-smoky-black bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'>
                      <option value='Course'>Course</option>
                      <option value='Lab'>Lab</option>
                    </select>
                  </div>

                  <div className='mb-4'>
                    <label
                      className='block text-dark-imperial-blue text-sm font-semibold mb-2'
                      htmlFor='subject'>
                      Subject
                    </label>
                    <select
                      id='subject'
                      name='subject'
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className='w-full px-4 py-2 border border-gray-300 rounded-md text-smoky-black bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'>
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

AssignmentForm.propTypes = {
  courses: PropTypes.arrayOf(PropTypes.string).isRequired,
  labs: PropTypes.arrayOf(PropTypes.string).isRequired,
};
