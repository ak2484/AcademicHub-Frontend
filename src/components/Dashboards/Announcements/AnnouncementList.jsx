import React from "react";

const AnnouncementList = ({ announcements }) => {
  return (
    <div className="p-6 text-dark-imperial-blue bg-white-smoke rounded-lg shadow-lg max-w-7xl w-full mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Announcements</h2>

      {announcements.length === 0 ? (
        <p className="text-center text-gray-600">No announcements available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {announcements.map((announcement, index) => (
            <div
              key={index}
              className="p-4 bg-lavender-web rounded-lg shadow-lg border-l-4 border-dark-imperial-blue 
                        transition-transform duration-300 hover:scale-105"
            >
              <h3 className="text-lg md:text-xl font-semibold mb-2">{announcement.title}</h3>
              <p className="text-gray-700 text-sm md:text-base mb-2">{announcement.content}</p>
              <span className="text-xs md:text-sm">
                Posted on <span className="font-semibold">{announcement.date}</span> at{" "}
                <span className="font-semibold">{announcement.time}</span>
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AnnouncementList;
