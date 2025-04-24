// import { useState } from "react";
// import PropTypes from "prop-types";

// /*
//   ExamForm - for creating examinations
//   fields: name (required, textbox), description (textbox), subjectType (required, selection[Course, Lab]), subject (required, selection[available course or lab]), year (required, number), semester (required, number), examDate (required, date), marks (required, number), startTime (required, time), endTime (required, time).
// */

// export default function ExamForm({ courses, labs }) {
//   const [formData, setFormData] = useState({
//     name: "",
//     description: "",
//     subjectType: "Course",
//     subject: "",
//     year: "",
//     semester: "",
//     examDate: "",
//     marks: "",
//     startTime: "",
//     endTime: "",
//   });

//   const [currentStep, setCurrentStep] = useState(1);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//       ...(name === "subjectType" && { subject: "" }), // Clear subject when subjectType changes
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Submit the form data
//     console.log(formData);
//   };

//   const availableSubjects = formData.subjectType === "Course" ? courses : labs;

//   const years = ["1", "2", "3", "4"];
//   const semesters = ["1", "2", "3", "4", "5", "6", "7", "8"];

//   const renderStep = () => {
//     switch (currentStep) {
//       case 1:
//         return (
//           <>
//             <h3 className='text-2xl font-bold text-dark-imperial-blue mb-6'>
//               Exam Information
//             </h3>
//             <div className='mb-4 '>
//               <label
//                 className='block text-dark-imperial-blue text-sm font-semibold mb-2'
//                 htmlFor='name'
//               >
//                 Exam Name
//               </label>
//               <input
//                 type='text'
//                 id='name'
//                 name='name'
//                 required
//                 value={formData.name}
//                 onChange={handleChange}
//                 className='w-full px-4 py-2 border border-gray-300 rounded-md placeholder-smoky-black text-smoky-black bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'
//                 placeholder='Enter exam name'
//               />
//             </div>

//             <div className='mb-4'>
//               <label
//                 className='block text-dark-imperial-blue text-sm font-semibold mb-2'
//                 htmlFor='description'
//               >
//                 Description
//               </label>
//               <textarea
//                 id='description'
//                 name='description'
//                 value={formData.description}
//                 onChange={handleChange}
//                 className='w-full px-4 py-2 border border-gray-300 rounded-md placeholder-smoky-black text-smoky-black bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'
//                 placeholder='Enter description'
//               />
//             </div>

//             <div className='mb-4'>
//               <label
//                 className='block text-dark-imperial-blue text-sm font-semibold mb-2'
//                 htmlFor='subjectType'
//               >
//                 Subject Type
//               </label>
//               <select
//                 id='subjectType'
//                 name='subjectType'
//                 required
//                 value={formData.subjectType}
//                 onChange={handleChange}
//                 className='w-full px-4 py-2 border border-gray-300 rounded-md text-smoky-black bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'
//               >
//                 <option value='Course'>Course</option>
//                 <option value='Lab'>Lab</option>
//               </select>
//             </div>

//             <div className='mb-4'>
//               <label
//                 className='block text-dark-imperial-blue text-sm font-semibold mb-2'
//                 htmlFor='subject'
//               >
//                 Subject
//               </label>
//               <select
//                 id='subject'
//                 name='subject'
//                 required
//                 value={formData.subject}
//                 onChange={handleChange}
//                 className='w-full px-4 py-2 border border-gray-300 rounded-md text-smoky-black bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'
//               >
//                 <option value=''>Select Subject</option>
//                 {availableSubjects.map((subject) => (
//                   <option key={subject} value={subject}>
//                     {subject}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </>
//         );

//       case 2:
//         return (
//           <>
//             <h3 className='text-2xl font-bold text-dark-imperial-blue mb-6'>
//               Exam Dates & Details
//             </h3>
//             <div className='mb-4'>
//               <label
//                 className='block text-dark-imperial-blue text-sm font-semibold mb-2'
//                 htmlFor='year'
//               >
//                 Year
//               </label>
//               <select
//                 id='year'
//                 name='year'
//                 required
//                 value={formData.year}
//                 onChange={handleChange}
//                 className='w-full px-4 py-2 border border-gray-300 rounded-md text-smoky-black bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'
//               >
//                 <option value=''>Select Year</option>
//                 {years.map((year) => (
//                   <option key={year} value={year}>
//                     {year}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             <div className='mb-4'>
//               <label
//                 className='block text-dark-imperial-blue text-sm font-semibold mb-2'
//                 htmlFor='semester'
//               >
//                 Semester
//               </label>
//               <select
//                 id='semester'
//                 name='semester'
//                 required
//                 value={formData.semester}
//                 onChange={handleChange}
//                 className='w-full px-4 py-2 border border-gray-300 rounded-md text-smoky-black bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'
//               >
//                 <option value=''>Select Semester</option>
//                 {semesters.map((semester) => (
//                   <option key={semester} value={semester}>
//                     {semester}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             <div className='mb-4'>
//               <label
//                 className='block text-dark-imperial-blue text-sm font-semibold mb-2'
//                 htmlFor='examDate'
//               >
//                 Exam Date
//               </label>
//               <input
//                 type='date'
//                 id='examDate'
//                 name='examDate'
//                 required
//                 value={formData.examDate}
//                 onChange={handleChange}
//                 className='w-full px-4 py-2 border border-gray-300 rounded-md text-smoky-black bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'
//               />
//             </div>
//           </>
//         );

