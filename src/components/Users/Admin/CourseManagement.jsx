// src/components/CourseManagement.jsx
import React, { useState } from 'react';

const CourseManagement = () => {
  const [courses, setCourses] = useState([]);
  const [courseName, setCourseName] = useState('');

  const addCourse = () => {
    setCourses([...courses, courseName]);
    setCourseName('');
  };

  const deleteCourse = (index) => {
    const newCourses = courses.filter((_, i) => i !== index);
    setCourses(newCourses);
  };

  return (
    <div className='p-6'>
      <h1 className='text-xl font-bold mb-4'>Course Management</h1>
      <input 
        type="text" 
        value={courseName} 
        onChange={(e) => setCourseName(e.target.value)} 
        placeholder="Add Course" 
        className='border p-2 mb-2'
      />
      <button onClick={addCourse} className='bg-blue-500 text-white px-4 py-2 rounded'>
        Add Course
      </button>
      <ul className='mt-4'>
        {courses.map((course, index) => (
          <li key={index} className='flex justify-between items-center border-b py-2'>
            {course}
            <button onClick={() => deleteCourse(index)} className='text-red-500'>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseManagement;
