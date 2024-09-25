// Error page for different errors
import React from 'react';

const ErrorPage = ({ errorType }) => {
    let errorMessage;

    // Determine the error message based on errorType
    switch (errorType) {
        case '404':
            errorMessage = "Oops! The page you are looking for doesn't exist.";
            break;
        case '500':
            errorMessage = "Internal Server Error. Please try again later.";
            break;
        case '403':
            errorMessage = "You don't have permission to access this page.";
            break;
        default:
            errorMessage = "An unexpected error has occurred. Please try again.";
    }

    return (
        <div className='flex items-center justify-center h-screen bg-gray-100'>
            <div className='text-center'>
                <h1 className='text-5xl font-bold text-red-600'>{errorType}</h1>
                <p className='mt-4 text-lg text-gray-700'>{errorMessage}</p>
                <a href='/' className='mt-8 inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700'>
                    Go to Home
                </a>
            </div>
        </div>
    );
};

export default ErrorPage;



// use this in your routing or error handling logic

// <ErrorPage errorType="404" />