//       case 3:
//         return (
//           <>
//             <h3 className='text-2xl font-bold text-dark-imperial-blue mb-6'>
//               Marks & Timing
//             </h3>
//             <div className='mb-4'>
//               <label
//                 className='block text-dark-imperial-blue text-sm font-semibold mb-2'
//                 htmlFor='marks'
//               >
//                 Marks
//               </label>
//               <input
//                 type='number'
//                 id='marks'
//                 name='marks'
//                 required
//                 value={formData.marks}
//                 onChange={handleChange}
//                 className='w-full px-4 py-2 border border-gray-300 rounded-md placeholder-smoky-black text-smoky-black bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'
//                 placeholder='Enter marks'
//               />
//             </div>

//             <div className='mb-4'>
//               <label
//                 className='block text-dark-imperial-blue text-sm font-semibold mb-2'
//                 htmlFor='startTime'
//               >
//                 Start Time
//               </label>
//               <input
//                 type='time'
//                 id='startTime'
//                 name='startTime'
//                 required
//                 value={formData.startTime}
//                 onChange={handleChange}
//                 className='w-full px-4 py-2 border border-gray-300 rounded-md text-smoky-black bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'
//               />
//             </div>

//             <div className='mb-4'>
//               <label
//                 className='block text-dark-imperial-blue text-sm font-semibold mb-2'
//                 htmlFor='endTime'
//               >
//                 End Time
//               </label>
//               <input
//                 type='time'
//                 id='endTime'
//                 name='endTime'
//                 required
//                 value={formData.endTime}
//                 onChange={handleChange}
//                 className='w-full px-4 py-2 border border-gray-300 rounded-md text-smoky-black bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'
//               />
//             </div>
//           </>
//         );

//       default:
//         return null;
//     }
//   };

//   return (
//     <form
//       className='max-w-xl mx-auto p-6 bg-lavender-web shadow-lg rounded-lg w-[400px]'
//       onSubmit={handleSubmit}
//     >
//       {renderStep()}

//       <div className='flex justify-between mt-6'>
//         {currentStep > 1 && (
//           <button
//             type='button'
//             onClick={() => setCurrentStep((prev) => prev - 1)}
//             className='px-5 flex py-2 bg-smoky-black text-white-smoke rounded-full hover:bg-gray  focus:outline-none focus:ring-2 focus:ring-gray-500 justify-start'
//           >
//             Previous
//           </button>
//         )}
//         {currentStep < 3 ? (
//           <button
//             type='button'
//             onClick={() => setCurrentStep((prev) => prev + 1)}
//             className='flex px-10 py-2 bg-palatinate-blue text-white-smoke rounded-full hover:bg-risd-blue focus:outline-none focus:ring-2 focus:ring-blue-500 justify-end '
//           >
//             Next
//           </button>
//         ) : (
//           <button
//             type='submit'
//             className='px-7 py-2 bg-palatinate-blue text-white-smoke rounded-full hover:bg-risd-blue focus:outline-none focus:ring-2 '
//           >
//             Submit
//           </button>
//         )}
//       </div>
//     </form>
//   );
// }

// ExamForm.propTypes = {
//   courses: PropTypes.arrayOf(PropTypes.string).isRequired,
//   labs: PropTypes.arrayOf(PropTypes.string).isRequired,
// };

