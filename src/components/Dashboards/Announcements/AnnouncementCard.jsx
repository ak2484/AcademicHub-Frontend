// src/components/Card.jsx
import React from "react";

const AnnouncementCard = ({ title, content, date }) => {
  return (
    <div className='bg-white shadow-md rounded p-4'>
      <h2 className='text-xl font-semibold mb-2'>{title}</h2>
      <p className='text-gray-700'>{content}</p>
      <p>{date}</p>
    </div>
  );
};

export default AnnouncementCard;
