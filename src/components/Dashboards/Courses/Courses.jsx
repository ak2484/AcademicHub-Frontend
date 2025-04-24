// import { useState } from "react";
// import PropTypes from "prop-types";

// export default function CourseForm({ departments, teachers }) {
//   const [formData, setFormData] = useState({
//     name: "",
//     courseCode: "",
//     year: "",
//     semester: "",
//     credits: "",
//     department: "",
//     teachersIncharge: "",
//   });

//   const [currentStep, setCurrentStep] = useState(1);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//   };

//   return (
//     <>
//       <div className='flex justify-center items-center'>
//         <div className='flex justify-center items-center w-auto h-full bg-lavender-web rounded-xl'>
//           <form
//             className='mx-auto p-6 shadow-lg rounded-lg w-[400px]'
//             onSubmit={handleSubmit}
//           >
//             <h3 className='text-2xl font-bold text-dark-imperial-blue mb-6 '>
//               Create a New Course - Step {currentStep}
//             </h3>
//             {currentStep === 1 && (
//               <>
//                 {/* Course Name */}
//                 <div className='mb-4'>
//                   <label
//                     className='block text-dark-imperial-blue text-sm font-semibold mb-2 '
//                     htmlFor='name'
//                   >
//                     Course Name
//                   </label>
//                   <input
//                     type='text'
//                     id='name'
//                     name='name'
//                     required
//                     value={formData.name}
//                     onChange={handleChange}
//                     className='w-full  px-4 py-2 border border-gray-300 rounded-md placeholder-smoky-black text-smoky-black bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'
//                     placeholder='Enter course name'
//                   />
//                 </div>

//                 {/* Course Code */}
//                 <div className='mb-4'>
//                   <label
//                     className='block text-dark-imperial-blue text-sm font-semibold mb-2'
//                     htmlFor='courseCode'
//                   >
//                     Course Code
//                   </label>
//                   <input
//                     type='text'
//                     id='courseCode'
//                     name='courseCode'
//                     required
//                     value={formData.courseCode}
//                     onChange={handleChange}
//                     className='w-full px-4 py-2 border border-gray-300 rounded-md placeholder-smoky-black text-smoky-black bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'
//                     placeholder='Enter course code'
//                   />
//                 </div>

//                 {/* Submit Button */}
//                 <div className='flex justify-end'>
//                   <button
//                     type='button'
//                     onClick={() => setCurrentStep(2)}
//                     className='bg-palatinate-blue text-white-smoke px-5 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-palatinate-blue text-sm'
//                   >
//                     Next
//                   </button>
//                 </div>
//               </>
//             )}

//             {currentStep === 2 && (
//               <>
//                 {/* Year */}
//                 <div className='mb-4 '>
//                   <label
//                     className='block text-dark-imperial-blue text-sm font-semibold mb-2 '
//                     htmlFor='year'
//                   >
//                     Year
//                   </label>
//                   <select
//                     id='year'
//                     name='year'
//                     required
//                     value={formData.year}
//                     onChange={handleChange}
//                     className='w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'
//                   >
//                     <option value=''>Select Year</option>
//                     <option value='1'>1st Year</option>
//                     <option value='2'>2nd Year</option>
//                     <option value='3'>3rd Year</option>
//                     <option value='4'>4th Year</option>
//                   </select>
//                 </div>

//                 {/* Semester */}
//                 <div className='mb-4'>
//                   <label
//                     className='block text-dark-imperial-blue text-sm font-semibold mb-2'
//                     htmlFor='semester'
//                   >
//                     Semester
//                   </label>
//                   <select
//                     id='semester'
//                     name='semester'
//                     required
//                     value={formData.semester}
//                     onChange={handleChange}
//                     className='w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'
//                   >
//                     <option value=''>Select Semester</option>
//                     {[...Array(8)].map((_, index) => (
//                       <option key={index + 1} value={index + 1}>
//                         {index + 1} Semester
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 <div className='flex justify-between'>
//                   <button
//                     type='button'
//                     onClick={() => setCurrentStep(1)}
//                     className='bg-smoky-black text-white-smoke px-5 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500 text-sm'
//                   >
//                     Back
//                   </button>
//                   <button
//                     type='button'
//                     onClick={() => setCurrentStep(3)}
//                     className='bg-palatinate-blue text-white-smoke px-5 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-palatinate-blue text-sm'
//                   >
//                     Next
//                   </button>
//                 </div>
//               </>
//             )}

