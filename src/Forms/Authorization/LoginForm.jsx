import { useState } from "react";

// LoginForm for students
export function LoginForm() {
  const [formData, setFormData] = useState({
    combinedDetails: "",
    password: "",
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
    const email = formData.combinedDetails;

    console.log("Email:", email);
    console.log("Password:", formData.password);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='max-w-md mx-auto p-6 bg-gradient-to-br from-white to-blue-50 shadow-lg rounded-lg text-dark-imperial-blue transition-transform transform hover:scale-105'
    >
      <h2 className='text-3xl font-bold mb-6 text-blue-800 text-center'>
        Login
      </h2>

      <div className='mb-5'>
        <label
          htmlFor='combinedDetails'
          className='block text-gray-700 text-sm font-medium mb-2'
        >
          Email
        </label>
        <input
          type='email'
          id='combinedDetails'
          name='combinedDetails'
          value={formData.combinedDetails}
          onChange={handleChange}
          placeholder='Enter your email'
          required
          className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300'
        />
      </div>

      <div className='mb-5'>
        <label
          htmlFor='password'
          className='block text-gray-700 text-sm font-medium mb-2'
        >
          Password
        </label>
        <input
          type='password'
          id='password'
          name='password'
          value={formData.password}
          onChange={handleChange}
          placeholder='Enter your password'
          required
          className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300'
        />
      </div>

      <button
        type='submit'
        className='w-full bg-gradient-to-r from-palatinate-blue to-blue-600 text-white-smoke px-5 py-3 rounded-full hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-blue-200 transition duration-300 transform hover:scale-105 text-xl'      >
        Login
      </button>

      <div className='mt-6 text-center'>
        <a href='#' className='text-sm text-blue-500 hover:underline'>
          Forgot your password?
        </a>
      </div>
    </form>
  );
}

export default LoginForm