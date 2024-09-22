import { useState } from "react";
import PropTypes from "prop-types";
/*
  ExamScoreForm - for creating exam scores
  fields: exam (required, selection[available exam]), student (required, selection[available student]), marks (required, number), remark (textbox).
 */
// export function ExamScoreForm() {}

export function ExamScoreForm({ exams, students }) {
    const [formData, setFormData] = useState({
      exam: "",
      student: "",
      marks: "",
      remark: "",
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
  
    return (
      <form
        className='max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg'
        onSubmit={handleSubmit}
      >
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='exam'
          >
            Exam
          </label>
          <select
            id='exam'
            name='exam'
            required
            value={formData.exam}
            onChange={handleChange}
            className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500'
          >
            <option value=''>Select Exam</option>
            {exams.map((exam) => (
              <option key={exam} value={exam}>
                {exam}
              </option>
            ))}
          </select>
        </div>
  
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
            htmlFor='remark'
          >
            Remark
          </label>
          <textarea
            id='remark'
            name='remark'
            value={formData.remark}
            onChange={handleChange}
            className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500'
          />
        </div>
  
        <div className='flex justify-end'>
          <button
            type='submit'
            className='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring'
          >
            Submit Score
          </button>
        </div>
      </form>
    );
  }
  
  // Usage:
  // You would use this component by passing in exams and students as props, representing the available exams and students.
  
  // <ExamScoreForm
  //   exams={['Midterm Exam', 'Final Exam']}
  //   students={['John Doe', 'Jane Smith', 'Alice Johnson']}
  // />