//             {currentStep === 3 && (
//               <>
//                 {/* Credits */}
//                 <div className='mb-4  '>
//                   <label
//                     className='block text-gray-700 text-sm font-semibold mb-2 text-dark-imperial-blue'
//                     htmlFor='credits'
//                   >
//                     Credits
//                   </label>
//                   <input
//                     type='number'
//                     id='credits'
//                     name='credits'
//                     required
//                     value={formData.credits}
//                     onChange={handleChange}
//                     className='w-full  px-4 py-2 border border-gray-300 rounded-md placeholder-smoky-black text-dark-imperial-blue bg-gray-50 focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'
//                     placeholder='Enter course credits'
//                   />
//                 </div>

//                 {/* Department */}
//                 <div className='mb-4'>
//                   <label
//                     className='block text-dark-imperial-blue text-sm font-semibold mb-2 '
//                     htmlFor='department'
//                   >
//                     Department
//                   </label>
//                   <select
//                     id='department'
//                     name='department'
//                     required
//                     value={formData.department}
//                     onChange={handleChange}
//                     className='w-full px-4 py-2 border border-gray-300 rounded-md text-smoky-black bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'
//                   >
//                     <option value=''>Select Department</option>
//                     {departments.map((dept) => (
//                       <option key={dept} value={dept}>
//                         {dept}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 {/* Teachers In Charge */}
//                 <div className='mb-4'>
//                   <label
//                     className='block text-dark-imperial-blue text-sm font-semibold mb-2 '
//                     htmlFor='teachersIncharge'
//                   >
//                     Teachers In Charge
//                   </label>
//                   <select
//                     id='teachersIncharge'
//                     name='teachersIncharge'
//                     value={formData.teachersIncharge}
//                     onChange={handleChange}
//                     className='w-full px-4 py-2 border border-gray-300 rounded-md text-smoky-black bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'
//                   >
//                     <option value=''>Select Teacher</option>
//                     {teachers.map((teacher) => (
//                       <option key={teacher} value={teacher}>
//                         {teacher}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 {/* Submit Button */}
//                 <div className='flex justify-between'>
//                   <button
//                     type='button'
//                     onClick={() => setCurrentStep(2)}
//                     className='bg-smoky-black text-white-smoke px-7 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500 text-sm'
//                   >
//                     Back
//                   </button>
//                   <button
//                     type='submit'
//                     className='bg-palatinate-blue text-white-smoke px-5 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-palatinate-blue text-sm'
//                   >
//                     Submit
//                   </button>
//                 </div>
//               </>
//             )}
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }

// CourseForm.propTypes = {
//   departments: PropTypes.array.isRequired,
//   teachers: PropTypes.array.isRequired,
// };

