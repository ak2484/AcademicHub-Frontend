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
    <div className='m-4  w-auto bg-lavender-web rounded-xl shadow-xl '>
      <h1 className='text-2xl font-bold mt-6 text-center text-dark-imperial-blue'>
        Enquiry Form
      </h1>
      <div className='bg-white flex justify-center items-center w-full shadow-lg rounded-lg p-4  bg-lavender-web '>
        {formStatus && (
          <div className='mb-4 p-3 text-center text-green-600 bg-green-100 rounded-lg'>
            {formStatus}
          </div>
        )}

        <form onSubmit={handleSubmit} className='mx-auto p-6  w-[400px]'>
          {/* Student Name */}
          <div className='mb-4'>
            <label
              className='block text-dark-imperial-blue text-sm font-semibold mb-2 '
              htmlFor='name'
            >
              Name
            </label>
            <input
              type='text'
              id='name'
              name='name'
              value={formData.name}
              onChange={handleChange}
              className='w-full  px-4 py-2 border border-gray-300 rounded-md placeholder-smoky-black text-smoky-black bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'
              required
              placeholder='Enter your name'
            />
          </div>

          {/* Student Email */}
          <div className='mb-4'>
            <label
              className='block text-dark-imperial-blue text-sm font-semibold mb-2 '
              htmlFor='email'
            >
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              className='w-full  px-4 py-2 border border-gray-300 rounded-md placeholder-smoky-black text-smoky-black bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'
              required
              placeholder='Enter your email'
            />
          </div>

          {/* Subject */}
          <div className='mb-4'>
            <label
              className='block text-dark-imperial-blue text-sm font-semibold mb-2 '
              htmlFor='subject'
            >
              Subject
            </label>
            <input
              type='text'
              id='subject'
              name='subject'
              value={formData.subject}
              onChange={handleChange}
              className='w-full  px-4 py-2 border border-gray-300 rounded-md placeholder-smoky-black text-smoky-black bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'
              required
              placeholder='Enter the subject of your enquiry'
            />
          </div>

          {/* Message */}
          <div className='mb-4'>
            <label
              className='block text-dark-imperial-blue text-sm font-semibold mb-2 '
              htmlFor='message'
            >
              Message
            </label>
            <textarea
              id='message'
              name='message'
              value={formData.message}
              onChange={handleChange}
              className='w-full  px-4 py-2 border border-gray-300 rounded-md placeholder-smoky-black text-smoky-black bg-white-smoke focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'
              required
              rows='5'
              placeholder='Write your enquiry here'
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className='text-center'>
            <button
              type='submit'
              className='bg-palatinate-blue text-white-smoke px-5 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-palatinate-blue text-sm'
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
