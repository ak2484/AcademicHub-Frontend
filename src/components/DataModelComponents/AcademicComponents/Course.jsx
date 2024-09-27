// Small card for each course for limited information
// export function CourseCard() {}
export function CourseCard({ course, onClick }) {
    const { name, code, year, semester, credits } = course;
  
    return (
      <div
        onClick={onClick}
        className="p-4 border border-gray-300 rounded-lg shadow-md hover:bg-gray-100 cursor-pointer"
      >
        <h3 className="text-lg font-semibold text-blue-600">{name}</h3>
        <p className="text-sm text-gray-700">Code: {code}</p>
        <p className="text-sm text-gray-700">Year: {year}</p>
        <p className="text-sm text-gray-700">Semester: {semester}</p>
        <p className="text-sm text-gray-700">Credits: {credits}</p>
      </div>
    );
  }
  

// Detailed view of each course
// export function Course() {}
export function Course({ course }) {
    const { name, code, department, year, semester, credits, teachers } = course;
  
    return (
      <div className="p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">{name}</h2>
        <p className="text-md text-gray-800 mb-2">
          <strong>Code:</strong> {code}
        </p>
        <p className="text-md text-gray-800 mb-2">
          <strong>Department:</strong> {department}
        </p>
        <p className="text-md text-gray-800 mb-2">
          <strong>Year:</strong> {year}
        </p>
        <p className="text-md text-gray-800 mb-2">
          <strong>Semester:</strong> {semester}
        </p>
        <p className="text-md text-gray-800 mb-2">
          <strong>Credits:</strong> {credits}
        </p>
        <p className="text-md text-gray-800 mb-2">
          <strong>Teachers:</strong> {teachers.join(', ')}
        </p>
        <div className="flex justify-end mt-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring"
          >
            Edit Course
          </button>
        </div>
      </div>
    );
  }
  


//   const sampleCourse = {
//     name: 'Introduction to Computer Science',
//     code: 'CS101',
//     department: 'Computer Science',
//     year: 1,
//     semester: 1,
//     credits: 4,
//     teachers: ['Dr. Smith', 'Prof. Johnson'],
//   };
  
//   // Usage:
//   <CourseCard
//     course={sampleCourse}
//     onClick={() => console.log('Course Card Clicked')}
//   />
//   <Course course={sampleCourse} />
  