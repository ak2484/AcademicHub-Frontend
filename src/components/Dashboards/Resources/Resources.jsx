import { useState } from "react";
import PropTypes from "prop-types";

/*
  ResourceForm - for creating resources
  fields: name (required, textbox), description (textbox), resourceURL (textbox), resourceFile (file input), subjectType (required, selection[Course, Lab]), subject (required, selection[available course or lab]), uploadedBy (required, selection[available user]).
*/

export default function ResourceForm({ courses, labs, users }) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    resourceURL: "",
    resourceFile: null, // Change to null for file input handling
    subjectType: "Course",
    subject: "",
    uploadedBy: "",
  });

  const [currentStep, setCurrentStep] = useState(1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "resourceFile") {
      setFormData({
        ...formData,
        [name]: e.target.files[0], // Capture file input correctly
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can handle the submission for each step if necessary
    console.log(formData);
  };

  const availableSubjects = formData.subjectType === "Course" ? courses : labs;

  return (
    <form
      className="h-screen w-screen mx-auto p-6 bg-white shadow-lg rounded-lg"
      onSubmit={handleSubmit}
    >
      <h2 className="text-xl font-bold mb-4">Step {currentStep}</h2>

      {currentStep === 1 && (
        <>
          <div className="mb-6">
            <label className="block text-gray-800 text-sm font-bold mb-2" htmlFor="name">
              Resource Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-auto px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-800 text-sm font-bold mb-2" htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-auto px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-start">
            <button
              type="button"
              onClick={() => setCurrentStep(2)}
              className="px-6 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Next
            </button>
          </div>
        </>
      )}

      {currentStep === 2 && (
        <>
          <div className="mb-6">
            <label className="block text-gray-800 text-sm font-bold mb-2" htmlFor="resourceURL">
              Resource URL
            </label>
            <input
              type="text"
              id="resourceURL"
              name="resourceURL"
              value={formData.resourceURL}
              onChange={handleChange}
              className="w-auto px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-800 text-sm font-bold mb-2" htmlFor="resourceFile">
              Resource File
            </label>
            <input
              type="file"
              id="resourceFile"
              name="resourceFile"
              onChange={handleChange}
              className="w-auto px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-start">
            <button
              type="button"
              onClick={() => setCurrentStep(1)}
              className="px-6 py-2 bg-gray-500 text-white rounded-md shadow-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              Back
            </button>
            <button
              type="button"
              onClick={() => setCurrentStep(3)}
              className="px-6 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Next
            </button>
          </div>
        </>
      )}

      {currentStep === 3 && (
        <>
          <div className="mb-6">
            <label className="block text-gray-800 text-sm font-bold mb-2" htmlFor="subjectType">
              Subject Type
            </label>
            <select
              id="subjectType"
              name="subjectType"
              required
              value={formData.subjectType}
              onChange={handleChange}
              className="w-auto px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Course">Course</option>
              <option value="Lab">Lab</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block text-gray-800 text-sm font-bold mb-2" htmlFor="subject">
              Subject
            </label>
            <select
              id="subject"
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              className="w-auto px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Subject</option>
              {availableSubjects.map((subject) => (
                <option key={subject} value={subject}>
                  {subject}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-6">
            <label className="block text-gray-800 text-sm font-bold mb-2" htmlFor="uploadedBy">
              Uploaded By
            </label>
            <select
              id="uploadedBy"
              name="uploadedBy"
              required
              value={formData.uploadedBy}
              onChange={handleChange}
              className="w-auto px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select User</option>
              {users.map((user) => (
                <option key={user} value={user}>
                  {user}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-start">
            <button
              type="button"
              onClick={() => setCurrentStep(2)}
              className="px-6 py-2 bg-gray-500 text-white rounded-md shadow-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              Back
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </div>
        </>
      )}
    </form>
  );
}

ResourceForm.propTypes = {
  courses: PropTypes.array.isRequired,
  labs: PropTypes.array.isRequired,
  users: PropTypes.array.isRequired,
};

// Usage example:
// <ResourceForm
//   courses={['Math 101', 'Physics 201']}
//   labs={['Physics Lab', 'Chemistry Lab']}
//   users={['Professor John', 'Dr. Smith', 'TA Alice']}
// />
