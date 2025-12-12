// import { useState } from "react";
// import PropTypes from "prop-types";

// /*
//   ResourceForm - for creating resources
//   fields: name (required, textbox), description (textbox), resourceURL (textbox), resourceFile (file input), subjectType (required, selection[Course, Lab]), subject (required, selection[available course or lab]), uploadedBy (required, selection[available user]).
// */

// export default function ResourceForm({ courses, labs, users }) {
//   const [formData, setFormData] = useState({
//     name: "",
//     description: "",
//     resourceURL: "",
//     resourceFile: null, // Change to null for file input handling
//     subjectType: "Course",
//     subject: "",
//     uploadedBy: "",
//   });

//   const [currentStep, setCurrentStep] = useState(1);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name === "resourceFile") {
//       setFormData({
//         ...formData,
//         [name]: e.target.files[0], // Capture file input correctly
//       });
//     } else {
//       setFormData({
//         ...formData,
//         [name]: value,
//       });
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here, you can handle the submission for each step if necessary
//     console.log(formData);
//   };

//   const availableSubjects = formData.subjectType === "Course" ? courses : labs;

//   return (
//     <>
//       <div className='flex justify-center items-center w-auto  bg-lavender-web rounded-xl'>
//         <form
//           className='mx-auto p-6 bg-white shadow-lg rounded-lg w-[400px]'
//           onSubmit={handleSubmit}
//         >
//           <h3 className='text-xl font-bold mb-4'>Step {currentStep}</h3>

//           {currentStep === 1 && (
//             <>
//               <div className='mb-6'>
//                 <label
//                   className='block text-dark-imperial-blue text-sm font-semibold mb-2 '
//                   htmlFor='name'
//                 >
//                   Resource Name
//                 </label>
//                 <input
//                   type='text'
//                   id='name'
//                   name='name'
//                   required
//                   value={formData.name}
//                   onChange={handleChange}
//                   className='w-full  px-4 py-2 border border-gray-300 rounded-md placeholder-smoky-black text-smoky-black bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'
//                   placeholder='Enter resource name'
//                 />
//               </div>

//               <div className='mb-6'>
//                 <label
//                   className='block text-dark-imperial-blue text-sm font-semibold mb-2 '
//                   htmlFor='description'
//                 >
//                   Description
//                 </label>
//                 <textarea
//                   id='description'
//                   name='description'
//                   value={formData.description}
//                   onChange={handleChange}
//                   className='w-full  px-4 py-2 border border-gray-300 rounded-md placeholder-smoky-black text-smoky-black bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'
//                   placeholder='Enter Description'
//                 />
//               </div>

//               <div className='flex justify-end'>
//                 <button
//                   type='button'
//                   onClick={() => setCurrentStep(2)}
//                   className='bg-palatinate-blue text-white-smoke px-5 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-palatinate-blue text-sm'
//                 >
//                   Next
//                 </button>
//               </div>
//             </>
//           )}

//           {currentStep === 2 && (
//             <>
//               <div className='mb-6'>
//                 <label
//                   className='block text-dark-imperial-blue text-sm font-semibold mb-2 '
//                   htmlFor='resourceURL'
//                 >
//                   Resource URL
//                 </label>
//                 <input
//                   type='text'
//                   id='resourceURL'
//                   name='resourceURL'
//                   value={formData.resourceURL}
//                   onChange={handleChange}
//                   className='w-full  px-4 py-2 border border-gray-300 rounded-md placeholder-smoky-black text-smoky-black bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'
//                   placeholder='Resource URL Here'
//                 />
//               </div>

//               <div className='mb-6'>
//                 <label
//                   className='block text-dark-imperial-blue text-sm font-semibold mb-2 '
//                   htmlFor='resourceFile'
//                 >
//                   Resource File
//                 </label>
//                 <input
//                   type='file'
//                   id='resourceFile'
//                   name='resourceFile'
//                   onChange={handleChange}
//                   className='w-full  px-4 py-2 border border-gray-300 rounded-md placeholder-smoky-black text-smoky-black bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'
//                 />
//               </div>

//               <div className='flex justify-between'>
//                 <button
//                   type='button'
//                   onClick={() => setCurrentStep(1)}
//                   className='bg-smoky-black text-white-smoke px-5 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500 text-sm'
//                 >
//                   Back
//                 </button>
//                 <button
//                   type='button'
//                   onClick={() => setCurrentStep(3)}
//                   className='bg-palatinate-blue text-white-smoke px-5 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-palatinate-blue text-sm'
//                 >
//                   Next
//                 </button>
//               </div>
//             </>
//           )}

