// src/components/Notifications.jsx
import React, { useState } from 'react';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [message, setMessage] = useState('');

  const addNotification = () => {
    setNotifications([...notifications, message]);
    setMessage('');
  };

  const deleteNotification = (index) => {
    const newNotifications = notifications.filter((_, i) => i !== index);
    setNotifications(newNotifications);
  };

  return (
    <div className='p-6'>
      <h1 className='text-xl font-bold mb-4'>Notifications</h1>
      <input 
        type="text" 
        value={message} 
        onChange={(e) => setMessage(e.target.value)} 
        placeholder="Add Notification" 
        className='border p-2 mb-2'
      />
      <button onClick={addNotification} className='bg-blue-500 text-white px-4 py-2 rounded'>
        Add Notification
      </button>
      <ul className='mt-4'>
        {notifications.map((notification, index) => (
          <li key={index} className='flex justify-between items-center border-b py-2'>
            {notification}
            <button onClick={() => deleteNotification(index)} className='text-red-500'>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
