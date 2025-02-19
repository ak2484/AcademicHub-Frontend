import React from "react";

const AnnouncementCard = ({ title, content, date }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 md:p-6 lg:p-8 w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
      <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2 text-gray-900">{title}</h2>
      <p className="text-gray-700 text-sm md:text-base lg:text-lg">{content}</p>
      <p className="text-gray-500 text-xs md:text-sm lg:text-base mt-2">{date}</p>
    </div>
  );
};

export default AnnouncementCard;