import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function ExamsForm({ courses, labs }) {
  // State for exam list
  const [exams, setExams] = useState([]);
  // State for showing/hiding the form
  const [showForm, setShowForm] = useState(false);
  // Form data state
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    subjectType: 'Course',
    subject: '',
    year: '',
    semester: '',
    examDate: '',
    marks: '',
    startTime: '',
    endTime: '',
  });
  const [currentStep, setCurrentStep] = useState(1);

  const availableSubjects = formData.subjectType === 'Course' ? courses : labs;
  const years = ['1', '2', '3', '4'];
  const semesters = ['1', '2', '3', '4', '5', '6', '7', '8'];

  // Load exams from localStorage on component mount
  useEffect(() => {
    const savedExams = localStorage.getItem('exams');
    if (savedExams) {
      setExams(JSON.parse(savedExams));
    }
  }, []);

  // Save exams to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('exams', JSON.stringify(exams));
  }, [exams]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      ...(name === 'subjectType' && { subject: '' }), // Clear subject when subjectType changes
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add new exam to the list
    const newExam = {
      id: Date.now(), // Generate a unique ID
      ...formData,
    };

    setExams([...exams, newExam]);

    // Reset form
    resetForm();

    // Hide form and show exam list
    setShowForm(false);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      description: '',
      subjectType: 'Course',
      subject: '',
      year: '',
      semester: '',
      examDate: '',
      marks: '',
      startTime: '',
      endTime: '',
    });
    setCurrentStep(1);
  };

  // Helper function to format time (HH:MM) to a more readable format
  const formatTime = (time) => {
    if (!time) return '';

    try {
      const [hours, minutes] = time.split(':');
      const hourNum = parseInt(hours, 10);
      const period = hourNum >= 12 ? 'PM' : 'AM';
      const hour12 = hourNum % 12 || 12;
      return `${hour12}:${minutes} ${period}`;
    } catch (e) {
      return time;
    }
  };

  // Helper function to format date (YYYY-MM-DD) to a more readable format
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

  // Determine the exam status based on date and time
  const getExamStatus = (exam) => {
    if (!exam.examDate) return 'Scheduled';

    const today = new Date();
    const examDate = new Date(exam.examDate);

    // Set hours from startTime
    if (exam.startTime) {
      const [startHours, startMinutes] = exam.startTime.split(':');
      examDate.setHours(parseInt(startHours, 10), parseInt(startMinutes, 10));
    }

    // Create end time date
    const endTimeDate = new Date(exam.examDate);
    if (exam.endTime) {
      const [endHours, endMinutes] = exam.endTime.split(':');
      endTimeDate.setHours(parseInt(endHours, 10), parseInt(endMinutes, 10));
    }

    if (today < examDate) {
      return 'Upcoming';
    } else if (today > endTimeDate) {
      return 'Completed';
    } else {
      return 'In Progress';
    }
  };

  // Get status color class
  const getStatusColor = (status) => {
    switch (status) {
      case 'Upcoming':
        return 'bg-blue-100 text-blue-800';
      case 'In Progress':
        return 'bg-yellow-100 text-yellow-800';
      case 'Completed':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className='container mx-auto px-4 py-8 max-w-6xl'>
      {!showForm ? (
        // Exam List View
        <>
          <div className='flex justify-between items-center mb-8'>
            <h2 className='text-3xl font-bold text-dark-imperial-blue'>
              Exam Management
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
              Add New Exam
            </button>
          </div>

          {exams.length === 0 ? (
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
                No Exams Scheduled Yet
              </h3>
              <p className='text-gray-500 text-center max-w-md mb-6'>
                Start creating your exam schedule by adding your first exam.
              </p>
              <button
                onClick={() => setShowForm(true)}
                className='bg-palatinate-blue text-white px-6 py-2 rounded-full hover:bg-dark-imperial-blue transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-palatinate-blue'>
                Schedule First Exam
              </button>
            </div>
          ) : (
            // Exam cards grid
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {exams.map((exam) => {
                const status = getExamStatus(exam);
                const statusColorClass = getStatusColor(status);

                return (
                  <div
                    key={exam.id}
                    className='bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300'>
                    <div className='bg-lavender-web p-4 border-b border-gray-100'>
                      <div className='flex justify-between items-start'>
                        <h3 className='text-xl font-bold text-dark-imperial-blue truncate'>
                          {exam.name}
                        </h3>
                        <span
                          className={`text-sm font-semibold px-3 py-1 rounded-full ml-2 whitespace-nowrap ${statusColorClass}`}>
                          {status}
                        </span>
                      </div>
                      <p className='text-smoky-black font-medium mt-1'>
                        {exam.subject} ({exam.subjectType})
                      </p>
                    </div>

                    <div className='p-4'>
                      {exam.description && (
                        <p className='text-gray-600 text-sm mb-3 italic'>
                          {exam.description.length > 100
                            ? `${exam.description.substring(0, 100)}...`
                            : exam.description}
                        </p>
                      )}

                      <div className='grid grid-cols-2 gap-y-2 text-sm mt-2'>
                        <div className='text-gray-600'>Year:</div>
                        <div className='font-medium text-dark-imperial-blue'>
                          {exam.year}
                        </div>

                        <div className='text-gray-600'>Semester:</div>
                        <div className='font-medium text-dark-imperial-blue'>
                          {exam.semester}
                        </div>

                        <div className='text-gray-600'>Date:</div>
                        <div className='font-medium text-dark-imperial-blue'>
                          {formatDate(exam.examDate)}
                        </div>

                        <div className='text-gray-600'>Timing:</div>
                        <div className='font-medium text-dark-imperial-blue'>
                          {formatTime(exam.startTime)} -{' '}
                          {formatTime(exam.endTime)}
                        </div>

                        <div className='text-gray-600'>Marks:</div>
                        <div className='font-medium text-dark-imperial-blue'>
                          {exam.marks}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </>
      ) : (
        // Exam Form
        <div className='flex justify-center items-center'>
          <div className='flex justify-center items-center w-full max-w-md bg-lavender-web rounded-xl'>
            <form
              className='mx-auto p-6 shadow-lg rounded-lg w-full'
              onSubmit={handleSubmit}>
              <div className='flex justify-between items-center mb-6'>
                <h3 className='text-2xl font-bold text-dark-imperial-blue'>
                  Create Exam - Step {currentStep}/3
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
                    Exam Information
                  </h3>
                  <div className='mb-4 '>
                    <label
                      className='block text-dark-imperial-blue text-sm font-semibold mb-2'
                      htmlFor='name'>
                      Exam Name
                    </label>
                    <input
                      type='text'
                      id='name'
                      name='name'
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className='w-full px-4 py-2 border border-gray-300 rounded-md placeholder-smoky-black text-smoky-black bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'
                      placeholder='Enter exam name'
                    />
                  </div>

                  <div className='mb-4'>
                    <label
                      className='block text-dark-imperial-blue text-sm font-semibold mb-2'
                      htmlFor='description'>
                      Description
                    </label>
                    <textarea
                      id='description'
                      name='description'
                      value={formData.description}
                      onChange={handleChange}
                      className='w-full px-4 py-2 border border-gray-300 rounded-md placeholder-smoky-black text-smoky-black bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'
                      placeholder='Enter description'
                    />
                  </div>

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
                </>
              )}

              {currentStep === 2 && (
                <>
                  <h3 className='text-xl font-bold text-dark-imperial-blue mb-6'>
                    Exam Dates & Details
                  </h3>
                  <div className='mb-4'>
                    <label
                      className='block text-dark-imperial-blue text-sm font-semibold mb-2'
                      htmlFor='year'>
                      Year
                    </label>
                    <select
                      id='year'
                      name='year'
                      required
                      value={formData.year}
                      onChange={handleChange}
                      className='w-full px-4 py-2 border border-gray-300 rounded-md text-smoky-black bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'>
                      <option value=''>Select Year</option>
                      {years.map((year) => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className='mb-4'>
                    <label
                      className='block text-dark-imperial-blue text-sm font-semibold mb-2'
                      htmlFor='semester'>
                      Semester
                    </label>
                    <select
                      id='semester'
                      name='semester'
                      required
                      value={formData.semester}
                      onChange={handleChange}
                      className='w-full px-4 py-2 border border-gray-300 rounded-md text-smoky-black bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'>
                      <option value=''>Select Semester</option>
                      {semesters.map((semester) => (
                        <option key={semester} value={semester}>
                          {semester}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className='mb-4'>
                    <label
                      className='block text-dark-imperial-blue text-sm font-semibold mb-2'
                      htmlFor='examDate'>
                      Exam Date
                    </label>
                    <input
                      type='date'
                      id='examDate'
                      name='examDate'
                      required
                      value={formData.examDate}
                      onChange={handleChange}
                      className='w-full px-4 py-2 border border-gray-300 rounded-md text-smoky-black bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'
                    />
                  </div>
                </>
              )}

              {currentStep === 3 && (
                <>
                  <h3 className='text-xl font-bold text-dark-imperial-blue mb-6'>
                    Marks & Timing
                  </h3>
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
                      placeholder='Enter marks'
                    />
                  </div>

                  <div className='mb-4'>
                    <label
                      className='block text-dark-imperial-blue text-sm font-semibold mb-2'
                      htmlFor='startTime'>
                      Start Time
                    </label>
                    <input
                      type='time'
                      id='startTime'
                      name='startTime'
                      required
                      value={formData.startTime}
                      onChange={handleChange}
                      className='w-full px-4 py-2 border border-gray-300 rounded-md text-smoky-black bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'
                    />
                  </div>

                  <div className='mb-4'>
                    <label
                      className='block text-dark-imperial-blue text-sm font-semibold mb-2'
                      htmlFor='endTime'>
                      End Time
                    </label>
                    <input
                      type='time'
                      id='endTime'
                      name='endTime'
                      required
                      value={formData.endTime}
                      onChange={handleChange}
                      className='w-full px-4 py-2 border border-gray-300 rounded-md text-smoky-black bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'
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

ExamsForm.propTypes = {
  courses: PropTypes.arrayOf(PropTypes.string).isRequired,
  labs: PropTypes.arrayOf(PropTypes.string).isRequired,
};
