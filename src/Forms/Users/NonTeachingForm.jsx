import { useState, useEffect } from "react";
/*
  NonTeachingStaffForm - for creating non-teaching staff
  fields: firstName (required, textbox), lastName (required, textbox), fatherName (required, textbox), motherName(required, textbox), email (required, email), mobileNumber (required, number), password (required, password), passwordConfirm (required, password), gender (required, selection[Male, Female, Other]), dateOfBirth (required, date), address (required, textarea), addressCity (required, selection[based on state]), addressState (required, selection[based on country]), addressCountry (required, selection[only give India option]), addressPincode (required, number), profileImage, institute (can be auto-set, selection[available institute]), department (can be auto-set, selection[available department]), otherDepartments, instituteAllotedId (required, number), hireDate (required, date), designation (textbox).
 */
//export function NonTeachingStaffForm() {}

export function NonTeachingStaffForm() {
    const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      fatherName: "",
      motherName: "",
      email: "",
      mobileNumber: "",
      password: "",
      passwordConfirm: "",
      gender: "",
      dateOfBirth: "",
      address: "",
      addressCity: "",
      addressState: "",
      addressCountry: "India",
      addressPincode: "",
      profileImage: null,
      institute: "",
      department: "",
      otherDepartments: "",
      instituteAllotedId: "",
      hireDate: "",
      designation: "",
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    const handleFileChange = (e) => {
      setFormData((prevData) => ({
        ...prevData,
        profileImage: e.target.files[0],
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Validate password confirmation
      if (formData.password !== formData.passwordConfirm) {
        alert("Passwords do not match!");
        return;
      }
  
      // Add form submission logic here
      console.log("Non-teaching staff data:", formData);
    };
  
    useEffect(() => {
      // Fetch dynamic data for states, cities, etc. if needed
    }, []);
  
    return (
      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Non-Teaching Staff Registration</h2>
  
        <div className="grid grid-cols-1 gap-4 mb-4 sm:grid-cols-2">
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-gray-700 text-sm font-medium mb-1">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-gray-700 text-sm font-medium mb-1">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="fatherName" className="block text-gray-700 text-sm font-medium mb-1">Father's Name</label>
            <input
              type="text"
              id="fatherName"
              name="fatherName"
              value={formData.fatherName}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="motherName" className="block text-gray-700 text-sm font-medium mb-1">Mother's Name</label>
            <input
              type="text"
              id="motherName"
              name="motherName"
              value={formData.motherName}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="mobileNumber" className="block text-gray-700 text-sm font-medium mb-1">Mobile Number</label>
            <input
              type="tel"
              id="mobileNumber"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="passwordConfirm" className="block text-gray-700 text-sm font-medium mb-1">Confirm Password</label>
            <input
              type="password"
              id="passwordConfirm"
              name="passwordConfirm"
              value={formData.passwordConfirm}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="gender" className="block text-gray-700 text-sm font-medium mb-1">Gender</label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="dateOfBirth" className="block text-gray-700 text-sm font-medium mb-1">Date of Birth</label>
            <input
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block text-gray-700 text-sm font-medium mb-1">Address</label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="addressCity" className="block text-gray-700 text-sm font-medium mb-1">City</label>
            <select
              id="addressCity"
              name="addressCity"
              value={formData.addressCity}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            >
              <option value="">Select City</option>
              {cities.map((city) => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="addressState" className="block text-gray-700 text-sm font-medium mb-1">State</label>
            <select
              id="addressState"
              name="addressState"
              value={formData.addressState}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            >
              <option value="">Select State</option>
              {states.map((state) => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="addressCountry" className="block text-gray-700 text-sm font-medium mb-1">Country</label>
            <select
              id="addressCountry"
              name="addressCountry"
              value={formData.addressCountry}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            >
              <option value="India">India</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="addressPincode" className="block text-gray-700 text-sm font-medium mb-1">Pincode</label>
            <input
              type="number"
              id="addressPincode"
              name="addressPincode"
              value={formData.addressPincode}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="profileImage" className="block text-gray-700 text-sm font-medium mb-1">Profile Image</label>
            <input
              type="file"
              id="profileImage"
              name="profileImage"
              onChange={handleFileChange}
              className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border file:border-gray-300 file:rounded-md file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="institute" className="block text-gray-700 text-sm font-medium mb-1">Institute</label>
            <select
              id="institute"
              name="institute"
              value={formData.institute}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            >
              <option value="">Select Institute</option>
              {institutes.map((inst) => (
                <option key={inst} value={inst}>{inst}</option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="department" className="block text-gray-700 text-sm font-medium mb-1">Department</label>
            <select
              id="department"
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            >
              <option value="">Select Department</option>
              {departments.map((dept) => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="otherDepartments" className="block text-gray-700 text-sm font-medium mb-1">Other Departments</label>
            <input
              type="text"
              id="otherDepartments"
              name="otherDepartments"
              value={formData.otherDepartments}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="instituteAllotedId" className="block text-gray-700 text-sm font-medium mb-1">Institute Allotted ID</label>
            <input
              type="number"
              id="instituteAllotedId"
              name="instituteAllotedId"
              value={formData.instituteAllotedId}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="hireDate" className="block text-gray-700 text-sm font-medium mb-1">Hire Date</label>
            <input
              type="date"
              id="hireDate"
              name="hireDate"
              value={formData.hireDate}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="designation" className="block text-gray-700 text-sm font-medium mb-1">Designation</label>
            <input
              type="text"
              id="designation"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
        </div>
  
        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
        >
          Submit
        </button>
      </form>
    );
  }

  export  default NonTeachingStaffForm;
  
  