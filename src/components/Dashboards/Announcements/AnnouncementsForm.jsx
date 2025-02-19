import React, { useState } from "react";

const AnnouncementForm = ({ handleAnnouncementSubmit, onCancel }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const currentTime = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && content.trim()) {
      handleAnnouncementSubmit({
        title,
        content,
        date: now.toLocaleDateString(),
        time: currentTime,
      });
      setTitle("");
      setContent("");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <form
        className="w-full max-w-lg p-6 md:p-8 bg-lavender-web shadow-lg rounded-lg"
        onSubmit={handleSubmit}
      >
        {/* Form Header */}
        <h2 className="text-2xl font-bold text-dark-imperial-blue text-center mb-6">
          Create New Announcement
        </h2>

        {/* Title Input */}
        <div className="mb-4">
          <label className="block text-dark-imperial-blue text-sm font-medium mb-2">
            Title:
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white-smoke text-smoky-black
                       focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue outline-none"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter announcement title"
            required
          />
        </div>

        {/* Content Textarea */}
        <div className="mb-4">
          <label className="block text-dark-imperial-blue text-sm font-medium mb-2">
            Content:
          </label>
          <textarea
            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white-smoke text-smoky-black
                       focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue outline-none"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Enter announcement content"
            rows="4"
            required
          ></textarea>
        </div>

        {/* Buttons */}
        <div className="flex justify-end space-x-3">
          <button
            type="button"
            className="px-4 py-2 bg-gray-400 text-gray-800 rounded-md hover:bg-gray-500 transition duration-200"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-palatinate-blue text-white-smoke px-6 py-2 rounded-md font-semibold 
                       hover:bg-dark-imperial-blue transition duration-200"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AnnouncementForm;