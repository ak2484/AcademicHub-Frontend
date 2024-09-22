import { useState } from "react";
import PropTypes from "prop-types";
/*
  ExperimentForm - for creating experiments
  fields: name (required, textbox), instruction (required, textbox), dateOfPerformance (required, date), dateOfSubmission (required, date), subject (required, selection[available labs]), marks (required, number).
*/
// export function ExperimentForm() {}

export function ExperimentForm({ labs }) {
    const [formData, setFormData] = useState({
      name: "",
      instruction: "",
      dateOfPerformance: "",
      dateOfSubmission: "",
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
            Experiment Name
          </label>
          <input
            type='text'
            id='name'
            name='name'
            required
            value={formData.name}
            onChange={handleChange}
            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
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
            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
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
            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
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
            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
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
            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          >
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
            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>
  
        <div className='flex justify-end'>
          <button
            type='submit'
            className='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
          >
            Create Experiment
          </button>
        </div>
      </form>
    );
  }
  
  ExperimentForm.propTypes = {
    labs: PropTypes.array.isRequired,
  };
  
  // Usage:
  // You would use this component by passing in labs as a prop, representing the available labs.
  
  // <ExperimentForm
  //   labs={['Physics Lab', 'Chemistry Lab', 'Biology Lab']}
  // />