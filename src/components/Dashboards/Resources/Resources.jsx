import { useState } from "react";
import PropTypes from "prop-types";

/*
  ResourceForm - for creating resources
  fields: name (required, textbox), description (textbox), resourceURL (textbox), resourceFile (file input), subjectType (required, selection[Course, Lab]), subject (required, selection[available course or lab]), uploadedBy (required, selection[available user]).
*/

export default function ResourceForm({ courses, labs, users }) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    resourceURL: "",
    resourceFile: null, // Change to null for file input handling
    subjectType: "Course",
    subject: "",
    uploadedBy: "",
  });

  const [currentStep, setCurrentStep] = useState(1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "resourceFile") {
      setFormData({
        ...formData,
        [name]: e.target.files[0], // Capture file input correctly
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can handle the submission for each step if necessary
    console.log(formData);
  };

  const availableSubjects = formData.subjectType === "Course" ? courses : labs;

  return (
    <>
      <div className='flex justify-center items-center w-auto  bg-lavender-web rounded-xl'>
        <form
          className='mx-auto p-6 bg-white shadow-lg rounded-lg w-[400px]'
          onSubmit={handleSubmit}
        >
          <h3 className='text-xl font-bold mb-4'>Step {currentStep}</h3>

          {currentStep === 1 && (
            <>
              <div className='mb-6'>
                <label
                  className='block text-dark-imperial-blue text-sm font-semibold mb-2 '
                  htmlFor='name'
                >
                  Resource Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className='w-full  px-4 py-2 border border-gray-300 rounded-md placeholder-smoky-black text-smoky-black bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'
                  placeholder='Enter resource name'
                />
              </div>

              <div className='mb-6'>
                <label
                  className='block text-dark-imperial-blue text-sm font-semibold mb-2 '
                  htmlFor='description'
                >
                  Description
                </label>
                <textarea
                  id='description'
                  name='description'
                  value={formData.description}
                  onChange={handleChange}
                  className='w-full  px-4 py-2 border border-gray-300 rounded-md placeholder-smoky-black text-smoky-black bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'
                  placeholder='Enter Description'
                />
              </div>

              <div className='flex justify-end'>
                <button
                  type='button'
                  onClick={() => setCurrentStep(2)}
                  className='bg-palatinate-blue text-white-smoke px-5 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-palatinate-blue text-sm'
                >
                  Next
                </button>
              </div>
            </>
          )}

          {currentStep === 2 && (
            <>
              <div className='mb-6'>
                <label
                  className='block text-dark-imperial-blue text-sm font-semibold mb-2 '
                  htmlFor='resourceURL'
                >
                  Resource URL
                </label>
                <input
                  type='text'
                  id='resourceURL'
                  name='resourceURL'
                  value={formData.resourceURL}
                  onChange={handleChange}
                  className='w-full  px-4 py-2 border border-gray-300 rounded-md placeholder-smoky-black text-smoky-black bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'
                  placeholder='Resource URL Here'
                />
              </div>

              <div className='mb-6'>
                <label
                  className='block text-dark-imperial-blue text-sm font-semibold mb-2 '
                  htmlFor='resourceFile'
                >
                  Resource File
                </label>
                <input
                  type='file'
                  id='resourceFile'
                  name='resourceFile'
                  onChange={handleChange}
                  className='w-full  px-4 py-2 border border-gray-300 rounded-md placeholder-smoky-black text-smoky-black bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'
                />
              </div>

              <div className='flex justify-between'>
                <button
                  type='button'
                  onClick={() => setCurrentStep(1)}
                  className='bg-smoky-black text-white-smoke px-5 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500 text-sm'
                >
                  Back
                </button>
                <button
                  type='button'
                  onClick={() => setCurrentStep(3)}
                  className='bg-palatinate-blue text-white-smoke px-5 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-palatinate-blue text-sm'
                >
                  Next
                </button>
              </div>
            </>
          )}

          {currentStep === 3 && (
            <>
              <div className='mb-6'>
                <label
                  className='block text-dark-imperial-blue text-sm font-semibold mb-2 '
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
                  className='w-full  px-4 py-2 border border-gray-300 rounded-md placeholder-smoky-black text-smoky-black bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'
                >
                  <option value='Course'>Course</option>
                  <option value='Lab'>Lab</option>
                </select>
              </div>

              <div className='mb-6'>
                <label
                  className='block text-dark-imperial-blue text-sm font-semibold mb-2 '
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
                  className='w-full  px-4 py-2 border border-gray-300 rounded-md placeholder-smoky-black text-smoky-black bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'
                >
                  <option value=''>Select Subject</option>
                  {availableSubjects.map((subject) => (
                    <option key={subject} value={subject}>
                      {subject}
                    </option>
                  ))}
                </select>
              </div>

              <div className='mb-6'>
                <label
                  className='block text-dark-imperial-blue text-sm font-semibold mb-2 '
                  htmlFor='uploadedBy'
                >
                  Uploaded By
                </label>
                <select
                  id='uploadedBy'
                  name='uploadedBy'
                  required
                  value={formData.uploadedBy}
                  onChange={handleChange}
                  className='w-full  px-4 py-2 border border-gray-300 rounded-md placeholder-smoky-black text-smoky-black bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'
                >
                  <option value=''>Select User</option>
                  {users.map((user) => (
                    <option key={user} value={user}>
                      {user}
                    </option>
                  ))}
                </select>
              </div>

              <div className='flex justify-between'>
                <button
                  type='button'
                  onClick={() => setCurrentStep(2)}
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
            </>
          )}
        </form>
      </div>
    </>
  );
}

ResourceForm.propTypes = {
  courses: PropTypes.array.isRequired,
  labs: PropTypes.array.isRequired,
  users: PropTypes.array.isRequired,
};

// Usage example:
// <ResourceForm
//   courses={['Math 101', 'Physics 201']}
//   labs={['Physics Lab', 'Chemistry Lab']}
//   users={['Professor John', 'Dr. Smith', 'TA Alice']}
// />
