import { useState } from "react";
import PropTypes from "prop-types";
/*
  ExamForm - for creating examinations
  fields: name (required, textbox), description (textbox), subjectType (required, selection[Course, Lab]), subject (required, selection[available course or lab]), year (required, number), semester (required, number), examDate (required, date), marks (required, number), startTime (required, time), endTime (required, time).
*/
// export function ExamForm() {}

export function ExamForm({ courses, labs }) {
    const [formData, setFormData] = useState({
      name: "",
      description: "",
      subjectType: "Course",
      subject: "",
      year: "",
      semester: "",
      examDate: "",
      marks: "",
      startTime: "",
      endTime: "",
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
        ...(name === "subjectType" && { subject: "" }), // Clear subject when subjectType changes
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Submit the form data
      console.log(formData);
    };
  
    const availableSubjects = formData.subjectType === "Course" ? courses : labs;
  
    // Define options for year and semester
    const years = ["1", "2", "3", "4"];
    const semesters = ["1", "2", "3", "4", "5", "6", "7", "8"];
  
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
            Exam Name
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
            htmlFor='year'
          >
            Year
          </label>
          <select
            id='year'
            name='year'
            required
            value={formData.year}
            onChange={handleChange}
            className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500'
          >
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
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='semester'
          >
            Semester
          </label>
          <select
            id='semester'
            name='semester'
            required
            value={formData.semester}
            onChange={handleChange}
            className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500'
          >
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
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='examDate'
          >
            Exam Date
          </label>
          <input
            type='date'
            id='examDate'
            name='examDate'
            required
            value={formData.examDate}
            onChange={handleChange}
            className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500'
          />
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
  
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='startTime'
          >
            Start Time
          </label>
          <input
            type='time'
            id='startTime'
            name='startTime'
            required
            value={formData.startTime}
            onChange={handleChange}
            className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500'
          />
        </div>
  
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='endTime'
          >
            End Time
          </label>
          <input
            type='time'
            id='endTime'
            name='endTime'
            required
            value={formData.endTime}
            onChange={handleChange}
            className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500'
          />
        </div>
  
        <div className='flex justify-end'>
          <button
            type='submit'
            className='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring'
          >
            Create Exam
          </button>
        </div>
      </form>
    );
  }
  
  ExamForm.propTypes = {
    courses: PropTypes.array.isRequired,
    labs: PropTypes.array.isRequired,
  };
  
  // Usage:
  // You would use this component by passing in courses and labs as props, representing the available courses and labs.
  
  // <ExamForm
  //   courses={['Math 101', 'Physics 202', 'Chemistry 303']}
  //   labs={['Physics Lab', 'Chemistry Lab', 'Biology Lab']}
  // />