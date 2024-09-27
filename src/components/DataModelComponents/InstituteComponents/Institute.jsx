// Small card for each institute for limited information
//export function InstituteCard() {}
export function InstituteCard({ institute, onClick }) {
    const { name, location, establishedYear } = institute;
  
    return (
      <div
        onClick={onClick}
        className="p-4 border border-gray-300 rounded-lg shadow-md hover:bg-gray-100 cursor-pointer"
      >
        <h3 className="text-lg font-semibold text-blue-600">{name}</h3>
        <p className="text-sm text-gray-700">Location: {location}</p>
        <p className="text-sm text-gray-700">Established: {establishedYear}</p>
      </div>
    );
  }
  
// Detailed view of each institute
//export function Institute() {}
export function Institute({ institute }) {
    const { name, location, establishedYear, departments, numberOfStudents, coursesOffered } = institute;
  
    return (
      <div className="p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">{name}</h2>
        <p className="text-md text-gray-800 mb-2">
          <strong>Location:</strong> {location}
        </p>
        <p className="text-md text-gray-800 mb-2">
          <strong>Established:</strong> {establishedYear}
        </p>
        <p className="text-md text-gray-800 mb-2">
          <strong>Number of Students:</strong> {numberOfStudents}
        </p>
        
        {departments && (
          <div className="mb-4">
            <strong>Departments:</strong>
            <ul className="list-disc list-inside">
              {departments.map((dept, index) => (
                <li key={index} className="text-gray-800">{dept}</li>
              ))}
            </ul>
          </div>
        )}
  
        {coursesOffered && (
          <div className="mb-4">
            <strong>Courses Offered:</strong>
            <ul className="list-disc list-inside">
              {coursesOffered.map((course, index) => (
                <li key={index} className="text-gray-800">{course}</li>
              ))}
            </ul>
          </div>
        )}
  
        <div className="flex justify-end mt-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring"
          >
            Edit Institute
          </button>
        </div>
      </div>
    );
  }

  
  const sampleInstitute = {
    name: 'Institute of Technology',
    location: 'New York',
    establishedYear: 1980,
    numberOfStudents: 5000,
    departments: ['Computer Science', 'Mechanical Engineering', 'Business Administration'],
    coursesOffered: ['Data Structures', 'Thermodynamics', 'Financial Management'],
  };
  
  // Usage:
//   <InstituteCard
//     institute={sampleInstitute}
//     onClick={() => console.log('Institute Card Clicked')}
//   />
//   <Institute institute={sampleInstitute} />
  