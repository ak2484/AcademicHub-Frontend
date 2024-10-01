import { useState } from "react";
import PropTypes from "prop-types";

/*
  ExamForm - for creating examinations
  fields: name (required, textbox), description (textbox), subjectType (required, selection[Course, Lab]), subject (required, selection[available course or lab]), year (required, number), semester (required, number), examDate (required, date), marks (required, number), startTime (required, time), endTime (required, time).
*/

export default function ExamForm({ courses, labs }) {
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

  const [currentStep, setCurrentStep] = useState(1);

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

  const years = ["1", "2", "3", "4"];
  const semesters = ["1", "2", "3", "4", "5", "6", "7", "8"];

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <>
            <div className='mb-4'>
              <label
                className=' text-gray-700 text-sm font-bold mb-2'
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
          </>
        );

      case 2:
        return (
          <>
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
          </>
        );

      case 3:
        return (
          <>
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
          </>
        );

      default:
        return null;
    }
  };

  return (
    <form
      className='max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg'
      onSubmit={handleSubmit}
    >
      {renderStep()}

      <div className='flex justify-between mt-4'>
        {currentStep > 1 && (
          <button
            type='button'
            onClick={() => setCurrentStep((prev) => prev - 1)}
            className='px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500 focus:outline-none focus:ring'
          >
            Previous
          </button>
        )}
        {currentStep < 3 ? (
          <button
            type='button'
            onClick={() => setCurrentStep((prev) => prev + 1)}
            className='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring'
          >
            Next
          </button>
        ) : (
          <button
            type='submit'
            className='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring'
          >
            Submit
          </button>
        )}
      </div>
    </form>
  );
}

ExamForm.propTypes = {
  courses: PropTypes.arrayOf(PropTypes.string).isRequired,
  labs: PropTypes.arrayOf(PropTypes.string).isRequired,
};
