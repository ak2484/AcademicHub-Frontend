import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../../../constants";

const StudentProfile = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const fetchNavData = async () => {
    try {
      const res = await axios.get(`${API_URL}/profile`, {
        withCredentials: true,
      });

      if (res.data.profile.user) {
        console.log(res.data.profile.user);
        setUser(res.data.profile.user);
      } else {
        setError({
          message: "User not found!",
        });
      }
    } catch (err) {
      if (err.response.status == 401) {
        setError({
          status: err.response.status,
          message: "You are not logged in!",
        });
      } else {
        setError({
          message: "Something went wrong!",
        });
      }
    }
  };

  useEffect(() => {
    fetchNavData();
  }, []);

  if (error) {
    return <p>Error: {error.message}</p>; // Display error message if any
  }

  if (!user) {
    return <p>Loading...</p>; // Display loading text until user is set
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Page Container */}
      <div className="p-3 w-full max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-indigo-700 mb-1">
          Your Profile
        </h2>

        {/* Profile Card */}
        <div className="bg-white p-2 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row items-center md:items-start">
            {/* Profile Image */}
            <img
              src="/src/assets/Akash.jpg"
              alt="Profile"
              className="w-24 h-24 rounded-full border-2 border-indigo-500"
            />
            {/* Profile Info */}
            <div className="md:ml-6 mt-2 md:mt-0 text-center md:text-left">
              <h3 className="text-xl font-bold text-indigo-800">
                {user.firstName} {user.lastName} - {user.userType} [
                {user.instituteAllottedId || "NA"}]
              </h3>
              <p className="text-gray-600">Email: {user.email}</p>
              <p className="text-gray-600">
                Password: Last Changed At -{" "}
                {user.passwordChangedAt || "Not changed"}{" "}
                <button className="ml-3 px-3 py-1 bg-indigo-600 text-white text-sm rounded-md hover:bg-indigo-700">
                  Change Password
                </button>
              </p>
              <p className="text-gray-600">
                Department: {user.department ? user.department.name : "NA"}
              </p>
              <p className="text-gray-600">
                Institute: {user.institute ? user.institute.name : "NA"}
              </p>
            </div>
          </div>
        </div>

        {/* Personal Details */}
        <div className="bg-white p-4 rounded-lg shadow-md mt-4">
          <h3 className="text-lg font-semibold text-indigo-800 mb-3">
            Personal Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
            <p>
              <strong>First Name:</strong> {user.firstName}
            </p>
            <p>
              <strong>Last Name:</strong> {user.lastName}
            </p>
            <p>
              <strong>Father Name:</strong> {user.fatherName}
            </p>
            <p>
              <strong>Mother Name:</strong> {user.motherName}
            </p>
            <p>
              <strong>Gender:</strong> {user.gender}
            </p>
            <p>
              <strong>Mobile Number:</strong> {user.mobileNumber}
            </p>
            <p>
              <strong>Date of Birth:</strong>{" "}
              {new Date(user.dateOfBirth).toLocaleDateString() == "Invalid Date"
                ? "NA"
                : new Date(user.dateOfBirth).toLocaleDateString()}
            </p>
            <p>
              <strong>Address:</strong> {user.address}
            </p>
            <p>
              <strong>City:</strong> {user.addressCity}
            </p>
            <p>
              <strong>State:</strong> {user.addressState}
            </p>
            <p>
              <strong>Country:</strong> {user.addressCountry}
            </p>
            <p>
              <strong>Pincode:</strong> {user.addressPinCode}
            </p>
          </div>
        </div>

        {/* Other Details */}
        <div className="bg-white p-3 rounded-lg shadow-md mt-2">
          <h3 className="text-lg font-semibold text-indigo-800 mb-3">
            Other Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
            <p>
              <strong>ID:</strong> {user.instituteAllottedId}
            </p>
            <p>
              <strong>Enrollment Date:</strong>{" "}
              {new Date(user.enrollmentDate).toLocaleDateString() ==
              "Invalid Date"
                ? "NA"
                : new Date(user.enrollmentDate).toLocaleDateString()}
            </p>
            <p>
              <strong>Year:</strong> {user.currentYear}
            </p>
            <p>
              <strong>Semester:</strong> {user.currentSemester}
            </p>
            <p>
              <strong>Division:</strong>{" "}
              {user.division ? user.division.name : "NA"}
            </p>
            <p>
              <strong>Batch:</strong> {user.batch ? user.batch.name : "NA"}
            </p>
            <p>
              <strong>Department:</strong>{" "}
              {user.department ? user.department.name : "NA"}
            </p>
            <p>
              <strong>Institute:</strong>{" "}
              {user.institute ? user.institute.name : "NA"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