//           {currentStep === 3 && (
//             <>
//               <div className='mb-6'>
//                 <label
//                   className='block text-dark-imperial-blue text-sm font-semibold mb-2 '
//                   htmlFor='subjectType'
//                 >
//                   Subject Type
//                 </label>
//                 <select
//                   id='subjectType'
//                   name='subjectType'
//                   required
//                   value={formData.subjectType}
//                   onChange={handleChange}
//                   className='w-full  px-4 py-2 border border-gray-300 rounded-md placeholder-smoky-black text-smoky-black bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'
//                 >
//                   <option value='Course'>Course</option>
//                   <option value='Lab'>Lab</option>
//                 </select>
//               </div>

//               <div className='mb-6'>
//                 <label
//                   className='block text-dark-imperial-blue text-sm font-semibold mb-2 '
//                   htmlFor='subject'
//                 >
//                   Subject
//                 </label>
//                 <select
//                   id='subject'
//                   name='subject'
//                   required
//                   value={formData.subject}
//                   onChange={handleChange}
//                   className='w-full  px-4 py-2 border border-gray-300 rounded-md placeholder-smoky-black text-smoky-black bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'
//                 >
//                   <option value=''>Select Subject</option>
//                   {availableSubjects.map((subject) => (
//                     <option key={subject} value={subject}>
//                       {subject}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div className='mb-6'>
//                 <label
//                   className='block text-dark-imperial-blue text-sm font-semibold mb-2 '
//                   htmlFor='uploadedBy'
//                 >
//                   Uploaded By
//                 </label>
//                 <select
//                   id='uploadedBy'
//                   name='uploadedBy'
//                   required
//                   value={formData.uploadedBy}
//                   onChange={handleChange}
//                   className='w-full  px-4 py-2 border border-gray-300 rounded-md placeholder-smoky-black text-smoky-black bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'
//                 >
//                   <option value=''>Select User</option>
//                   {users.map((user) => (
//                     <option key={user} value={user}>
//                       {user}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div className='flex justify-between'>
//                 <button
//                   type='button'
//                   onClick={() => setCurrentStep(2)}
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
//             </>
//           )}
//         </form>
//       </div>
//     </>
//   );
// }

// ResourceForm.propTypes = {
//   courses: PropTypes.array.isRequired,
//   labs: PropTypes.array.isRequired,
//   users: PropTypes.array.isRequired,
// };

// // Usage example:
// // <ResourceForm
// //   courses={['Math 101', 'Physics 201']}
// //   labs={['Physics Lab', 'Chemistry Lab']}
// //   users={['Professor John', 'Dr. Smith', 'TA Alice']}
// // />

