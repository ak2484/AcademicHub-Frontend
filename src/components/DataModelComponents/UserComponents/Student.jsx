// Small card for each student for limited information
//  export function StudentCard() {}
export function StudentCard({ student, onClick }) {
    const { name, id, course } = student;
  
    return (
      <div
        onClick={onClick}
        className="p-4 border border-gray-300 rounded-lg shadow-md hover:bg-gray-100 cursor-pointer"
      >
        <h3 className="text-lg font-semibold text-blue-600">{name}</h3>
        <p className="text-sm text-gray-700">ID: {id}</p>
        <p className="text-sm text-gray-700">Course: {course}</p>
      </div>
    );
  }
  
// Detailed view of each student
// export function Student() {}
export function Student({ student }) {
    const { name, id, course, email, phone, grades, activities } = student;
  
    return (
      <div className="p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">{name}</h2>
        <p className="text-md text-gray-800 mb-2">
          <strong>ID:</strong> {id}
        </p>
        <p className="text-md text-gray-800 mb-2">
          <strong>Course:</strong> {course}
        </p>
        <p className="text-md text-gray-800 mb-2">
          <strong>Email:</strong> {email}
        </p>
        <p className="text-md text-gray-800 mb-2">
          <strong>Phone:</strong> {phone}
        </p>
        
        {grades && (
          <div className="mb-4">
            <strong>Grades:</strong>
            <ul className="list-disc list-inside">
              {grades.map((grade, index) => (
                <li key={index} className="text-gray-800">{grade.subject}: {grade.score}</li>
              ))}
            </ul>
          </div>
        )}
        
        {activities && (
          <div className="mb-4">
            <strong>Extracurricular Activities:</strong>
            <ul className="list-disc list-inside">
              {activities.map((activity, index) => (
                <li key={index} className="text-gray-800">{activity}</li>
              ))}
            </ul>
          </div>
        )}
  
        <div className="flex justify-end mt-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring"
          >
            Edit Student
          </button>
        </div>
      </div>
    );
  }
  

  const sampleStudent = {
    name: 'John Doe',
    id: 'S123456',
    course: 'Computer Science',
    email: 'john.doe@example.com',
    phone: '+1 234 567 890',
    grades: [
      { subject: 'Math', score: 'A' },
      { subject: 'Physics', score: 'B+' },
      { subject: 'Chemistry', score: 'A-' },
    ],
    activities: ['Soccer Club', 'Robotics Team'],
  };
  
  // Usage:
//   <StudentCard
//     student={sampleStudent}
//     onClick={() => console.log('Student Card Clicked')}
//   />
//   <Student student={sampleStudent} />
  