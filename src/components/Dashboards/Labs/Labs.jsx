// import { useState } from 'react';
// import PropTypes from 'prop-types';

// export default function LabForm({
//   courses,
//   departments,
//   teachers,
//   labAssistants,
// }) {
//   // Define initial form data
//   const [formData, setFormData] = useState({
//     name: '',
//     labCode: '',
//     credits: '',
//     year: '',
//     semester: '',
//     course: '',
//     department: '',
//     teacherInCharge: '',
//     labAssistant: '',
//   });

//   // Step state
//   const [currentStep, setCurrentStep] = useState(0);

//   // Handle input change
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   // Handle form submission
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
//       <div>
//         <div className='flex justify-center items-center w-auto bg-lavender-web rounded-xl '>
//           <form
//             className='mx-auto p-6 bg-white shadow-lg rounded-lg w-[400px] '
//             onSubmit={handleSubmit}>
//             {currentStep === 0 && (
//               <div>
//                 <h3 className='text-2xl font-bold text-dark-imperial-blue mb-6 '>
//                   Basic Lab Information
//                 </h3>
//                 <div className='mb-4'>
//                   <label
//                     className='block text-dark-imperial-blue text-sm font-semibold mb-2 '
//                     htmlFor='name'>
//                     Lab Name
//                   </label>
//                   <input
//                     type='text'
//                     id='name'
//                     name='name'
//                     required
//                     value={formData.name}
//                     onChange={handleChange}
//                     className='w-full px-4 py-2 placeholder-smoky-black border border-gray-300 rounded-md text-gray-700 bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'
//                     placeholder='Enter Lab Name'
//                   />
//                 </div>

//                 <div className='mb-4'>
//                   <label
//                     className='block text-dark-imperial-blue text-sm font-semibold mb-2 '
//                     htmlFor='labCode'>
//                     Lab Code
//                   </label>
//                   <input
//                     type='text'
//                     id='labCode'
//                     name='labCode'
//                     required
//                     value={formData.labCode}
//                     onChange={handleChange}
//                     className='w-full px-4 py-2 border border-gray-300 placeholder-smoky-black rounded-md text-gray-700 bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'
//                     placeholder='Enter Lab Code'
//                   />
//                 </div>

//                 <div className='mb-4'>
//                   <label
//                     className='block text-dark-imperial-blue text-sm font-semibold mb-2 '
//                     htmlFor='credits'>
//                     Credits
//                   </label>
//                   <input
//                     type='number'
//                     id='credits'
//                     name='credits'
//                     required
//                     value={formData.credits}
//                     onChange={handleChange}
//                     className='w-full px-4 py-2 border placeholder-smoky-black border-gray-300 rounded-md text-gray-700 bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'
//                     placeholder='Enter The Credits'
//                   />
//                 </div>

//                 <div className='flex justify-end'>
//                   <button
//                     type='button'
//                     onClick={nextStep}
//                     className='bg-palatinate-blue text-white-smoke px-5 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-palatinate-blue text-sm'>
//                     Next
//                   </button>
//                 </div>
//               </div>
//             )}

//             {currentStep === 1 && (
//               <div>
//                 <h2 className='text-sm font-bold mb-4 text-palatinate-blue'>
//                   Select Course and Staff
//                 </h2>
//                 <div className='mb-4'>
//                   <label
//                     className='block text-dark-imperial-blue text-sm font-semibold mb-2 '
//                     htmlFor='year'>
//                     Year
//                   </label>
//                   <select
//                     id='year'
//                     name='year'
//                     required
//                     value={formData.year}
//                     onChange={handleChange}
//                     className='w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'>
//                     <option value=''>Select Year</option>
//                     <option value='1'>1st Year</option>
//                     <option value='2'>2nd Year</option>
//                     <option value='3'>3rd Year</option>
//                     <option value='4'>4th Year</option>
//                   </select>
//                 </div>

