import React, { useState } from "react";
import AnnouncementForm from "./AnnouncementsForm";

const AnnouncementList = ({ announcements }) => {
  return (
    <>
      <div className='p-6 text-dark-imperial-blue bg-white-smoke rounded-lg shadow-lg w-[1200px] '>
        <h2 className='text-2xl  font-bold text-center mb-4'>Announcements</h2>
        {announcements.length === 0 ? (
          <p className='text-center text-gray-600'>
            No announcements available.
          </p>
        ) : (
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 space-y-4  '>
            {announcements.map((announcement, index) => (
              <div
                key={index}
                className='p-4 bg-lavender-web rounded-lg shadow-lg border-l-4 border-dark-imperial-blue  hover:scale-110'
              >
                <h3 className='text-xl font-semibold mb-2'>
                  {announcement.title}
                </h3>
                <p className='text-gray-700 mb-2'>{announcement.content}</p>
                <span className='text-sm '>
                  Posted on{" "}
                  <span className='font-semibold'>{announcement.date}</span>{" "}
                  Time{" "}
                  <span className='font-semibold'>{announcement.time}</span>
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default AnnouncementList;
