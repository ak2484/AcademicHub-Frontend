// Small card for each submission for limited information
// export function SubmissionCard() {}
export function SubmissionCard({ submission, onClick }) {
    const { title, studentName, dateOfSubmission, status } = submission;
  
    return (
      <div
        onClick={onClick}
        className="p-4 border border-gray-300 rounded-lg shadow-md hover:bg-gray-100 cursor-pointer"
      >
        <h3 className="text-lg font-semibold text-blue-600">{title}</h3>
        <p className="text-sm text-gray-700">Student: {studentName}</p>
        <p className="text-sm text-gray-700">
          Submitted On: {new Date(dateOfSubmission).toLocaleDateString()}
        </p>
        <p className={`text-sm font-medium ${status === 'Completed' ? 'text-green-600' : 'text-red-600'}`}>
          Status: {status}
        </p>
      </div>
    );
  }
  
// Detailed view of each submission
//export function Submission() {}
export function Submission({ submission }) {
    const { title, studentName, dateOfSubmission, status, comments, attachments } = submission;
  
    return (
      <div className="p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">{title}</h2>
        <p className="text-md text-gray-800 mb-2">
          <strong>Student:</strong> {studentName}
        </p>
        <p className="text-md text-gray-800 mb-2">
          <strong>Date of Submission:</strong> {new Date(dateOfSubmission).toLocaleDateString()}
        </p>
        <p className={`text-md font-medium mb-4 ${status === 'Completed' ? 'text-green-600' : 'text-red-600'}`}>
          <strong>Status:</strong> {status}
        </p>
        {comments && (
          <p className="text-md text-gray-800 mb-2">
            <strong>Comments:</strong> {comments}
          </p>
        )}
        {attachments && (
          <div className="mb-4">
            <strong>Attachments:</strong>
            <ul className="list-disc list-inside">
              {attachments.map((attachment, index) => (
                <li key={index}>
                  <a href={attachment.link} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                    {attachment.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="flex justify-end mt-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring"
          >
            Edit Submission
          </button>
        </div>
      </div>
    );
  }

  
  const sampleSubmission = {
    title: 'Math Assignment 1',
    studentName: 'John Doe',
    dateOfSubmission: '2024-09-18',
    status: 'Completed',
    comments: 'Well done, but needs improvement on the final section.',
    attachments: [
      { name: 'Assignment File', link: 'https://example.com/assignment1.pdf' },
    ],
  };
  
  // Usage:
//   <SubmissionCard
//     submission={sampleSubmission}
//     onClick={() => console.log('Submission Card Clicked')}
//   />
//   <Submission submission={sampleSubmission} />
  