//                 <div className='mb-4'>
//                   <label
//                     className='block text-dark-imperial-blue text-sm font-semibold mb-2 '
//                     htmlFor='semester'>
//                     Semester
//                   </label>
//                   <select
//                     id='semester'
//                     name='semester'
//                     required
//                     value={formData.semester}
//                     onChange={handleChange}
//                     className='w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'>
//                     <option value=''>Select Semester</option>
//                     {[...Array(8).keys()].map((i) => (
//                       <option key={i + 1} value={i + 1}>
//                         {i + 1} Semester
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 <div className='mb-4'>
//                   <label
//                     className='block text-dark-imperial-blue text-sm font-semibold mb-2 '
//                     htmlFor='course'>
//                     Course
//                   </label>
//                   <select
//                     id='course'
//                     name='course'
//                     required
//                     value={formData.course}
//                     onChange={handleChange}
//                     className='w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'>
//                     <option value=''>Select Course</option>
//                     {courses.map((course) => (
//                       <option key={course} value={course}>
//                         {course}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 <div className='flex justify-between '>
//                   <button
//                     type='button'
//                     onClick={prevStep}
//                     className='bg-smoky-black text-white-smoke px-5 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500 text-sm'>
//                     Back
//                   </button>
//                   <button
//                     type='button'
//                     onClick={nextStep}
//                     className='bg-palatinate-blue text-white-smoke px-5 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-palatinate-blue text-sm'>
//                     Next
//                   </button>
//                 </div>
//               </div>
//             )}

//             {currentStep === 2 && (
//               <div>
//                 <h2 className='text-sm font-bold mb-4 text-palatinate-blue'>
//                   Assign Staff
//                 </h2>

//                 <div className='mb-4'>
//                   <label
//                     className='block text-dark-imperial-blue text-sm font-semibold mb-2 '
//                     htmlFor='department'>
//                     Department
//                   </label>
//                   <select
//                     id='department'
//                     name='department'
//                     required
//                     value={formData.department}
//                     onChange={handleChange}
//                     className='w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'>
//                     <option value=''>Select Department</option>
//                     {departments.map((dept) => (
//                       <option key={dept} value={dept}>
//                         {dept}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 <div className='mb-4'>
//                   <label
//                     className='block text-dark-imperial-blue text-sm font-semibold mb-2 '
//                     htmlFor='teacherInCharge'>
//                     Teacher In Charge
//                   </label>
//                   <select
//                     id='teacherInCharge'
//                     name='teacherInCharge'
//                     value={formData.teacherInCharge}
//                     onChange={handleChange}
//                     className='w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'>
//                     <option value=''>Select Teacher</option>
//                     {teachers.map((teacher) => (
//                       <option key={teacher} value={teacher}>
//                         {teacher}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 <div className='mb-4'>
//                   <label
//                     className='block text-dark-imperial-blue text-sm font-semibold mb-2 '
//                     htmlFor='labAssistant'>
//                     Lab Assistant
//                   </label>
//                   <select
//                     id='labAssistant'
//                     name='labAssistant'
//                     value={formData.labAssistant}
//                     onChange={handleChange}
//                     className='w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'>
//                     <option value=''>Select Lab Assistant</option>
//                     {labAssistants.map((assistant) => (
//                       <option key={assistant} value={assistant}>
//                         {assistant}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 <div className='flex justify-between'>
//                   <button
//                     type='button'
//                     onClick={() => setCurrentStep(2)}
//                     className='bg-smoky-black text-white-smoke px-7 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500 text-sm'>
//                     Back
//                   </button>
//                   <button
//                     type='submit'
//                     className='bg-palatinate-blue text-white-smoke px-5 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-palatinate-blue text-sm'>
//                     Submit
//                   </button>
//                 </div>
//               </div>
//             )}
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }

// LabForm.propTypes = {
//   courses: PropTypes.array.isRequired,
//   departments: PropTypes.array.isRequired,
//   teachers: PropTypes.array.isRequired,
//   labAssistants: PropTypes.array.isRequired,
// };

