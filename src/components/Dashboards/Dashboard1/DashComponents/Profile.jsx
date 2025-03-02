import React from "react";

const StudentProfile = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Page Container */}
      <div className="p-3 w-full max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-indigo-700 mb-1">Your Profile</h2>

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
                Akash Nahak - Student [VU4F2223034]
              </h3>
              <p className="text-gray-600">Email: vu4f2223034@pvppcoe.ac.in</p>
              <p className="text-gray-600">
                Password: Last Changed At - 29/10/2024{" "}
                <button className="ml-3 px-3 py-1 bg-indigo-600 text-white text-sm rounded-md hover:bg-indigo-700">
                  Change Password
                </button>
              </p>
              <p className="text-gray-600">
                Department: Information Technology
              </p>
              <p className="text-gray-600">
                Institute: Vasantdada Patil Pratishthan's College of Engineering and Visual Arts
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
            <p><strong>First Name:</strong> Akash</p>
            <p><strong>Last Name:</strong> Nahak</p>
            <p><strong>Father Name:</strong> Antaraymi</p>
            <p><strong>Mother Name:</strong> Sanjukta</p>
            <p><strong>Gender:</strong> Male</p>
            <p><strong>Mobile Number:</strong> 9321693636</p>
            <p><strong>Date of Birth:</strong> 24/08/2004</p>
            <p><strong>Address:</strong> Lamba Wala Address</p>
            <p><strong>City:</strong> Mumbai</p>
            <p><strong>State:</strong> Maharashtra</p>
            <p><strong>Country:</strong> India</p>
            <p><strong>Pincode:</strong> 400025</p>
          </div>
        </div>

        {/* Other Details */}
        <div className="bg-white p-3 rounded-lg shadow-md mt-2">
          <h3 className="text-lg font-semibold text-indigo-800 mb-3">
            Other Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
            <p><strong>ID:</strong> VU4F2223034</p>
            <p><strong>Enrollment Date:</strong> 09/11/2022</p>
            <p><strong>Year:</strong> 3</p>
            <p><strong>Semester:</strong> 5</p>
            <p><strong>Division:</strong> TE IT Division A</p>
            <p><strong>Batch:</strong> TE IT Batch B</p>
            <p><strong>Department:</strong> Information Technology</p>
            <p>
              <strong>Institute:</strong> Vasantdada Patil Pratishthan's College
              of Engineering and Visual Arts
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
