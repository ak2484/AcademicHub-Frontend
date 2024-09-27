// Small card for each department for limited information
// export function DepartmentCard() {}
export function DepartmentCard({ department, onClick }) {
    const { name, headOfDepartment, facultyCount } = department;
  
    return (
      <div
        onClick={onClick}
        className="p-4 border border-gray-300 rounded-lg shadow-md hover:bg-gray-100 cursor-pointer"
      >
        <h3 className="text-lg font-semibold text-blue-600">{name}</h3>
        <p className="text-sm text-gray-700">Head of Department: {headOfDepartment}</p>
        <p className="text-sm text-gray-700">Faculty Count: {facultyCount}</p>
      </div>
    );
  }
  
// Detailed view of each department
// export function Department() {}
export function Department({ department }) {
    const { name, headOfDepartment, facultyCount, courses, faculty } = department;
  
    return (
      <div className="p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">{name}</h2>
        <p className="text-md text-gray-800 mb-2">
          <strong>Head of Department:</strong> {headOfDepartment}
        </p>
        <p className="text-md text-gray-800 mb-2">
          <strong>Faculty Count:</strong> {facultyCount}
        </p>
  
        {courses && (
          <div className="mb-4">
            <strong>Courses Offered:</strong>
            <ul className="list-disc list-inside">
              {courses.map((course, index) => (
                <li key={index} className="text-gray-800">{course}</li>
              ))}
            </ul>
          </div>
        )}
  
        {faculty && (
          <div className="mb-4">
            <strong>Faculty Members:</strong>
            <ul className="list-disc list-inside">
              {faculty.map((member, index) => (
                <li key={index} className="text-gray-800">{member}</li>
              ))}
            </ul>
          </div>
        )}
        
        <div className="flex justify-end mt-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring"
          >
            Edit Department
          </button>
        </div>
      </div>
    );
  }

  
  const sampleDepartment = {
    name: 'Computer Science',
    headOfDepartment: 'Dr. Alice Johnson',
    facultyCount: 25,
    courses: ['Data Structures', 'Algorithms', 'Operating Systems'],
    faculty: ['Prof. Bob Smith', 'Prof. Charlie Brown', 'Prof. Diana Prince'],
  };
  
//   Usage:
//   <DepartmentCard
//     department={sampleDepartment}
//     onClick={() => console.log('Department Card Clicked')}
//   />
//   <Department department={sampleDepartment} />
  