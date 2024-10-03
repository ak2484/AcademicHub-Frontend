import React from "react";

const AnnouncementList = ({ announcements }) => {
  return (
    <div className="m-4 p-6 bg-white rounded-lg shadow-lg w-full md:w-3/4 lg:w-1/2">
      <h2 className="text-2xl font-bold text-center mb-4">Announcements</h2>
      {announcements.length === 0 ? (
        <p className="text-center text-gray-600">No announcements available.</p>
      ) : (
        <ul className="space-y-4">
          {announcements.map((announcement, index) => (
            <li
              key={index}
              className="p-4 bg-gray-100 rounded-lg shadow-lg border-l-4 border-blue-500"
            >
              <h3 className="text-xl font-semibold mb-2">{announcement.title}</h3>
              <p className="text-gray-700 mb-2">{announcement.content}</p>
              <span className="text-sm text-gray-500">Posted on {announcement.date}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AnnouncementList;