import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function CourseManagement({ departments, teachers }) {
  // State for course list
  const [courses, setCourses] = useState([]);
  // State for showing/hiding the form
  const [showForm, setShowForm] = useState(false);
  // Form data state
  const [formData, setFormData] = useState({
    name: '',
    courseCode: '',
    year: '',
    semester: '',
    credits: '',
    department: '',
    teachersIncharge: '',
  });
  const [currentStep, setCurrentStep] = useState(1);

  // Load courses from localStorage on component mount
  useEffect(() => {
    const savedCourses = localStorage.getItem('courses');
    if (savedCourses) {
      setCourses(JSON.parse(savedCourses));
    }
  }, []);

  // Save courses to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('courses', JSON.stringify(courses));
  }, [courses]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add new course to the list
    const newCourse = {
      id: Date.now(), // Generate a unique ID
      ...formData,
    };

    setCourses([...courses, newCourse]);

    // Reset form
    resetForm();

    // Hide form and show course list
    setShowForm(false);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      courseCode: '',
      year: '',
      semester: '',
      credits: '',
      department: '',
      teachersIncharge: '',
    });
    setCurrentStep(1);
  };

  return (
    <div className='container mx-auto px-4 py-8 max-w-6xl'>
      {!showForm ? (
        // Course List View
        <>
          <div className='flex justify-between items-center mb-8'>
            <h2 className='text-3xl font-bold text-dark-imperial-blue'>
              Course Management
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
              Add New Course
            </button>
          </div>

          {courses.length === 0 ? (
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
                  d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
                />
              </svg>
              <h3 className='text-xl font-semibold text-gray-700 mb-2'>
                No Courses Added Yet
              </h3>
              <p className='text-gray-500 text-center max-w-md mb-6'>
                Start building your course catalog by adding your first course.
              </p>
              <button
                onClick={() => setShowForm(true)}
                className='bg-palatinate-blue text-white px-6 py-2 rounded-full hover:bg-dark-imperial-blue transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-palatinate-blue'>
                Create First Course
              </button>
            </div>
          ) : (
            // Course cards grid
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {courses.map((course) => (
                <div
                  key={course.id}
                  className='bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300'>
                  <div className='bg-lavender-web p-4 border-b border-gray-100'>
                    <div className='flex justify-between items-start'>
                      <h3 className='text-xl font-bold text-dark-imperial-blue truncate'>
                        {course.name}
                      </h3>
                      <span className='bg-palatinate-blue text-white text-sm font-semibold px-3 py-1 rounded-full ml-2 whitespace-nowrap'>
                        {course.credits} Credits
                      </span>
                    </div>
                    <p className='text-smoky-black font-medium mt-1'>
                      {course.courseCode}
                    </p>
                  </div>

                  <div className='p-4'>
                    <div className='grid grid-cols-2 gap-y-2 text-sm'>
                      <div className='text-gray-600'>Year:</div>
                      <div className='font-medium text-dark-imperial-blue'>
                        {course.year}st Year
                      </div>

                      <div className='text-gray-600'>Semester:</div>
                      <div className='font-medium text-dark-imperial-blue'>
                        {course.semester}
                      </div>

                      <div className='text-gray-600'>Department:</div>
                      <div
                        className='font-medium text-dark-imperial-blue truncate'
                        title={course.department}>
                        {course.department}
                      </div>

                      <div className='text-gray-600'>Instructor:</div>
                      <div
                        className='font-medium text-dark-imperial-blue truncate'
                        title={course.teachersIncharge}>
                        {course.teachersIncharge}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      ) : (
        // Course Form
        <div className='flex justify-center items-center'>
          <div className='flex justify-center items-center w-full max-w-md bg-lavender-web rounded-xl'>
            <form
              className='mx-auto p-6 shadow-lg rounded-lg w-full'
              onSubmit={handleSubmit}>
              <div className='flex justify-between items-center mb-6'>
                <h3 className='text-2xl font-bold text-dark-imperial-blue'>
                  Create a New Course - Step {currentStep}
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
                  {/* Course Name */}
                  <div className='mb-4'>
                    <label
                      className='block text-dark-imperial-blue text-sm font-semibold mb-2 '
                      htmlFor='name'>
                      Course Name
                    </label>
                    <input
                      type='text'
                      id='name'
                      name='name'
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className='w-full px-4 py-2 border border-gray-300 rounded-md placeholder-smoky-black text-smoky-black bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'
                      placeholder='Enter course name'
                    />
                  </div>

                  {/* Course Code */}
                  <div className='mb-4'>
                    <label
                      className='block text-dark-imperial-blue text-sm font-semibold mb-2'
                      htmlFor='courseCode'>
                      Course Code
                    </label>
                    <input
                      type='text'
                      id='courseCode'
                      name='courseCode'
                      required
                      value={formData.courseCode}
                      onChange={handleChange}
                      className='w-full px-4 py-2 border border-gray-300 rounded-md placeholder-smoky-black text-smoky-black bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'
                      placeholder='Enter course code'
                    />
                  </div>

                  {/* Submit Button */}
                  <div className='flex justify-between'>
                    <button
                      type='button'
                      onClick={() => setShowForm(false)}
                      className='bg-smoky-black text-white-smoke px-5 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500 text-sm'>
                      Cancel
                    </button>
                    <button
                      type='button'
                      onClick={() => setCurrentStep(2)}
                      className='bg-palatinate-blue text-white-smoke px-5 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-palatinate-blue text-sm'>
                      Next
                    </button>
                  </div>
                </>
              )}

              {currentStep === 2 && (
                <>
                  {/* Year */}
                  <div className='mb-4 '>
                    <label
                      className='block text-dark-imperial-blue text-sm font-semibold mb-2 '
                      htmlFor='year'>
                      Year
                    </label>
                    <select
                      id='year'
                      name='year'
                      required
                      value={formData.year}
                      onChange={handleChange}
                      className='w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'>
                      <option value=''>Select Year</option>
                      <option value='1'>1st Year</option>
                      <option value='2'>2nd Year</option>
                      <option value='3'>3rd Year</option>
                      <option value='4'>4th Year</option>
                    </select>
                  </div>

                  {/* Semester */}
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
                      className='w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'>
                      <option value=''>Select Semester</option>
                      {[...Array(8)].map((_, index) => (
                        <option key={index + 1} value={index + 1}>
                          {index + 1} Semester
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className='flex justify-between'>
                    <button
                      type='button'
                      onClick={() => setCurrentStep(1)}
                      className='bg-smoky-black text-white-smoke px-5 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500 text-sm'>
                      Back
                    </button>
                    <button
                      type='button'
                      onClick={() => setCurrentStep(3)}
                      className='bg-palatinate-blue text-white-smoke px-5 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-palatinate-blue text-sm'>
                      Next
                    </button>
                  </div>
                </>
              )}

              {currentStep === 3 && (
                <>
                  {/* Credits */}
                  <div className='mb-4'>
                    <label
                      className='block text-dark-imperial-blue text-sm font-semibold mb-2'
                      htmlFor='credits'>
                      Credits
                    </label>
                    <input
                      type='number'
                      id='credits'
                      name='credits'
                      required
                      value={formData.credits}
                      onChange={handleChange}
                      className='w-full px-4 py-2 border border-gray-300 rounded-md placeholder-smoky-black text-dark-imperial-blue bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'
                      placeholder='Enter course credits'
                    />
                  </div>

                  {/* Department */}
                  <div className='mb-4'>
                    <label
                      className='block text-dark-imperial-blue text-sm font-semibold mb-2'
                      htmlFor='department'>
                      Department
                    </label>
                    <select
                      id='department'
                      name='department'
                      required
                      value={formData.department}
                      onChange={handleChange}
                      className='w-full px-4 py-2 border border-gray-300 rounded-md text-smoky-black bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'>
                      <option value=''>Select Department</option>
                      {departments.map((dept) => (
                        <option key={dept} value={dept}>
                          {dept}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Teachers In Charge */}
                  <div className='mb-4'>
                    <label
                      className='block text-dark-imperial-blue text-sm font-semibold mb-2'
                      htmlFor='teachersIncharge'>
                      Teachers In Charge
                    </label>
                    <select
                      id='teachersIncharge'
                      name='teachersIncharge'
                      value={formData.teachersIncharge}
                      onChange={handleChange}
                      className='w-full px-4 py-2 border border-gray-300 rounded-md text-smoky-black bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'>
                      <option value=''>Select Teacher</option>
                      {teachers.map((teacher) => (
                        <option key={teacher} value={teacher}>
                          {teacher}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Submit Button */}
                  <div className='flex justify-between'>
                    <button
                      type='button'
                      onClick={() => setCurrentStep(2)}
                      className='bg-smoky-black text-white-smoke px-7 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500 text-sm'>
                      Back
                    </button>
                    <button
                      type='submit'
                      className='bg-palatinate-blue text-white-smoke px-5 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-palatinate-blue text-sm'>
                      Submit
                    </button>
                  </div>
                </>
              )}
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

CourseManagement.propTypes = {
  departments: PropTypes.array.isRequired,
  teachers: PropTypes.array.isRequired,
};
