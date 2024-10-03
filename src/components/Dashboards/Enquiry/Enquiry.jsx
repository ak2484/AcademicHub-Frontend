import React, { useState } from "react";

const EnquiryPage = () => {
  // Form state management
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState("");

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just simulate a submission response
    // In a real scenario, you can send this data to the backend via an API
    console.log("Form submitted:", formData);

    // Show submission status
    setFormStatus("Your enquiry has been submitted successfully!");
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="m-4 flex justify-center items-center bg-gray-100 w-full min-h-screen">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-3/4 lg:w-1/2">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Enquiry Form
        </h1>
        
        {formStatus && (
          <div className="mb-4 p-3 text-center text-green-600 bg-green-100 rounded-lg">
            {formStatus}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Student Name */}
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              required
              placeholder="Enter your name"
            />
          </div>

          {/* Student Email */}
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              required
              placeholder="Enter your email"
            />
          </div>

          {/* Subject */}
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="subject">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              required
              placeholder="Enter the subject of your enquiry"
            />
          </div>

          {/* Message */}
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              required
              rows="5"
              placeholder="Write your enquiry here"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Submit Enquiry
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EnquiryPage;







// Backend 
// const handleSubmit = (e) => {
//   e.preventDefault();

//   fetch("/api/enquiry", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(formData),
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       console.log("Form submitted:", data);
//       setFormStatus("Your enquiry has been submitted successfully!");
//     })
//     .catch((error) => {
//       console.error("Error submitting form:", error);
//       setFormStatus("There was an error submitting your enquiry. Please try again.");
//     });

//   // Reset form
//   setFormData({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });
// };
