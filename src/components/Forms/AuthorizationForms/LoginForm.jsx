import { useState } from "react";
import axios from "axios";
import { API_URL } from "../../../constants";

import { activePageFunction } from "../../../constants";
import { NavLink, useNavigate } from "react-router-dom";

// LoginForm for students
export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPasssword] = useState("");

  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordInput = (e) => {
    setPasssword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios({
        method: "POST",
        url: `${API_URL}/api/v1/users/login`,
        data: {
          email,
          password,
        },
      });
      console.log(res);
      navigate("/layout");
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const navigate = useNavigate();

  return (
    <>
      <div className='bg-white-smoke'>
        <div className='bg-lavender-web w-full'>
          <div className='w-full h-auto '>
            <img
              className='h-12 w-auto mr-2'
              src='./src/assets/AcademicHubLogo2.png'
              alt='logo'
            />
          </div>
          <form
            onSubmit={handleSubmit}
            className='max-w-md mx-auto p-6 to-blue-50 shadow-lg rounded-lg bg-lavender-web text-dark-imperial-blue '
          >
            <h2 className='text-3xl font-bold mb-6 text-blue-800 text-center'>
              Login
            </h2>

            <div className='mb-5'>
              <label
                htmlFor='email'
                className='block text-gray-700 text-sm font-medium mb-2'
              >
                Email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                value={email}
                onChange={handleEmailInput}
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
                value={password}
                onChange={handlePasswordInput}
                placeholder='Enter your password'
                required
                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300'
              />
            </div>

            <button
              type='submit'
              className='w-full bg-palatinate-blue text-white-smoke px-5 py-3 rounded-full  focus:outline-none focus:ring-2 focus:ring-blue-200  text-xl'
            >
              Login
            </button>

            <div className='mt-6 text-center'>
              <a href='#' className='text-sm text-blue-500 hover:underline'>
                Forgot your password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
