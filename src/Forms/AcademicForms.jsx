import { useState } from "react";
import PropTypes from "prop-types";

/*
  CourseForm - for creating courses
  fields: name (required, textbox), courseCode (required, textbox), year (required, number), semester (required, number), credits (required, number), department (required, selection[available department]), teachersIncharge (multiple selection [from avialable teaching staff])
*/
// export function CourseForm() {}

export function CourseForm({ departments, teachers }) {
  const [formData, setFormData] = useState({
    name: "",
    courseCode: "",
    year: "",
    semester: "",
    credits: "",
    department: "",
    teachersIncharge: "",
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
    console.log(formData);
  };

  return (
    <form
      className='max-w-lg mx-auto p-8 py-12 bg-lavender-web shadow-md rounded-xl shadow-outline font-sans text-dark-imperial-blue'
      onSubmit={handleSubmit}
    >
      <div className='mb-4'>
        <label
          className='block text-gray-700 text-sm font-bold mb-2'
          htmlFor='name'
        >
          Course Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500'
        />
      </div>

      <div className='mb-4'>
        <label
          className='block text-gray-700 text-sm font-bold mb-2'
          htmlFor='courseCode'
        >
          Course Code
        </label>
        <input
          type="text"
          id="courseCode"
          name="courseCode"
          required
          value={formData.courseCode}
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
          id="year"
          name="year"
          required
          value={formData.year}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Select Year</option>
          <option value="1">1st Year</option>
          <option value="2">2nd Year</option>
          <option value="3">3rd Year</option>
          <option value="4">4th Year</option>
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
          id="semester"
          name="semester"
          required
          value={formData.semester}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Select Semester</option>
          <option value="1">1st Semester</option>
          <option value="2">2nd Semester</option>
          <option value="3">3rd Semester</option>
          <option value="4">4th Semester</option>
          <option value="5">5th Semester</option>
          <option value="6">6th Semester</option>
          <option value="7">7th Semester</option>
          <option value="8">8th Semester</option>
        </select>
      </div>

      <div className='mb-4'>
        <label
          className='block text-gray-700 text-sm font-bold mb-2'
          htmlFor='credits'
        >
          Credits
        </label>
        <input
          type="number"
          id="credits"
          name="credits"
          required
          value={formData.credits}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className='mb-4'>
        <label
          className='block text-gray-700 text-sm font-bold mb-2'
          htmlFor='department'
        >
          Department
        </label>
        <select
          id="department"
          name="department"
          required
          value={formData.department}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Select Department</option>
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
          htmlFor='teachersIncharge'
        >
          Teacher In Charge
        </label>
        <select
          id="teachersIncharge"
          name="teachersIncharge"
          value={formData.teachersIncharge}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Select Teacher</option>
          {teachers.map((teacher) => (
            <option key={teacher} value={teacher}>
              {teacher}
            </option>
          ))}
        </select>
      </div>

      {/* Submit Button */}
      <div className="flex justify-end">
        <button
          type='submit'
          className='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring'
        >
          Create Course
        </button>
      </div>
    </form>
  );
}

CourseForm.propTypes = {
  departments: PropTypes.array.isRequired,
  teachers: PropTypes.array.isRequired,
};


// Usage:
// You would use this component by passing in departments and teachers as props, representing the available departments and teachers, respectively.

// <CourseForm
//   departments={['Computer Science', 'Mechanical', 'Electrical']}
//   teachers={['Mr. Smith', 'Ms. Johnson', 'Dr. Brown']}
// />

//////////////////////////////////////////////////////////////////////////////////////////
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

//////////////////////////////////////////////////////////////////////////////////////////
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

//////////////////////////////////////////////////////////////////////////////////////////
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
//////////////////////////////////////////////////////////////////////////////////////////
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

//////////////////////////////////////////////////////////////////////////////////////////
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

//////////////////////////////////////////////////////////////////////////////////////////
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

//////////////////////////////////////////////////////////////////////////////////////////
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
