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
    // Add login form submission logic here
    const email = formData.combinedDetails;

    console.log("Email:", email);
    console.log("Password:", formData.password);
  };

  return (
    <form
    onSubmit={handleSubmit}
    className="max-w-md mx-auto p-6 bg-white justify-evenly shadow-lg rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
  >
    <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
      Login
    </h2>
  
    <div className="mb-5">
      <label
        htmlFor="combinedDetails"
        className="block text-gray-600 text-sm font-semibold mb-2"
      >
        Email
      </label>
      <input
        type="email"
        id="combinedDetails"
        name="combinedDetails"
        value={formData.combinedDetails}
        onChange={handleChange}
        placeholder="Enter your email"
        required
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
      />
    </div>
  
    <div className="mb-5">
      <label
        htmlFor="password"
        className="block text-gray-600 text-sm font-semibold mb-2"
      >
        Password
      </label>
      <input
        type="password"
        id="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Enter your password"
        required
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
      />
    </div>
  
    <button
      type="submit"
      className="w-full justify-evenly bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-3 rounded-lg hover:bg-gradient-to-l hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition-all duration-300 transform hover:scale-105"
    >
      Login
    </button>
  
    <div className="mt-6 text-center">
      <a href="#" className="text-sm text-blue-500 hover:underline">
        Forgot your password?
      </a>
    </div>
  </form>
  );
}

// EnrollForm only for college admins
export function EnrollForm() {
  const [formData, setFormData] = useState({
    email: "",
    mobileNumber: "",
    instituteName: "",
    dteUdiseCode: "",
    message: "",
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
    // Add form submission logic here
    console.log("Enrollment data:", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='max-w-md mx-auto p-6 bg-white shadow-md rounded-lg'
    >
      <h2 className='text-2xl font-semibold mb-4 text-gray-800'>
        Admin Enrollment
      </h2>

      <div className='mb-4'>
        <label
          htmlFor='instituteName'
          className='block text-gray-700 text-sm font-medium mb-1'
        >
          Institute Name
        </label>
        <input
          type='text'
          id='instituteName'
          name='instituteName'
          value={formData.instituteName}
          onChange={handleChange}
          placeholder='Enter your insititute name'
          required
          className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500'
        />
      </div>

      <div className='mb-4'>
        <label
          htmlFor='email'
          className='block text-gray-700 text-sm font-medium mb-1'
        >
          Email
        </label>
        <input
          type='email'
          id='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          placeholder='Enter your email'
          required
          className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500'
        />
      </div>

      <div className='mb-4'>
        <label
          htmlFor='mobileNumber'
          className='block text-gray-700 text-sm font-medium mb-1'
        >
          Mobile Number
        </label>
        <input
          type='tel'
          id='mobileNumber'
          name='mobileNumber'
          value={formData.mobileNumber}
          onChange={handleChange}
          placeholder='Enter your monile no.'
          required
          className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500'
        />
      </div>

      <div className='mb-4'>
        <label
          htmlFor='dteUdiseCode'
          className='block text-gray-700 text-sm font-medium mb-1'
        >
          DTE/UDISE Code
        </label>
        <input
          type='text'
          id='dteUdiseCode'
          name='dteUdiseCode'
          value={formData.dteUdiseCode}
          onChange={handleChange}
          placeholder='Enter DTE/UDISE Code'
          required
          className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500'
        />
      </div>

      <div className='mb-4'>
        <label
          htmlFor='message'
          className='block text-gray-700 text-sm font-medium mb-1'
        >
          Message
        </label>
        <textarea
          id='message'
          name='message'
          value={formData.message}
          onChange={handleChange}
          placeholder='Write your message'
          required
          className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500'
        />
      </div>

      <button
        type='submit'
        className='w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200'
      >
        Submit
      </button>
    </form>
  );
}

// Default export
export default { LoginForm, EnrollForm };
