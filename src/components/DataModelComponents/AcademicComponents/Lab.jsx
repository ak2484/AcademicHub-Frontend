// Small card for each lab for limited information
// export function LabCard() {}
export function LabCard({ lab, onClick }) {
    const { name, department, location } = lab;
  
    return (
      <div
        onClick={onClick}
        className="p-4 border border-gray-300 rounded-lg shadow-md hover:bg-gray-100 cursor-pointer"
      >
        <h3 className="text-lg font-semibold text-blue-600">{name}</h3>
        <p className="text-sm text-gray-700">Department: {department}</p>
        <p className="text-sm text-gray-700">Location: {location}</p>
      </div>
    );
  }
  
// Detailed view of each lab
// export function Lab() {}
export function Lab({ lab }) {
    const { name, department, location, equipment, supervisor, description } = lab;
  
    return (
      <div className="p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">{name}</h2>
        <p className="text-md text-gray-800 mb-2">
          <strong>Department:</strong> {department}
        </p>
        <p className="text-md text-gray-800 mb-2">
          <strong>Location:</strong> {location}
        </p>
        <p className="text-md text-gray-800 mb-4">
          <strong>Equipment:</strong> {equipment.join(', ')}
        </p>
        <p className="text-md text-gray-800 mb-4">
          <strong>Supervisor:</strong> {supervisor}
        </p>
        <p className="text-md text-gray-800 mb-4">
          <strong>Description:</strong> {description}
        </p>
        <div className="flex justify-end mt-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring"
          >
            Edit Lab
          </button>
        </div>
      </div>
    );
  }

  
  const sampleLab = {
    name: 'Physics Lab',
    department: 'Science and Engineering',
    location: 'Building 5, Room 301',
    equipment: ['Oscilloscope', 'Spectrometer', 'Voltmeter'],
    supervisor: 'Dr. Jane Doe',
    description: 'A laboratory equipped for experiments related to physics.',
  };
  
  // Usage:
//   <LabCard
//     lab={sampleLab}
//     onClick={() => console.log('Lab Card Clicked')}
//   />
//   <Lab lab={sampleLab} />
  
