// Small card for each assignment for limited information
// export function AssignmentCard() {}

export function AssignmentCard({ assignment, onClick }) {
    const { name, subject, dateOfSubmission, marks } = assignment;
  
    return (
      <div
        onClick={onClick}
        className="p-4 border border-gray-300 rounded-lg shadow-md hover:bg-gray-100 cursor-pointer"
      >
        <h3 className="text-lg font-semibold text-blue-600">{name}</h3>
        <p className="text-sm text-gray-700">Subject: {subject}</p>
        <p className="text-sm text-gray-700">
          Due Date: {new Date(dateOfSubmission).toLocaleDateString()}
        </p>
        <p className="text-sm text-gray-700">Marks: {marks}</p>
      </div>
    );
  }
  

// Detailed view of each assignment
//export function Assignment() {}

export function Assignment({ assignment }) {
    const { name, instruction, subject, subjectType, dateOfPerformance, dateOfSubmission, marks } = assignment;
  
    return (
      <div className="p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">{name}</h2>
        <p className="text-md text-gray-800 mb-2">
          <strong>Instructions:</strong> {instruction}
        </p>
        <p className="text-md text-gray-800 mb-2">
          <strong>Subject:</strong> {subject}
        </p>
        <p className="text-md text-gray-800 mb-2">
          <strong>Type:</strong> {subjectType}
        </p>
        <p className="text-md text-gray-800 mb-2">
          <strong>Date of Performance:</strong> {new Date(dateOfPerformance).toLocaleDateString()}
        </p>
        <p className="text-md text-gray-800 mb-2">
          <strong>Date of Submission:</strong> {new Date(dateOfSubmission).toLocaleDateString()}
        </p>
        <p className="text-md text-gray-800 mb-2">
          <strong>Marks:</strong> {marks}
        </p>
        <div className="flex justify-end mt-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring"
          >
            Edit Assignment
          </button>
        </div>
      </div>
    );
  }

//   const sampleAssignment = {
//     name: 'Assignment 1',
//     instruction: 'Complete the exercises from Chapter 3',
//     subject: 'Mathematics',
//     subjectType: 'Course',
//     dateOfPerformance: '2024-09-10',
//     dateOfSubmission: '2024-09-17',
//     marks: 100,
//   };
  
  // Usage:
//   <AssignmentCard
//     assignment={sampleAssignment}
//     onClick={() => console.log('Assignment Card Clicked')}
//   />
//   <Assignment assignment={sampleAssignment} />
  
