// Error page for different errors
import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const ErrorPage = ({ errorType }) => {
  // const navigate = useNavigate(); // Initialize navigate

  // const handleLoginInClick = () => {
  //   navigate("loginForm"); // Navigate to the Sign In page
  // };

  let errorMessage;

  // Determine the error message based on errorType
  switch (errorType) {
    case 401:
      errorMessage = "You are not logged in! Please Login to get access";
      break;
    case 404:
      errorMessage = "Oops! The page you are looking for doesn't exist.";
      break;
    case 500:
      errorMessage = "Internal Server Error. Please try again later.";
      break;
    case 403:
      errorMessage = "You don't have permission to access this page.";
      break;
    default:
      errorMessage = "An unexpected error has occurred. Please try again.";
  }

  return (
    <div className='flex items-center justify-center h-screen bg-white-smoke '>
      <div className='text-center border border-smoky-black text-dark-imperial-blue bg-lavender-web rounded-xl  p-4'>
        {/* <h1 className='text-5xl font-bold text-red-600'>{errorType}</h1> */}
        <h1 className='mt-4 text-lg text-gray-700'>{errorMessage}</h1>
        <button
          href='/home'
          className='mt-8 inline-block px-4 py-2 bg-palatinate-blue text-white-smoke rounded-full hover:bg-powder-blue'
          // onClick={handleLoginInClick} //Check How to
        >
          <NavLink to='loginForm'>Login In</NavLink>
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;

// use this in your routing or error handling logic

// <ErrorPage errorType="404" />
