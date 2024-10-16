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
            <h3 className='text-2xl font-bold text-dark-imperial-blue mb-6'>
              Exam Information
            </h3>
            <div className='mb-4 '>
              <label
                className='block text-dark-imperial-blue text-sm font-semibold mb-2'
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
                className='w-full px-4 py-2 border border-gray-300 rounded-md placeholder-smoky-black text-smoky-black bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'
                placeholder='Enter exam name'
              />
            </div>

            <div className='mb-4'>
              <label
                className='block text-dark-imperial-blue text-sm font-semibold mb-2'
                htmlFor='description'
              >
                Description
              </label>
              <textarea
                id='description'
                name='description'
                value={formData.description}
                onChange={handleChange}
                className='w-full px-4 py-2 border border-gray-300 rounded-md placeholder-smoky-black text-smoky-black bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'
                placeholder='Enter description'
              />
            </div>

            <div className='mb-4'>
              <label
                className='block text-dark-imperial-blue text-sm font-semibold mb-2'
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
                className='w-full px-4 py-2 border border-gray-300 rounded-md text-smoky-black bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'
              >
                <option value='Course'>Course</option>
                <option value='Lab'>Lab</option>
              </select>
            </div>

            <div className='mb-4'>
              <label
                className='block text-dark-imperial-blue text-sm font-semibold mb-2'
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
                className='w-full px-4 py-2 border border-gray-300 rounded-md text-smoky-black bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'
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
            <h3 className='text-2xl font-bold text-dark-imperial-blue mb-6'>
              Exam Dates & Details
            </h3>
            <div className='mb-4'>
              <label
                className='block text-dark-imperial-blue text-sm font-semibold mb-2'
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
                className='w-full px-4 py-2 border border-gray-300 rounded-md text-smoky-black bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'
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
                className='block text-dark-imperial-blue text-sm font-semibold mb-2'
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
                className='w-full px-4 py-2 border border-gray-300 rounded-md text-smoky-black bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'
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
                className='block text-dark-imperial-blue text-sm font-semibold mb-2'
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
                className='w-full px-4 py-2 border border-gray-300 rounded-md text-smoky-black bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'
              />
            </div>
          </>
        );

      case 3:
        return (
          <>
            <h3 className='text-2xl font-bold text-dark-imperial-blue mb-6'>
              Marks & Timing
            </h3>
            <div className='mb-4'>
              <label
                className='block text-dark-imperial-blue text-sm font-semibold mb-2'
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
                className='w-full px-4 py-2 border border-gray-300 rounded-md placeholder-smoky-black text-smoky-black bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'
                placeholder='Enter marks'
              />
            </div>

            <div className='mb-4'>
              <label
                className='block text-dark-imperial-blue text-sm font-semibold mb-2'
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
                className='w-full px-4 py-2 border border-gray-300 rounded-md text-smoky-black bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'
              />
            </div>

            <div className='mb-4'>
              <label
                className='block text-dark-imperial-blue text-sm font-semibold mb-2'
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
                className='w-full px-4 py-2 border border-gray-300 rounded-md text-smoky-black bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'
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
      className='max-w-xl mx-auto p-6 bg-lavender-web shadow-lg rounded-lg w-[400px]'
      onSubmit={handleSubmit}
    >
      {renderStep()}

      <div className='flex justify-between mt-6'>
        {currentStep > 1 && (
          <button
            type='button'
            onClick={() => setCurrentStep((prev) => prev - 1)}
            className='px-5 flex py-2 bg-smoky-black text-white-smoke rounded-full hover:bg-gray  focus:outline-none focus:ring-2 focus:ring-gray-500 justify-start'
          >
            Previous
          </button>
        )}
        {currentStep < 3 ? (
          <button
            type='button'
            onClick={() => setCurrentStep((prev) => prev + 1)}
            className='flex px-10 py-2 bg-palatinate-blue text-white-smoke rounded-full hover:bg-risd-blue focus:outline-none focus:ring-2 focus:ring-blue-500 justify-end '
          >
            Next
          </button>
        ) : (
          <button
            type='submit'
            className='px-7 py-2 bg-palatinate-blue text-white-smoke rounded-full hover:bg-risd-blue focus:outline-none focus:ring-2 '
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
