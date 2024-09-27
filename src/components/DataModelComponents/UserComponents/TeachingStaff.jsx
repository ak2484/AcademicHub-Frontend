// Small card for each teaching staff for limited information
//export function TeachingStaffCard() {}
export function TeachingStaffCard({ staff, onClick }) {
    const { name, id, subject } = staff;
  
    return (
      <div
        onClick={onClick}
        className="p-4 border border-gray-300 rounded-lg shadow-md hover:bg-gray-100 cursor-pointer"
      >
        <h3 className="text-lg font-semibold text-blue-600">{name}</h3>
        <p className="text-sm text-gray-700">ID: {id}</p>
        <p className="text-sm text-gray-700">Subject: {subject}</p>
      </div>
    );
  }
  
// Detailed view of each teaching staff
//export function TeachingStaff() {}
export function TeachingStaff({ staff }) {
    const { name, id, subject, email, phone, qualifications, responsibilities } = staff;
  
    return (
      <div className="p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">{name}</h2>
        <p className="text-md text-gray-800 mb-2">
          <strong>ID:</strong> {id}
        </p>
        <p className="text-md text-gray-800 mb-2">
          <strong>Subject:</strong> {subject}
        </p>
        <p className="text-md text-gray-800 mb-2">
          <strong>Email:</strong> {email}
        </p>
        <p className="text-md text-gray-800 mb-2">
          <strong>Phone:</strong> {phone}
        </p>
        <p className="text-md text-gray-800 mb-2">
          <strong>Qualifications:</strong> {qualifications.join(', ')}
        </p>
  
        {responsibilities && (
          <div className="mb-4">
            <strong>Responsibilities:</strong>
            <ul className="list-disc list-inside">
              {responsibilities.map((task, index) => (
                <li key={index} className="text-gray-800">{task}</li>
              ))}
            </ul>
          </div>
        )}
  
        <div className="flex justify-end mt-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring"
          >
            Edit Staff
          </button>
        </div>
      </div>
    );
  }

  
  const sampleStaff = {
    name: 'John Doe',
    id: 'T123456',
    subject: 'Mathematics',
    email: 'john.doe@example.com',
    phone: '+1 234 567 890',
    qualifications: ['M.Sc. in Mathematics', 'Ph.D. in Education'],
    responsibilities: [
      'Teach undergraduate courses',
      'Supervise research projects',
      'Conduct departmental meetings',
    ],
  };
  
  // Usage:
//   <TeachingStaffCard
//     staff={sampleStaff}
//     onClick={() => console.log('Teaching Staff Card Clicked')}
//   />
//   <TeachingStaff staff={sampleStaff} />
  