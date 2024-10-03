import React, { useState } from "react";

const AnnouncementForm = ({ handleAnnouncementSubmit }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content) {
      handleAnnouncementSubmit({ title, content, date: new Date().toLocaleDateString() });
      setTitle("");
      setContent("");
    }
  };

  return (
    <div className="m-4 p-6 bg-white rounded-lg shadow-lg w-full md:w-3/4 lg:w-1/2">
      <h2 className="text-2xl font-bold text-center mb-4">Create New Announcement</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Title:</label>
          <input
            type="text"
            className="w-full p-2 border rounded-lg focus:outline-none focus:border-blue-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter announcement title"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Content:</label>
          <textarea
            className="w-full p-2 border rounded-lg focus:outline-none focus:border-blue-500"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Enter announcement content"
            rows="4"
            required
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Submit Announcement
          </button>
        </div>
      </form>
    </div>
  );
};

export default AnnouncementForm;
