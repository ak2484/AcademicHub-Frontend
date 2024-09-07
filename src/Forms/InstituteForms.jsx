import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';


/* InstituteForm - for creating institute
  fields: name (required, textbox), instituteCode (required, textbox), contact (required, textbox), email (required, email), website (required, url), mobileNumber (required, number), address (required, textarea), addressCity (required, selection[based on state]), addressState (required, selection[based on country]), addressCountry (required, selection[only give India option]), addressPincode (required, number), establishedDate (required, date), accreditionDetails (textarea), instituteType (selection[central, state, private, autonomous, deemed-to-be]), universityAffiliation (textbox), principal, logo, missionStatement (textbox), visionStatement (textbox), campusArea (number), facilities (textarea)
 */

// export function InstituteForm() {}

export function InstituteForm() {
  const [formData, setFormData] = useState({
    name: '',
    instituteCode: '',
    contact: '',
    email: '',
    website: '',
    mobileNumber: '',
    address: '',
    addressCity: '',
    addressState: '',
    addressCountry: 'India',
    addressPincode: '',
    establishedDate: '',
    accreditionDetails: '',
    instituteType: '',
    universityAffiliation: '',
    principal: '',
    logo: '',
    missionStatement: '',
    visionStatement: '',
    campusArea: '',
    facilities: '',
  });

  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  // Dummy data for states and cities - replace with actual data or API calls
  const countries = ['India'];
  const instituteTypes = ['Central', 'State', 'Private', 'Autonomous', 'Deemed-to-be'];

  useEffect(() => {
    // Fetch states based on selected country (India)
    if (formData.addressCountry === 'India') {
      setStates(['State1', 'State2']); // Replace with actual states data
    } else {
      setStates([]);
    }
  }, [formData.addressCountry]);

  useEffect(() => {
    // Fetch cities based on selected state
    if (formData.addressState) {
      setCities(['City1', 'City2']); // Replace with actual cities data
    } else {
      setCities([]);
    }
  }, [formData.addressState]);

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
          Institute Name
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
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="instituteCode">
          Institute Code
        </label>
        <input
          type="text"
          id="instituteCode"
          name="instituteCode"
          required
          value={formData.instituteCode}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contact">
          Contact
        </label>
        <input
          type="text"
          id="contact"
          name="contact"
          required
          value={formData.contact}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="website">
          Website
        </label>
        <input
          type="url"
          id="website"
          name="website"
          required
          value={formData.website}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mobileNumber">
          Mobile Number
        </label>
        <input
          type="number"
          id="mobileNumber"
          name="mobileNumber"
          required
          value={formData.mobileNumber}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
          Address
        </label>
        <textarea
          id="address"
          name="address"
          required
          value={formData.address}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="addressCountry">
          Country
        </label>
        <select
          id="addressCountry"
          name="addressCountry"
          required
          value={formData.addressCountry}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
        >
          <option value="India">India</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="addressState">
          State
        </label>
        <select
          id="addressState"
          name="addressState"
          required
          value={formData.addressState}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
        >
          <option value="">Select State</option>
          {states.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="addressCity">
          City
        </label>
        <select
          id="addressCity"
          name="addressCity"
          required
          value={formData.addressCity}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
        >
          <option value="">Select City</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="addressPincode">
          Pincode
        </label>
        <input
          type="number"
          id="addressPincode"
          name="addressPincode"
          required
          value={formData.addressPincode}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="establishedDate">
          Established Date
        </label>
        <input
          type="date"
          id="establishedDate"
          name="establishedDate"
          required
          value={formData.establishedDate}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="accreditationDetails">
          Accreditation Details
        </label>
        <textarea
          id="accreditationDetails"
          name="accreditationDetails"
          value={formData.accreditationDetails}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="instituteType">
          Institute Type
        </label>
        <select
          id="instituteType"
          name="instituteType"
          required
          value={formData.instituteType}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
        >
          <option value="">Select Institute Type</option>
          {instituteTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="universityAffiliation">
          University Affiliation
        </label>
        <input
          type="text"
          id="universityAffiliation"
          name="universityAffiliation"
          value={formData.universityAffiliation}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="principal">
          Principal
        </label>
        <input
          type="text"
          id="principal"
          name="principal"
          value={formData.principal}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="logo">
          Logo URL
        </label>
        <input
          type="url"
          id="logo"
          name="logo"
          value={formData.logo}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="missionStatement">
          Mission Statement
        </label>
        <input
          type="text"
          id="missionStatement"
          name="missionStatement"
          value={formData.missionStatement}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="visionStatement">
          Vision Statement
        </label>
        <input
          type="text"
          id="visionStatement"
          name="visionStatement"
          value={formData.visionStatement}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="campusArea">
          Campus Area (in sq. ft)
        </label>
        <input
          type="number"
          id="campusArea"
          name="campusArea"
          value={formData.campusArea}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="facilities">
          Facilities
        </label>
        <textarea
          id="facilities"
          name="facilities"
          value={formData.facilities}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
        />
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring"
        >
          Create Institute
        </button>
      </div>
    </form>
  );
}

InstituteForm.propTypes = {
  // Define prop types if needed for dynamic data such as states and cities
};





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