import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function ResourceForm({ courses, labs, users }) {
  // State for resource list
  const [resources, setResources] = useState([]);
  // State for showing/hiding the form
  const [showForm, setShowForm] = useState(false);
  // Form data state
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    resourceURL: '',
    resourceFile: null,
    subjectType: 'Course',
    subject: '',
    uploadedBy: '',
  });
  const [currentStep, setCurrentStep] = useState(1);

  const availableSubjects = formData.subjectType === 'Course' ? courses : labs;

  // Load resources from localStorage on component mount
  useEffect(() => {
    const savedResources = localStorage.getItem('resources');
    if (savedResources) {
      setResources(JSON.parse(savedResources));
    }
  }, []);

  // Save resources to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('resources', JSON.stringify(resources));
  }, [resources]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'resourceFile' && files && files.length > 0) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: files[0],
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
        ...(name === 'subjectType' && { subject: '' }), // Clear subject when subjectType changes
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new resource object
    const newResource = {
      id: Date.now(), // Generate a unique ID
      ...formData,
      // Store only the file name instead of the File object for localStorage
      resourceFile: formData.resourceFile ? formData.resourceFile.name : null,
      dateAdded: new Date().toISOString(),
    };

    // Add new resource to the list
    setResources([...resources, newResource]);

    // Reset form
    resetForm();

    // Hide form and show resource list
    setShowForm(false);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      description: '',
      resourceURL: '',
      resourceFile: null,
      subjectType: 'Course',
      subject: '',
      uploadedBy: '',
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
        // Resource List View
        <>
          <div className='flex justify-between items-center mb-8'>
            <h2 className='text-3xl font-bold text-dark-imperial-blue'>
              Resource Management
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
              Add New Resource
            </button>
          </div>

          {resources.length === 0 ? (
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
                No Resources Added Yet
              </h3>
              <p className='text-gray-500 text-center max-w-md mb-6'>
                Start by adding your first educational resource.
              </p>
              <button
                onClick={() => setShowForm(true)}
                className='bg-palatinate-blue text-white-smoke px-6 py-2 rounded-full hover:bg-dark-imperial-blue transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-palatinate-blue'>
                Add First Resource
              </button>
            </div>
          ) : (
            // Resource cards grid
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {resources.map((resource) => (
                <div
                  key={resource.id}
                  className='bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300'>
                  <div className='bg-lavender-web p-4 border-b border-gray-100'>
                    <h3 className='text-xl font-bold text-dark-imperial-blue truncate'>
                      {resource.name}
                    </h3>
                    <p className='text-smoky-black font-medium mt-1'>
                      {resource.subject} ({resource.subjectType})
                    </p>
                  </div>

                  <div className='p-4'>
                    {resource.description && (
                      <p className='text-gray-600 text-sm mb-3 italic'>
                        {resource.description.length > 100
                          ? `${resource.description.substring(0, 100)}...`
                          : resource.description}
                      </p>
                    )}

                    <div className='grid grid-cols-2 gap-y-2 text-sm mt-2'>
                      {resource.resourceURL && (
                        <>
                          <div className='text-gray-600'>URL:</div>
                          <div className='font-medium text-dark-imperial-blue truncate'>
                            <a
                              href={resource.resourceURL}
                              target='_blank'
                              rel='noopener noreferrer'
                              className='text-palatinate-blue hover:underline'>
                              View Link
                            </a>
                          </div>
                        </>
                      )}

                      {resource.resourceFile && (
                        <>
                          <div className='text-gray-600'>File:</div>
                          <div className='font-medium text-palatinate-blue truncate'>
                            {resource.resourceFile}
                          </div>
                        </>
                      )}

                      <div className='text-gray-600'>Uploaded By:</div>
                      <div className='font-medium text-dark-imperial-blue'>
                        {resource.uploadedBy}
                      </div>

                      <div className='text-gray-600'>Date Added:</div>
                      <div className='font-medium text-dark-imperial-blue'>
                        {formatDate(resource.dateAdded)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      ) : (
        // Resource Form
        <div className='flex justify-center items-center'>
          <div className='flex justify-center items-center w-full max-w-md bg-lavender-web rounded-xl'>
            <form
              className='mx-auto p-6 shadow-lg rounded-lg w-full'
              onSubmit={handleSubmit}>
              <div className='flex justify-between items-center mb-6'>
                <h3 className='text-2xl font-bold text-dark-imperial-blue'>
                  Add Resource - Step {currentStep}/3
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
                    Resource Information
                  </h3>
                  <div className='mb-4'>
                    <label
                      className='block text-dark-imperial-blue text-sm font-semibold mb-2'
                      htmlFor='name'>
                      Resource Name
                    </label>
                    <input
                      type='text'
                      id='name'
                      name='name'
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className='w-full px-4 py-2 border border-gray-300 rounded-md placeholder-smoky-black text-smoky-black bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'
                      placeholder='Enter resource name'
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
                </>
              )}

              {currentStep === 2 && (
                <>
                  <h3 className='text-xl font-bold text-dark-imperial-blue mb-6'>
                    Resource Files & Links
                  </h3>
                  <div className='mb-4'>
                    <label
                      className='block text-dark-imperial-blue text-sm font-semibold mb-2'
                      htmlFor='resourceURL'>
                      Resource URL
                    </label>
                    <input
                      type='text'
                      id='resourceURL'
                      name='resourceURL'
                      value={formData.resourceURL}
                      onChange={handleChange}
                      className='w-full px-4 py-2 border border-gray-300 rounded-md placeholder-smoky-black text-smoky-black bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'
                      placeholder='Enter resource URL'
                    />
                  </div>

                  <div className='mb-4'>
                    <label
                      className='block text-dark-imperial-blue text-sm font-semibold mb-2'
                      htmlFor='resourceFile'>
                      Resource File
                    </label>
                    <input
                      type='file'
                      id='resourceFile'
                      name='resourceFile'
                      onChange={handleChange}
                      className='w-full px-4 py-2 border border-gray-300 rounded-md text-smoky-black bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'
                    />
                  </div>
                </>
              )}

              {currentStep === 3 && (
                <>
                  <h3 className='text-xl font-bold text-dark-imperial-blue mb-6'>
                    Subject & Attribution
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
                      htmlFor='uploadedBy'>
                      Uploaded By
                    </label>
                    <select
                      id='uploadedBy'
                      name='uploadedBy'
                      required
                      value={formData.uploadedBy}
                      onChange={handleChange}
                      className='w-full px-4 py-2 border border-gray-300 rounded-md text-smoky-black bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'>
                      <option value=''>Select User</option>
                      {users.map((user) => (
                        <option key={user} value={user}>
                          {user}
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

ResourceForm.propTypes = {
  courses: PropTypes.arrayOf(PropTypes.string).isRequired,
  labs: PropTypes.arrayOf(PropTypes.string).isRequired,
  users: PropTypes.arrayOf(PropTypes.string).isRequired,
};

// Usage example:
// <ResourceForm
//   courses={['Math 101', 'Physics 201']}
//   labs={['Physics Lab', 'Chemistry Lab']}
//   users={['Professor John', 'Dr. Smith', 'TA Alice']}
// />
