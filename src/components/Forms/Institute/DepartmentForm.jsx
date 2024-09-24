import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';


/* DepartmentForm - for creating department
  fields: name (required, textbox), departmentCode (required, textbox), departmentType (required, selection['Academic', 'Administrative', 'Student Service', 'Extracurricular and Co-curricular', 'Research and Development', 'Library and Learning Resources', 'Governance',]), headOfDepartment, institute.
 */

// export function DepartmentForm() {}
export function DepartmentForm() {
    const [formData, setFormData] = useState({
      name: '',
      departmentCode: '',
      departmentType: '',
      headOfDepartment: '',
      institute: '',
    });
  
    const departmentTypes = [
      'Academic',
      'Administrative',
      'Student Service',
      'Extracurricular and Co-curricular',
      'Research and Development',
      'Library and Learning Resources',
      'Governance',
    ];
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission
      console.log(formData);
    };
  
    return (
      <form className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Department Name
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
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="departmentCode">
            Department Code
          </label>
          <input
            type="text"
            id="departmentCode"
            name="departmentCode"
            required
            value={formData.departmentCode}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>
  
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="departmentType">
            Department Type
          </label>
          <select
            id="departmentType"
            name="departmentType"
            required
            value={formData.departmentType}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
          >
            <option value="">Select Department Type</option>
            {departmentTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
  
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="headOfDepartment">
            Head of Department
          </label>
          <input
            type="text"
            id="headOfDepartment"
            name="headOfDepartment"
            value={formData.headOfDepartment}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>
  
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="institute">
            Institute
          </label>
          <input
            type="text"
            id="institute"
            name="institute"
            value={formData.institute}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>
  
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring"
          >
            Create Department
          </button>
        </div>
      </form>
    );
  }
  
export default DepartmentForm  