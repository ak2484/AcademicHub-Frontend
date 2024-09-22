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
    <div className='flex-col items-center justify-center text-[17px] text-smoky-black'>
      <div className='flex items-center justify-center  mb-4'>
        <img
          className=' h-12 w-auto  mb-4'
          src='./src/assets/AcademicHubLogo2.png'
          alt='logo'
        />
      </div>
      <form
        onSubmit={handleSubmit}
        className='max-w-lg mx-auto p-8 py-12 bg-lavender-web shadow-md rounded-xl shadow-outline font-sans'
      >
        <h2 className='text-2xl font-semibold mb-4 font-serif  py-4 text-[30px] text-smoky-black'>
          Sign In
        </h2>

        <div className='mb-6'>
          <label
            htmlFor='combinedDetails'
            className='block text-[17px] font-medium mb-1'
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
            className='w-full px-3 py-2 border border-lavender-blue bg-white-smoke  text-dark-imperial-blue rounded focus:outline-none focus:ring focus:border-lavender-blue-500 placeholder-cadmium-blue'
          />
        </div>

        <div className='mb-6'>
          <label
            htmlFor='password'
            className='block  text-[17px] font-medium mb-1'
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
            className='w-full px-3 py-2 border border-lavender-blue rounded bg-white-smoke text-dark-imperial-blue focus:outline-none focus:ring focus:border-lavender-blue-500 placeholder-cadmium-blue'
          />
        </div>

        <div className='text-[12px] mb-6 text-smoky-black'>
          <p>
            Don’t remember your password?
            <a className='font-semibold underline'>Forget Password</a>
          </p>
        </div>

        <button
          type='submit'
          className='w-full bg-palatinate-blue border-smoky-black text-white-smoke px-4 py-2 rounded-full hover:bg-risd-blue focus:outline-none focus:ring focus:ring-blue-200 border text-[20px] mb-8'
        >
          Sign In
        </button>
      </form>
    </div>
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
      className='max-w-lg mx-auto p-8 py-12 bg-lavender-web shadow-md rounded-xl shadow-outline font-sans text-dark-imperial-blue'
    >
      <h2 className='text-2xl font-semibold mb-4 font-serif  py-4 text-[28px]'>
        Admin Enrollment
      </h2>

      <div className='mb-4'>
        <label
          htmlFor='instituteName'
          className='block text-gray-700 text-[17px] font-medium mb-1'
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
          className='w-full px-3 py-2 border border-lavender-blue bg-white-smoke  text-dark-imperial-blue rounded focus:outline-none focus:ring focus:border-lavender-blue-500 placeholder-cadmium-blue'
        />
      </div>

      <div className='mb-4'>
        <label
          htmlFor='email'
          className='block text-gray-700 text-[17px] font-medium mb-1'
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
          className='w-full px-3 py-2 border border-lavender-blue bg-white-smoke  text-dark-imperial-blue rounded focus:outline-none focus:ring focus:border-lavender-blue-500 placeholder-cadmium-blue'
        />
      </div>

      <div className='mb-4'>
        <label
          htmlFor='mobileNumber'
          className='block text-gray-700 text-[17px] font-medium mb-1'
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
          className='w-full px-3 py-2 border border-lavender-blue bg-white-smoke  text-dark-imperial-blue rounded focus:outline-none focus:ring focus:border-lavender-blue-500 placeholder-cadmium-blue'
        />
      </div>

      <div className='mb-4'>
        <label
          htmlFor='dteUdiseCode'
          className='block text-gray-700 text-[17px] font-medium mb-1'
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
          className='w-full px-3 py-2 border border-lavender-blue bg-white-smoke  text-dark-imperial-blue rounded focus:outline-none focus:ring focus:border-lavender-blue-500 placeholder-cadmium-blue'
        />
      </div>

      <div className='mb-4'>
        <label
          htmlFor='message'
          className='block text-gray-700 text-[17px] font-medium mb-1'
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
          className='w-full px-3 py-2 border border-lavender-blue bg-white-smoke  text-dark-imperial-blue rounded focus:outline-none focus:ring focus:border-lavender-blue-500 placeholder-cadmium-blue'
        />
      </div>

      <button
        type='submit'
        className='w-full bg-palatinate-blue text-white-smoke px-4 py-2 rounded-full hover:bg-powder-blue focus:outline-none focus:ring focus:ring-blue-200 border text-[20px] mb-8'
      >
        Submit
      </button>
    </form>
  );
}

// Default export
export default { LoginForm, EnrollForm };
