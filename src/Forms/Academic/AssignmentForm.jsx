import { useState } from "react";
import PropTypes from "prop-types";
/*
  AssignmentForm - for creating assignments
  fields: name (required, textbox), instruction (required, textbox), dateOfPerformance (required, date), dateOfSubmission (required, date), subjectType (required, selection[Course, Lab]), subject (required, selection[available course or lab]), marks (required, number).
*/
// export function AssignmentForm() {}

export function AssignmentForm({ courses, labs }) {
    const [formData, setFormData] = useState({
      name: "",
      instruction: "",
      dateOfPerformance: "",
      dateOfSubmission: "",
      subjectType: "Course",
      subject: "",
      marks: "",
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Submit the form data
      console.log(formData);
    };
  
    const availableSubjects = formData.subjectType === "Course" ? courses : labs;
  
    return (
      <form
        className='max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg'
        onSubmit={handleSubmit}
      >
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
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
            className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500'
          />
        </div>
  
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
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
            className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500'
          />
        </div>
  
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
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
            className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500'
          />
        </div>
  
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
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
            className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500'
          />
        </div>
  
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
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
            className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500'
          >
            <option value='Course'>Course</option>
            <option value='Lab'>Lab</option>
          </select>
        </div>
  
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
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
            className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500'
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
            className='block text-gray-700 text-sm font-bold mb-2'
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
            className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500'
          />
        </div>
  
        <div className='flex justify-end'>
          <button
            type='submit'
            className='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring'
          >
            Create Assignment
          </button>
        </div>
      </form>
    );
  } // Remove the closing curly brace
  
  AssignmentForm.propTypes = {
    courses: PropTypes.array.isRequired,
    labs: PropTypes.array.isRequired,
  };
  
  // Usage:
  // You would use this component by passing in courses and labs as props, representing the available courses and labs, respectively.
  
  // <AssignmentForm
  //   courses={['Math 101', 'Physics 202', 'Chemistry 303']}
  //   labs={['Physics Lab', 'Chemistry Lab', 'Biology Lab']}
  // />
  
