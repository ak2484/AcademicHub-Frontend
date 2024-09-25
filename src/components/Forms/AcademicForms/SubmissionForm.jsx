import { useState } from "react";
import PropTypes from "prop-types";
/*
  SubmissionForm - for creating submissions
  fields: student (required, selection[available student]), subjectType (required, selection[Experiment, Assignment]), subject (required, selection[available experiment or assignment]), dateOfSubmission (required, date), status (required, selection[Submitted, Not Submitted, Graded, Late]), submissionFile (textbox), feedback (textbox), marks (number).
*/
// export function SubmissionForm() {}

export function SubmissionForm({ students, experiments, assignments }) {
    const [formData, setFormData] = useState({
      student: "",
      subjectType: "Experiment",
      subject: "",
      dateOfSubmission: "",
      status: "Submitted",
      submissionFile: "",
      feedback: "",
      marks: "",
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
  
    const availableSubjects =
      formData.subjectType === "Experiment" ? experiments : assignments;
  
    return (
      <form
        className='max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg'
        onSubmit={handleSubmit}
      >
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='student'
          >
            Student
          </label>
          <select
            id='student'
            name='student'
            required
            value={formData.student}
            onChange={handleChange}
            className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500'
          >
            <option value=''>Select Student</option>
            {students.map((student) => (
              <option key={student} value={student}>
                {student}
              </option>
            ))}
          </select>
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
            <option value='Experiment'>Experiment</option>
            <option value='Assignment'>Assignment</option>
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
            htmlFor='status'
          >
            Status
          </label>
          <select
            id='status'
            name='status'
            required
            value={formData.status}
            onChange={handleChange}
            className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500'
          >
            <option value='Submitted'>Submitted</option>
            <option value='Not Submitted'>Not Submitted</option>
            <option value='Graded'>Graded</option>
            <option value='Late'>Late</option>
          </select>
        </div>
  
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='submissionFile'
          >
            Submission File
          </label>
          <input
            type='file'
            id='submissionFile'
            name='submissionFile'
            value={formData.submissionFile}
            onChange={handleChange}
            className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500'
          />
        </div>
  
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='feedback'
          >
            Feedback
          </label>
          <textarea
            id='feedback'
            name='feedback'
            value={formData.feedback}
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
            Submit
          </button>
        </div>
      </form>
    );
  }
  
  // Usage:
  // You would use this component by passing in students, experiments, and assignments as props.
  
  // <SubmissionForm
  //   students={['John Doe', 'Jane Smith', 'Alice Johnson']}
  //   experiments={['Physics Experiment 1', 'Chemistry Experiment 2']}
  //   assignments={['Math Assignment 1', 'English Assignment 2']}
  // />