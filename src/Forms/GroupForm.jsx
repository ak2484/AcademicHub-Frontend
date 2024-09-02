// GroupForm.jsx

import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';



//* GroupForm - for creating group
//  fields: name (required, textbox), groupType (required, selection['Year', 'Semester', 'Division', 'Batch', 'Project', 'Tutorial', 'Elective', 'Mentor', 'Other',]), members (multiple selection [from avialable users]), groupIncharge, institute, department.
//  */

// export function GroupForm() {}

function GroupForm({ availableUsers, institutes, departments }) {
  const [formData, setFormData] = useState({
    name: '',
    groupType: '',
    members: [],
    groupIncharge: '',
    institute: '',
    department: '',
  });

  const groupTypes = [
    'Year',
    'Semester',
    'Division',
    'Batch',
    'Project',
    'Tutorial',
    'Elective',
    'Mentor',
    'Other',
  ];

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]:
        type === 'select-multiple'
          ? [...e.target.selectedOptions].map((option) => option.value)
          : value,
    }));
  };

  useEffect(() => {
    // If the current groupIncharge is not in the selected members, reset the groupIncharge
    if (!formData.members.includes(formData.groupIncharge)) {
      setFormData((prevData) => ({
        ...prevData,
        groupIncharge: '',
      }));
    }
  }, [formData.members]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <form
      className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg"
      onSubmit={handleSubmit}
    >
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="name"
        >
          Group Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
        />
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="groupType"
        >
          Group Type
        </label>
        <select
          id="groupType"
          name="groupType"
          required
          value={formData.groupType}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
        >
          <option value="">Select Group Type</option>
          {groupTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="members"
        >
          Members
        </label>
        <select
          id="members"
          name="members"
          multiple
          value={formData.members}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
        >
          {availableUsers.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="groupIncharge"
        >
          Group Incharge
        </label>
        <select
          id="groupIncharge"
          name="groupIncharge"
          value={formData.groupIncharge}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
          disabled={formData.members.length === 0}
        >
          <option value="">Select Group Incharge</option>
          {formData.members.map((memberId) => {
            const member = availableUsers.find((user) => user.id === memberId);
            return (
              <option key={memberId} value={memberId}>
                {member.name}
              </option>
            );
          })}
        </select>
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="institute"
        >
          Institute
        </label>
        <select
          id="institute"
          name="institute"
          value={formData.institute}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
        >
          <option value="">Select Institute</option>
          {institutes.map((inst) => (
            <option key={inst.id} value={inst.id}>
              {inst.name}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="department"
        >
          Department
        </label>
        <select
          id="department"
          name="department"
          value={formData.department}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
        >
          <option value="">Select Department</option>
          {departments.map((dept) => (
            <option key={dept.id} value={dept.id}>
              {dept.name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring"
        >
          Create Group
        </button>
      </div>
    </form>
  );
}

GroupForm.propTypes = {
  availableUsers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  institutes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  departments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default GroupForm;
