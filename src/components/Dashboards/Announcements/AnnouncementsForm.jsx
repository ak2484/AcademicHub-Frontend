import React, { useState } from "react";

const AnnouncementForm = ({ handleAnnouncementSubmit, onAdd, onCancel }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content) {
      handleAnnouncementSubmit({
        title,
        content,
        date: new Date().toLocaleDateString(),
      });
      onAdd({ title, content });
      setTitle("");
      setContent("");
    }
  };

  return (
    <form
      className='w-auto p-8 bg-lavender-web shadow-lg rounded-lg'
      onSubmit={handleSubmit}
    >
      <h2 className='text-2xl font-bold text-dark-imperial-blue text-center mb-6'>
        Create New Announcement
      </h2>
      <div className='mb-4'>
        <label className='block text-dark-imperial-blue text-sm font-medium mb-2'>
          Title:
        </label>
        <input
          type='text'
          className='w-full px-3 py-2 border border-gray-300 rounded-md placeholder-smoky-black text-smoky-black bg-white focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder='Enter announcement title'
          required
        />
      </div>
      <div className='mb-4'>
        <label className='block text-dark-imperial-blue text-sm font-medium mb-2'>
          Content:
        </label>
        <textarea
          className='w-full px-3 py-2 border border-gray-300 rounded-md placeholder-smoky-black text-smoky-black bg-white focus:ring-2 focus:ring-palatinate-blue focus:border-palatinate-blue'
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder='Enter announcement content'
          rows='4'
          required
        ></textarea>
      </div>
      <div className='text-center'>
        <button
          type='button'
          className='mr-2 px-4 py-2 bg-gray-300 rounded'
          onClick={onCancel}
        >
          Cancel
        </button>
        <button
          type='submit'
          className='bg-palatinate-blue text-white-smoke px-6 py-2 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-palatinate-blue hover:bg-blue-700 transition duration-300'
          // onClick={handleSubmit}
        >
          Submit Announcement
        </button>
      </div>
    </form>
  );
};
export default AnnouncementForm;
