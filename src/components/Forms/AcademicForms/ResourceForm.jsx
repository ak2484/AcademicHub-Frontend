import { useState } from "react";
import PropTypes from "prop-types";
/*
  ResourceForm - for creating resources
  fields: name (required, textbox), description (textbox), resourceURL (textbox), resourceFile (textbox), subjectType (required, selection[Course, Lab]), subject (required, selection[available course or lab]), uploadedBy (required, selection[available user]).
*/
// export function ResourceForm() {}

export function ResourceForm({ courses, labs, users }) {
    const [formData, setFormData] = useState({
      name: "",
      description: "",
      resourceURL: "",
      resourceFile: "",
      subjectType: "Course",
      subject: "",
      uploadedBy: "",
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
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
            Resource Name
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
            htmlFor='description'
          >
            Description
          </label>
          <textarea
            id='description'
            name='description'
            value={formData.description}
            onChange={handleChange}
            className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500'
          />
        </div>
  
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
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
            className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500'
          />
        </div>
  
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='resourceFile'
          >
            Resource File
          </label>
          <input
            type='file'
            id='resourceFile'
            name='resourceFile'
            value={formData.resourceFile}
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
            className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500'
          >
            <option value=''>Select User</option>
            {users.map((user) => (
              <option key={user} value={user}>
                {user}
              </option>
            ))}
          </select>
        </div>
  
        <div className='flex justify-end'>
          <button
            type='submit'
            className='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring'
          >
            Submit
          </button>
        </div>
      </form>
    );
  }
  
  // Usage:
  // You would use this component by passing in courses, labs, and users as props.
  
  // <ResourceForm
  //   courses={['Math 101', 'Physics 201']}
  //   labs={['Physics Lab', 'Chemistry Lab']}
  //   users={['Professor John', 'Dr. Smith', 'TA Alice']}
  // />
  