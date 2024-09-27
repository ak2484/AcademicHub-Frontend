// Small card for each exam for limited information
// export function ExamCard() {}

export function ExamCard({ exam, onClick }) {
    const { name, date, course } = exam;
  
    return (
      <div
        onClick={onClick}
        className="p-4 border border-gray-300 rounded-lg shadow-md hover:bg-gray-100 cursor-pointer"
      >
        <h3 className="text-lg font-semibold text-blue-600">{name}</h3>
        <p className="text-sm text-gray-700">Course: {course}</p>
        <p className="text-sm text-gray-700">
          Date: {new Date(date).toLocaleDateString()}
        </p>
      </div>
    );
  }
  

// Detailed view of each exam
//export function Exam() {}
export function Exam({ exam }) {
    const { name, date, course, duration, totalMarks } = exam;
  
    return (
      <div className="p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">{name}</h2>
        <p className="text-md text-gray-800 mb-2">
          <strong>Course:</strong> {course}
        </p>
        <p className="text-md text-gray-800 mb-2">
          <strong>Date:</strong> {new Date(date).toLocaleDateString()}
        </p>
        <p className="text-md text-gray-800 mb-2">
          <strong>Duration:</strong> {duration} hours
        </p>
        <p className="text-md text-gray-800 mb-2">
          <strong>Total Marks:</strong> {totalMarks}
        </p>
        <div className="flex justify-end mt-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring"
          >
            Edit Exam
          </button>
        </div>
      </div>
    );
  }
  
// Small card for each exam score for limited information
// export function ExamScoreCard() {}
export function ExamScoreCard({ score, onClick }) {
    const { studentName, examName, marksObtained, totalMarks } = score;
  
    return (
      <div
        onClick={onClick}
        className="p-4 border border-gray-300 rounded-lg shadow-md hover:bg-gray-100 cursor-pointer"
      >
        <h3 className="text-lg font-semibold text-blue-600">{studentName}</h3>
        <p className="text-sm text-gray-700">Exam: {examName}</p>
        <p className="text-sm text-gray-700">
          Marks: {marksObtained} / {totalMarks}
        </p>
      </div>
    );
  }
  
// Detailed view of each exam score
// export function ExamScore() {}
export function ExamScore({ score }) {
    const { studentName, examName, course, marksObtained, totalMarks, grade } = score;
  
    return (
      <div className="p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">{studentName}</h2>
        <p className="text-md text-gray-800 mb-2">
          <strong>Exam:</strong> {examName}
        </p>
        <p className="text-md text-gray-800 mb-2">
          <strong>Course:</strong> {course}
        </p>
        <p className="text-md text-gray-800 mb-2">
          <strong>Marks Obtained:</strong> {marksObtained} / {totalMarks}
        </p>
        <p className="text-md text-gray-800 mb-2">
          <strong>Grade:</strong> {grade}
        </p>
        <div className="flex justify-end mt-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring"
          >
            Edit Score
          </button>
        </div>
      </div>
    );
  }

  
  const sampleExam = {
    name: 'Midterm Exam',
    date: '2024-10-10',
    course: 'Math 101',
    duration: 2,
    totalMarks: 100,
  };
  
  const sampleScore = {
    studentName: 'John Doe',
    examName: 'Midterm Exam',
    course: 'Math 101',
    marksObtained: 85,
    totalMarks: 100,
    grade: 'A',
  };
  
  // Usage:
//   <ExamCard
//     exam={sampleExam}
//     onClick={() => console.log('Exam Card Clicked')}
//   />
//   <Exam exam={sampleExam} />
  
//   <ExamScoreCard
//     score={sampleScore}
//     onClick={() => console.log('Exam Score Card Clicked')}
//   />
//   <ExamScore score={sampleScore} />
  