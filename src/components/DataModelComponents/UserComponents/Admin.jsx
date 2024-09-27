// Small card for each admin for limited information
//export function AdminCard() {}
export function AdminCard({ admin, onClick }) {
    const { name, role, email } = admin;
  
    return (
      <div
        onClick={onClick}
        className="p-4 border border-gray-300 rounded-lg shadow-md hover:bg-gray-100 cursor-pointer"
      >
        <h3 className="text-lg font-semibold text-blue-600">{name}</h3>
        <p className="text-sm text-gray-700">Role: {role}</p>
        <p className="text-sm text-gray-700">Email: {email}</p>
      </div>
    );
  }
  
// Detailed view of each admin
//export function Admin() {}
export function Admin({ admin }) {
    const { name, role, email, phone, responsibilities } = admin;
  
    return (
      <div className="p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">{name}</h2>
        <p className="text-md text-gray-800 mb-2">
          <strong>Role:</strong> {role}
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
            Edit Admin
          </button>
        </div>
      </div>
    );
  }

  
  const sampleAdmin = {
    name: 'John Doe',
    role: 'System Administrator',
    email: 'john.doe@example.com',
    phone: '+1 234 567 890',
    responsibilities: ['Manage user accounts', 'Monitor system performance', 'Handle technical support'],
  };
  
  // Usage:
//   <AdminCard
//     admin={sampleAdmin}
//     onClick={() => console.log('Admin Card Clicked')}
//   />
//   <Admin admin={sampleAdmin} />
  