import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function LabForm({
  courses,
  departments,
  teachers,
  labAssistants,
}) {
  // State for lab list
  const [labs, setLabs] = useState([]);
  // State for showing/hiding the form
  const [showForm, setShowForm] = useState(false);
  // Form data state
  const [formData, setFormData] = useState({
    name: '',
    labCode: '',
    credits: '',
    year: '',
    semester: '',
    course: '',
    department: '',
    teacherInCharge: '',
    labAssistant: '',
  });
  // Step state
  const [currentStep, setCurrentStep] = useState(1);

  // Load labs from localStorage on component mount
  useEffect(() => {
    const savedLabs = localStorage.getItem('labs');
    if (savedLabs) {
      setLabs(JSON.parse(savedLabs));
    }
  }, []);

  // Save labs to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('labs', JSON.stringify(labs));
  }, [labs]);

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

    // Create a new lab object
    const newLab = {
      id: Date.now(), // Generate a unique ID
      ...formData,
      dateAdded: new Date().toISOString(),
    };

    // Add new lab to the list
    setLabs([...labs, newLab]);

    // Reset form
    resetForm();

    // Hide form and show lab list
    setShowForm(false);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      labCode: '',
      credits: '',
      year: '',
      semester: '',
      course: '',
      department: '',
      teacherInCharge: '',
      labAssistant: '',
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
        // Lab List View
        <>
          <div className='flex justify-between items-center mb-8'>
            <h2 className='text-3xl font-bold text-dark-imperial-blue'>
              Lab Management
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
              Add New Lab
            </button>
          </div>

          {labs.length === 0 ? (
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
                No Labs Added Yet
              </h3>
              <p className='text-gray-500 text-center max-w-md mb-6'>
                Start by adding your first lab.
              </p>
              <button
                onClick={() => setShowForm(true)}
                className='bg-palatinate-blue text-white px-6 py-2 rounded-full hover:bg-dark-imperial-blue transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-palatinate-blue'>
                Add First Lab
              </button>
            </div>
          ) : (
            // Lab cards grid
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {labs.map((lab) => (
                <div
                  key={lab.id}
                  className='bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300'>
                  <div className='bg-lavender-web p-4 border-b border-gray-100'>
                    <h3 className='text-xl font-bold text-dark-imperial-blue truncate'>
                      {lab.name}
                    </h3>
                    <p className='text-smoky-black font-medium mt-1'>
                      Code: {lab.labCode}
                    </p>
                  </div>

                  <div className='p-4'>
                    <div className='grid grid-cols-2 gap-y-2 text-sm mt-2'>
                      <div className='text-gray-600'>Course:</div>
                      <div className='font-medium text-dark-imperial-blue'>
                        {lab.course}
                      </div>

                      <div className='text-gray-600'>Department:</div>
                      <div className='font-medium text-dark-imperial-blue'>
                        {lab.department}
                      </div>

                      <div className='text-gray-600'>Credits:</div>
                      <div className='font-medium text-dark-imperial-blue'>
                        {lab.credits}
                      </div>

                      <div className='text-gray-600'>Year/Semester:</div>
                      <div className='font-medium text-dark-imperial-blue'>
                        {lab.year && `Year ${lab.year}`}
                        {lab.year && lab.semester && ', '}
                        {lab.semester && `Semester ${lab.semester}`}
                      </div>

                      <div className='text-gray-600'>Teacher:</div>
                      <div className='font-medium text-dark-imperial-blue'>
                        {lab.teacherInCharge || 'Not assigned'}
                      </div>

                      <div className='text-gray-600'>Lab Assistant:</div>
                      <div className='font-medium text-dark-imperial-blue'>
                        {lab.labAssistant || 'Not assigned'}
                      </div>

                      <div className='text-gray-600'>Added On:</div>
                      <div className='font-medium text-dark-imperial-blue'>
                        {formatDate(lab.dateAdded)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      ) : (
        // Lab Form
        <div className='flex justify-center items-center'>
          <div className='flex justify-center items-center w-full max-w-md bg-lavender-web rounded-xl'>
            <form
              className='mx-auto p-6 shadow-lg rounded-lg w-full'
              onSubmit={handleSubmit}>
              <div className='flex justify-between items-center mb-6'>
                <h3 className='text-2xl font-bold text-dark-imperial-blue'>
                  Add Lab - Step {currentStep}/3
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
                    Basic Lab Information
                  </h3>
                  <div className='mb-4'>
                    <label
                      className='block text-dark-imperial-blue text-sm font-semibold mb-2'
                      htmlFor='name'>
                      Lab Name
                    </label>
                    <input
                      type='text'
                      id='name'
                      name='name'
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className='w-full px-4 py-2 border border-gray-300 rounded-md placeholder-smoky-black text-smoky-black bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'
                      placeholder='Enter Lab Name'
                    />
                  </div>

                  <div className='mb-4'>
                    <label
                      className='block text-dark-imperial-blue text-sm font-semibold mb-2'
                      htmlFor='labCode'>
                      Lab Code
                    </label>
                    <input
                      type='text'
                      id='labCode'
                      name='labCode'
                      required
                      value={formData.labCode}
                      onChange={handleChange}
                      className='w-full px-4 py-2 border border-gray-300 rounded-md placeholder-smoky-black text-smoky-black bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'
                      placeholder='Enter Lab Code'
                    />
                  </div>

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
                      className='w-full px-4 py-2 border border-gray-300 rounded-md placeholder-smoky-black text-smoky-black bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'
                      placeholder='Enter The Credits'
                    />
                  </div>
                </>
              )}

              {currentStep === 2 && (
                <>
                  <h3 className='text-xl font-bold text-dark-imperial-blue mb-6'>
                    Course Information
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
                      <option value='1'>1st Year</option>
                      <option value='2'>2nd Year</option>
                      <option value='3'>3rd Year</option>
                      <option value='4'>4th Year</option>
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
                      {[...Array(8).keys()].map((i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1} Semester
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className='mb-4'>
                    <label
                      className='block text-dark-imperial-blue text-sm font-semibold mb-2'
                      htmlFor='course'>
                      Course
                    </label>
                    <select
                      id='course'
                      name='course'
                      required
                      value={formData.course}
                      onChange={handleChange}
                      className='w-full px-4 py-2 border border-gray-300 rounded-md text-smoky-black bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'>
                      <option value=''>Select Course</option>
                      {courses.map((course) => (
                        <option key={course} value={course}>
                          {course}
                        </option>
                      ))}
                    </select>
                  </div>
                </>
              )}

              {currentStep === 3 && (
                <>
                  <h3 className='text-xl font-bold text-dark-imperial-blue mb-6'>
                    Staff Assignment
                  </h3>
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

                  <div className='mb-4'>
                    <label
                      className='block text-dark-imperial-blue text-sm font-semibold mb-2'
                      htmlFor='teacherInCharge'>
                      Teacher In Charge
                    </label>
                    <select
                      id='teacherInCharge'
                      name='teacherInCharge'
                      value={formData.teacherInCharge}
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

                  <div className='mb-4'>
                    <label
                      className='block text-dark-imperial-blue text-sm font-semibold mb-2'
                      htmlFor='labAssistant'>
                      Lab Assistant
                    </label>
                    <select
                      id='labAssistant'
                      name='labAssistant'
                      value={formData.labAssistant}
                      onChange={handleChange}
                      className='w-full px-4 py-2 border border-gray-300 rounded-md text-smoky-black bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'>
                      <option value=''>Select Lab Assistant</option>
                      {labAssistants.map((assistant) => (
                        <option key={assistant} value={assistant}>
                          {assistant}
                        </option>
                      ))}
                    </select>
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

LabForm.propTypes = {
  courses: PropTypes.arrayOf(PropTypes.string).isRequired,
  departments: PropTypes.arrayOf(PropTypes.string).isRequired,
  teachers: PropTypes.arrayOf(PropTypes.string).isRequired,
  labAssistants: PropTypes.arrayOf(PropTypes.string).isRequired,
};
