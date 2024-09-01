// AuthorizationForms.jsx
import { useState } from "react";

// LoginForm for students
export function LoginForm() {
  const [formData, setFormData] = useState({
    combinedDetails: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add login form submission logic here
    const [email] = formData.combinedDetails;

    console.log("Email:", email);
    console.log("Password:", formData.password);
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <div className="mb-4">
        <label htmlFor="combinedDetails" className="block">
          {" "}
          Email{" "}
        </label>
        <input
          type="text"
          id="combinedDetails"
          name="combinedDetails"
          value={formData.combinedDetails}
          onChange={handleChange}
          placeholder="Enter Email"
          required
          className="border border-gray-300 rounded-md p-2"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="password" className="block">
          Password:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          className="border border-gray-300 rounded-md p-2"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Login
      </button>
    </form>
  );
}

// EnrollForm only for college admins
export function EnrollForm() {
  const [formData, setFormData] = useState({
    email: "",
    mobileNumber: "",
    instituteName: "",
    dteUdiseCode: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log("Enrollment data:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="enroll-form">
      <div className="mb-4">
        <label htmlFor="instituteName" className="block">
          Institute Name:
        </label>
        <input
          type="text"
          id="instituteName"
          name="instituteName"
          value={formData.instituteName}
          onChange={handleChange}
          required
          className="border border-gray-300 rounded-md p-2"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="border border-gray-300 rounded-md p-2"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="mobileNumber" className="block">
          Mobile Number:
        </label>
        <input
          type="tel"
          id="mobileNumber"
          name="mobileNumber"
          value={formData.mobileNumber}
          onChange={handleChange}
          required
          className="border border-gray-300 rounded-md p-2"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="dteUdiseCode" className="block">
          DTE/UDISE Code:
        </label>
        <input
          type="text"
          id="dteUdiseCode"
          name="dteUdiseCode"
          value={formData.dteUdiseCode}
          onChange={handleChange}
          required
          className="border border-gray-300 rounded-md p-2"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="block">
          Message:
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="border border-gray-300 rounded-md p-2"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Submit
      </button>
    </form>
  );
}

// Default export
export default { LoginForm, EnrollForm };
