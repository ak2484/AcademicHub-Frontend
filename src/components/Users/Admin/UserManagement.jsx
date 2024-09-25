// src/components/UserManagement.jsx
import React, { useState } from 'react';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');

  const addUser = () => {
    setUsers([...users, name]);
    setName('');
  };

  const deleteUser = (index) => {
    const newUsers = users.filter((_, i) => i !== index);
    setUsers(newUsers);
  };

  return (
    <div className='p-6'>
      <h1 className='text-xl font-bold mb-4'>User Management</h1>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Add User" 
        className='border p-2 mb-2'
      />
      <button onClick={addUser} className='bg-blue-500 text-white px-4 py-2 rounded'>
        Add User
      </button>
      <ul className='mt-4'>
        {users.map((user, index) => (
          <li key={index} className='flex justify-between items-center border-b py-2'>
            {user}
            <button onClick={() => deleteUser(index)} className='text-red-500'>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserManagement;
