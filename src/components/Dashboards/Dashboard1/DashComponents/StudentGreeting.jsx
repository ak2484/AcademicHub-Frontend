import React from "react";

const StudentGreeting = ({ name, imageUrl }) => {
  return (
    <div className='w-max m-4 flex items-center p-4 bg-white-smoke '>
      <img
        className='w-16 h-16 rounded-full mr-4'
        src={imageUrl}
        alt={`${name}'s avatar`}
      />
      <div>
        <span>
          <h2 className='text-lg font-semibold text-smoky-black'>
            Hi, {name}!
          </h2>
          <p className='text-smoky-black'>Welcome back!</p>
        </span>
      </div>
    </div>
  );
};

export default StudentGreeting;
