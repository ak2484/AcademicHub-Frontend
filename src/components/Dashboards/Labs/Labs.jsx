import { useState } from "react";
import PropTypes from "prop-types";

export default function LabForm({
  courses,
  departments,
  teachers,
  labAssistants,
}) {
  // Define initial form data
  const [formData, setFormData] = useState({
    name: "",
    labCode: "",
    credits: "",
    year: "",
    semester: "",
    course: "",
    department: "",
    teacherInCharge: "",
    labAssistant: "",
  });

  // Step state
  const [currentStep, setCurrentStep] = useState(0);

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
    console.log(formData);
  };

  // Move to the next step
  const nextStep = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, 2));
  };

  // Move to the previous step
  const prevStep = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
  };

  return (
    <>
      <div>
        <div className='flex justify-center items-center w-auto bg-lavender-web rounded-xl '>
          <form
            className='mx-auto p-6 bg-white shadow-lg rounded-lg w-[400px] '
            onSubmit={handleSubmit}
          >
            {currentStep === 0 && (
              <div>
                <h3 className='text-2xl font-bold text-dark-imperial-blue mb-6 '>
                  Basic Lab Information
                </h3>
                <div className='mb-4'>
                  <label
                    className='block text-dark-imperial-blue text-sm font-semibold mb-2 '
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
                    className='w-full px-4 py-2 placeholder-smoky-black border border-gray-300 rounded-md text-gray-700 bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'
                    placeholder='Enter Lab Name'
                  />
                </div>

                <div className='mb-4'>
                  <label
                    className='block text-dark-imperial-blue text-sm font-semibold mb-2 '
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
                    className='w-full px-4 py-2 border border-gray-300 placeholder-smoky-black rounded-md text-gray-700 bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'
                    placeholder='Enter Lab Code'
                  />
                </div>

                <div className='mb-4'>
                  <label
                    className='block text-dark-imperial-blue text-sm font-semibold mb-2 '
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
                    className='w-full px-4 py-2 border placeholder-smoky-black border-gray-300 rounded-md text-gray-700 bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'
                    placeholder='Enter The Credits'
                  />
                </div>

                <div className='flex justify-end'>
                  <button
                    type='button'
                    onClick={nextStep}
                    className='bg-palatinate-blue text-white-smoke px-5 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-palatinate-blue text-sm'
                  >
                    Next
                  </button>
                </div>
              </div>
            )}

            {currentStep === 1 && (
              <div>
                <h2 className='text-sm font-bold mb-4 text-palatinate-blue'>
                  Select Course and Staff
                </h2>
                <div className='mb-4'>
                  <label
                    className='block text-dark-imperial-blue text-sm font-semibold mb-2 '
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
                    className='w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'
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
                    className='block text-dark-imperial-blue text-sm font-semibold mb-2 '
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
                    className='w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'
                  >
                    <option value=''>Select Semester</option>
                    {[...Array(8).keys()].map((i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1} Semester
                      </option>
                    ))}
                  </select>
                </div>

                <div className='mb-4'>
                  <label
                    className='block text-dark-imperial-blue text-sm font-semibold mb-2 '
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
                    className='w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'
                  >
                    <option value=''>Select Course</option>
                    {courses.map((course) => (
                      <option key={course} value={course}>
                        {course}
                      </option>
                    ))}
                  </select>
                </div>

                <div className='flex justify-between '>
                  <button
                    type='button'
                    onClick={prevStep}
                    className='bg-smoky-black text-white-smoke px-5 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500 text-sm'
                  >
                    Back
                  </button>
                  <button
                    type='button'
                    onClick={nextStep}
                    className='bg-palatinate-blue text-white-smoke px-5 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-palatinate-blue text-sm'
                  >
                    Next
                  </button>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div>
                <h2 className='text-sm font-bold mb-4 text-palatinate-blue'>
                  Assign Staff
                </h2>

                <div className='mb-4'>
                  <label
                    className='block text-dark-imperial-blue text-sm font-semibold mb-2 '
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
                    className='w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'
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
                    className='block text-dark-imperial-blue text-sm font-semibold mb-2 '
                    htmlFor='teacherInCharge'
                  >
                    Teacher In Charge
                  </label>
                  <select
                    id='teacherInCharge'
                    name='teacherInCharge'
                    value={formData.teacherInCharge}
                    onChange={handleChange}
                    className='w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'
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
                    className='block text-dark-imperial-blue text-sm font-semibold mb-2 '
                    htmlFor='labAssistant'
                  >
                    Lab Assistant
                  </label>
                  <select
                    id='labAssistant'
                    name='labAssistant'
                    value={formData.labAssistant}
                    onChange={handleChange}
                    className='w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'
                  >
                    <option value=''>Select Lab Assistant</option>
                    {labAssistants.map((assistant) => (
                      <option key={assistant} value={assistant}>
                        {assistant}
                      </option>
                    ))}
                  </select>
                </div>

                <div className='flex justify-between'>
                  <button
                    type='button'
                    onClick={() => setCurrentStep(2)}
                    className='bg-smoky-black text-white-smoke px-7 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500 text-sm'
                  >
                    Back
                  </button>
                  <button
                    type='submit'
                    className='bg-palatinate-blue text-white-smoke px-5 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-palatinate-blue text-sm'
                  >
                    Submit
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
}

LabForm.propTypes = {
  courses: PropTypes.array.isRequired,
  departments: PropTypes.array.isRequired,
  teachers: PropTypes.array.isRequired,
  labAssistants: PropTypes.array.isRequired,
};
