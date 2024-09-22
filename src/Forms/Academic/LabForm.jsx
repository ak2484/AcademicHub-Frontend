import { useState } from "react";
import PropTypes from "prop-types";
/*
  LabForm - for creating labs
  fields: name (required, textbox), labCode (required, textbox), credits (required, number), year (required, number), semester (required, number), course (required, selection[available course]), department (required, selection[available department]), teachersIncharge (multiple selection [from avialable teaching staff]), labAssistants (multiple selection [from avialable non-teaching staff]).
 */
// export function LabForm() {}

export function LabForm({ courses, departments, teachers, labAssistants }) {
    // Define initial form data
    const [formData, setFormData] = useState({
      name: "",
      labCode: "",
      credits: "",
      year: "",
      semester: "",
      course: "",
      department: "",
      teacherInCharge: "", // Changed to a single value
      labAssistant: "", // Changed to a single value
    });
  
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
            Lab Name
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
            htmlFor='labCode'
          >
            Lab Code
          </label>
          <input
            type='text'
            id='labCode'
            name='labCode'
            required
            value={formData.labCode}
            onChange={handleChange}
            className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500'
          />
        </div>
  
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='credits'
          >
            Credits
          </label>
          <input
            type='number'
            id='credits'
            name='credits'
            required
            value={formData.credits}
            onChange={handleChange}
            className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500'
          />
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
            <option value='1'>1st Year</option>
            <option value='2'>2nd Year</option>
            <option value='3'>3rd Year</option>
            <option value='4'>4th Year</option>
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
            <option value='1'>1st Semester</option>
            <option value='2'>2nd Semester</option>
            <option value='3'>3rd Semester</option>
            <option value='4'>4th Semester</option>
            <option value='5'>5th Semester</option>
            <option value='6'>6th Semester</option>
            <option value='7'>7th Semester</option>
            <option value='8'>8th Semester</option>
          </select>
        </div>
  
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='course'
          >
            Course
          </label>
          <select
            id='course'
            name='course'
            required
            value={formData.course}
            onChange={handleChange}
            className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500'
          >
            <option value=''>Select Course</option>
            {courses.map((course) => (
              <option key={course} value={course}>
                {course}
              </option>
            ))}
          </select>
        </div>
  
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='department'
          >
            Department
          </label>
          <select
            id='department'
            name='department'
            required
            value={formData.department}
            onChange={handleChange}
            className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500'
          >
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
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='teacherInCharge'
          >
            Teacher In Charge
          </label>
          <select
            id='teacherInCharge'
            name='teacherInCharge'
            value={formData.teacherInCharge}
            onChange={handleChange}
            className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500'
          >
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
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='labAssistant'
          >
            Lab Assistant
          </label>
          <select
            id='labAssistant'
            name='labAssistant'
            value={formData.labAssistant}
            onChange={handleChange}
            className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500'
          >
            <option value=''>Select Lab Assistant</option>
            {labAssistants.map((assistant) => (
              <option key={assistant} value={assistant}>
                {assistant}
              </option>
            ))}
          </select>
        </div>
  
        <div className='flex justify-end'>
          <button
            type='submit'
            className='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring'
          >
            Create Lab
          </button>
        </div>
      </form>
    );
  }
  
  LabForm.propTypes = {
    courses: PropTypes.array.isRequired,
    departments: PropTypes.array.isRequired,
    teachers: PropTypes.array.isRequired,
    labAssistants: PropTypes.array.isRequired,
  };
  
  // Usage:
  // You would use this component by passing in courses, departments, teachers, and labAssistants as props, representing the available courses, departments, teachers, and lab assistants respectively.
  
  // <LabForm
  //   courses={['Computer Science 101', 'Physics 201', 'Chemistry 301']}
  //   departments={['Computer Science', 'Mechanical', 'Electrical']}
  //   teachers={['Mr. Smith', 'Ms. Johnson', 'Dr. Brown']}
  //   labAssistants={['John Doe', 'Jane Roe', 'Sam Smith']}
  // />