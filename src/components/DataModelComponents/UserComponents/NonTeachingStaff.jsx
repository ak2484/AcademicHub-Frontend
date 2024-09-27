// Small card for each non teaching staff for limited information
//export function NonTeachingStaffCard() {}
export function NonTeachingStaffCard({ staff, onClick }) {
    const { name, position, department } = staff;
  
    return (
      <div
        onClick={onClick}
        className="p-4 border border-gray-300 rounded-lg shadow-md hover:bg-gray-100 cursor-pointer"
      >
        <h3 className="text-lg font-semibold text-blue-600">{name}</h3>
        <p className="text-sm text-gray-700">Position: {position}</p>
        <p className="text-sm text-gray-700">Department: {department}</p>
      </div>
    );
  }
  
// Detailed view of each non teaching staff
//export function NonTeachingStaff() {}
export function NonTeachingStaff({ staff }) {
    const { name, position, department, email, phone, responsibilities } = staff;
  
    return (
      <div className="p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">{name}</h2>
        <p className="text-md text-gray-800 mb-2">
          <strong>Position:</strong> {position}
        </p>
        <p className="text-md text-gray-800 mb-2">
          <strong>Department:</strong> {department}
        </p>
        <p className="text-md text-gray-800 mb-2">
          <strong>Email:</strong> {email}
        </p>
        <p className="text-md text-gray-800 mb-2">
          <strong>Phone:</strong> {phone}
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
    name: 'Jane Doe',
    position: 'Librarian',
    department: 'Library Services',
    email: 'jane.doe@example.com',
    phone: '+1 234 567 890',
    responsibilities: ['Manage library resources', 'Assist students with research', 'Organize events'],
  };
  
  // Usage:
//   <NonTeachingStaffCard
//     staff={sampleStaff}
//     onClick={() => console.log('Non-Teaching Staff Card Clicked')}
//   />
//   <NonTeachingStaff staff={sampleStaff} />
  