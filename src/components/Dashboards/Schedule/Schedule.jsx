// // App.jsx
// import { useState } from 'react';
// import html2pdf from 'html2pdf.js';
// import logo from '../../../assets/logo.png';

// const semesterSubjects = {
//   1: ['Maths-1', 'Chemistry-1', 'Physics-1', 'BEE', 'ME', 'PCE-1'],
//   2: ['Maths-2', 'Chemistry-2', 'Physics-2', 'EG', 'C Programming'],
//   3: ['Maths-3', 'DSA', 'DBMS', 'PCOM', 'PCPF'],
//   4: ['COA', 'Maths-4', 'OS', 'CN', 'AT'],
//   5: ['ADMT', 'IP', 'EEB', 'CNS', 'SE'],
//   6: ['WebX', 'DMBI', 'AIDS-1', 'EHF', 'WT'],
//   7: ['AIDS-2', 'IO', 'DO', 'CSL', 'SQA'],
//   8: ['BC', 'CC', 'ETC', 'IO', 'DO', 'PM'],
// };

// const labSubjectsBySemester = {
//   1: [
//     'Physics1 Lab',
//     'Chemistry1 Lab',
//     'PCE-1 Lab',
//     'BEE Lab',
//     'Mechanics Lab',
//     'Workshop',
//   ],
//   2: [
//     'Physics2 Lab',
//     'Chemistry2 Lab',
//     'C Programming Lab',
//     'AutoCAD Lab',
//     'Workshop',
//   ],
//   3: ['DSA Lab', 'Database Lab', 'Java Lab', 'PCPF Lab'],
//   4: ['OS Lab', 'Python Lab', 'Microprocessor Lab', 'Network Lab'],
//   5: ['IP Lab', 'Security Lab', 'PCE-2 Lab'],
//   6: ['WebX Lab', 'BI Lab', 'MAD/PWA Lab', 'DSPS Lab', 'Sensor Lab'],
//   7: ['UID Lab', 'AIDS 2 Lab', 'CSL Lab'],
//   8: ['BC Lab', 'CC Lab', 'UID Lab'],
// };

// const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

// const formatTime = (minutes) => {
//   const h = Math.floor(minutes / 60);
//   const m = minutes % 60;
//   const suffix = h >= 12 ? 'PM' : 'AM';
//   const displayHour = h % 12 === 0 ? 12 : h % 12;
//   return `${displayHour}:${m.toString().padStart(2, '0')} ${suffix}`;
// };

// const Schedule = () => {
//   const [semester, setSemester] = useState('');
//   const [subjects, setSubjects] = useState([]);
//   const [labSubjects, setLabSubjects] = useState([]);
//   const [timetable, setTimetable] = useState(null);
//   const [timeSlots, setTimeSlots] = useState([]);

//   const generateTimetable = () => {
//     const newTimetable = [];
//     const slotTimes = [];
//     const totalDays = weekdays.length;

//     for (let day = 0; day < totalDays; day++) {
//       let timeCursor = 9 * 60;
//       let schedule = [];

//       while (timeCursor < 960) {
//         if (timeCursor === 660) {
//           schedule.push('Break');
//           if (day === 0) slotTimes.push('11:00 AM - 11:20 AM');
//           timeCursor += 20;
//         } else if (timeCursor === 800) {
//           schedule.push('Break');
//           if (day === 0) slotTimes.push('1:20 PM - 2:00 PM');
//           timeCursor += 40;
//         } else if (timeCursor >= 840 && labSubjects.length > 0) {
//           const lab =
//             labSubjects[Math.floor(Math.random() * labSubjects.length)];
//           schedule.push(lab);
//           if (day === 0)
//             slotTimes.push(
//               `${formatTime(timeCursor)} - ${formatTime(timeCursor + 120)}`
//             );
//           timeCursor += 120;
//         } else {
//           const lecture = subjects[Math.floor(Math.random() * subjects.length)];
//           schedule.push(lecture);
//           if (day === 0)
//             slotTimes.push(
//               `${formatTime(timeCursor)} - ${formatTime(timeCursor + 60)}`
//             );
//           timeCursor += 60;
//         }
//       }

//       newTimetable.push(schedule);
//     }

//     setTimetable(newTimetable);
//     setTimeSlots(slotTimes);
//   };

//   const downloadPDF = () => {
//     const element = document.getElementById('timetable-container');
//     html2pdf()
//       .set({
//         margin: 0.5,
//         filename: `Semester_${semester}_Timetable.pdf`,
//         html2canvas: { scale: 2 },
//         jsPDF: { unit: 'in', format: 'letter', orientation: 'landscape' },
//       })
//       .from(element)
//       .save();
//   };

//   return (
//     <div className='p-6 max-w-6xl mx-auto'>
//       <h1 className='text-3xl font-bold mb-6 text-center text-indigo-700'>
//         Timetable Generator
//       </h1>

//       <div className='mb-6 flex flex-col sm:flex-row sm:items-center gap-4 justify-center'>
//         <select
//           className='border border-gray-300 p-2 rounded w-full sm:w-60 focus:outline-none focus:ring-2 focus:ring-indigo-500'
//           value={semester}
//           onChange={(e) => {
//             const sem = e.target.value;
//             setSemester(sem);
//             setSubjects(semesterSubjects[sem] || []);
//             setLabSubjects(labSubjectsBySemester[sem] || []);
//           }}>
//           <option value=''>Select Semester</option>
//           {Object.keys(semesterSubjects).map((sem) => (
//             <option key={sem} value={sem}>
//               Semester {sem}
//             </option>
//           ))}
//         </select>

//         <button
//           className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded shadow'
//           onClick={generateTimetable}>
//           Generate Timetable
//         </button>

//         {timetable && (
//           <button
//             className='bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded shadow'
//             onClick={downloadPDF}>
//             Download PDF
//           </button>
//         )}
//       </div>

//       {timetable && (
//         <div
//           id='timetable-container'
//           className='p-4 border mt-4 bg-white-smoke  overflow-x-auto'>
//           <img
//             src={logo}
//             alt='Logo'
//             // style={{ width: '650px', marginBottom: '20px' }}
//             className='w-full mb-5 object-contain'
//           />
//           <h2 className='text-xl font-semibold mb-4 text-center'>
//             Semester {semester} Timetable
//           </h2>

//           <table className='min-w-full border'>
//             <thead>
//               <tr className='bg-gray-200 text-gray-700'>
//                 <th className='border p-2 bg-indigo-100'>Day / Time</th>
//                 {timeSlots.map((slot, idx) => (
//                   <th key={idx} className='border p-2 bg-indigo-100'>
//                     {slot}
//                   </th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {timetable.map((daySchedule, dayIdx) => (
//                 <tr key={dayIdx} className='hover:bg-gray-50'>
//                   <td className='border p-2 font-semibold bg-gray-100'>
//                     {weekdays[dayIdx]}
//                   </td>
//                   {daySchedule.map((subject, idx) => (
//                     <td key={idx} className='border p-2'>
//                       {subject}
//                     </td>
//                   ))}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Schedule;

// App.jsx
import { useState } from 'react';
import html2pdf from 'html2pdf.js';
import logo from '../../../assets/logo.png';

const semesterSubjects = {
  1: ['Maths-1', 'Chemistry-1', 'Physics-1', 'BEE', 'ME', 'PCE-1'],
  2: ['Maths-2', 'Chemistry-2', 'Physics-2', 'EG', 'C Programming'],
  3: ['Maths-3', 'DSA', 'DBMS', 'PCOM', 'PCPF'],
  4: ['COA', 'Maths-4', 'OS', 'CN', 'AT'],
  5: ['ADMT', 'IP', 'EEB', 'CNS', 'SE'],
  6: ['WebX', 'DMBI', 'AIDS-1', 'EHF', 'WT'],
  7: ['AIDS-2', 'IO', 'DO', 'CSL', 'SQA'],
  8: ['BC', 'CC', 'ETC', 'IO', 'DO', 'PM'],
};

const labSubjectsBySemester = {
  1: [
    'Physics-1 Lab',
    'Chemistry-1 Lab',
    'PCE-1 Lab',
    'BEE Lab',
    'Mechanics Lab',
    'Workshop-1',
  ],
  2: [
    'Physics-2 Lab',
    'Chemistry-2 Lab',
    'C Programming Lab',
    'AutoCAD Lab',
    'Workshop-2',
  ],
  3: ['DSA Lab', 'Database Lab', 'Java Lab', 'PCPF Lab', 'Mini Project Lab'],
  4: [
    'OS Lab',
    'Python Lab',
    'Microprocessor Lab',
    'Network Lab',
    'Mini Project Lab',
  ],
  5: ['IP Lab', 'Security Lab', 'PCE-2 Lab', 'Mini Project Lab'],
  6: [
    'WebX Lab',
    'BI Lab',
    'MAD/PWA Lab',
    'DSPS Lab',
    'Sensor Lab',
    'Mini Project Lab',
  ],
  7: ['UID Lab', 'AIDS 2 Lab', 'CSL Lab', 'Major Project Lab'],
  8: ['BC Lab', 'CC Lab', 'UID Lab', 'Major Project Lab'],
};

const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

const formatTime = (minutes) => {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  const suffix = h >= 12 ? 'PM' : 'AM';
  const displayHour = h % 12 === 0 ? 12 : h % 12;
  return `${displayHour}:${m.toString().padStart(2, '0')} ${suffix}`;
};

const Schedule = () => {
  const [semester, setSemester] = useState('');
  const [subjects, setSubjects] = useState([]);
  const [labSubjects, setLabSubjects] = useState([]);
  const [timetable, setTimetable] = useState(null);
  const [timeSlots, setTimeSlots] = useState([]);

  const generateTimetable = () => {
    const newTimetable = [];
    const slotTimes = [];
    const totalDays = weekdays.length;

    for (let day = 0; day < totalDays; day++) {
      let timeCursor = 9 * 60;
      let schedule = [];

      while (timeCursor < 960) {
        if (timeCursor === 660) {
          schedule.push('Break');
          if (day === 0) slotTimes.push('11:00 AM - 11:20 AM');
          timeCursor += 20;
        } else if (timeCursor === 800) {
          schedule.push('Break');
          if (day === 0) slotTimes.push('1:20 PM - 2:00 PM');
          timeCursor += 40;
        } else if (timeCursor >= 840 && labSubjects.length > 0) {
          const lab =
            labSubjects[Math.floor(Math.random() * labSubjects.length)];
          schedule.push(lab);
          if (day === 0)
            slotTimes.push(
              `${formatTime(timeCursor)} - ${formatTime(timeCursor + 120)}`
            );
          timeCursor += 120;
        } else {
          const lecture = subjects[Math.floor(Math.random() * subjects.length)];
          schedule.push(lecture);
          if (day === 0)
            slotTimes.push(
              `${formatTime(timeCursor)} - ${formatTime(timeCursor + 60)}`
            );
          timeCursor += 60;
        }
      }

      newTimetable.push(schedule);
    }

    setTimetable(newTimetable);
    setTimeSlots(slotTimes);
  };

  const downloadPDF = () => {
    const element = document.getElementById('timetable-container');
    html2pdf()
      .set({
        margin: 0.5,
        filename: `Semester_${semester}_Timetable.pdf`,
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'landscape' },
      })
      .from(element)
      .save();
  };

  return (
    <div className='p-6 max-w-6xl mx-auto bg-white-smoke'>
      <h1 className='text-3xl font-bold mb-6 text-center text-cadmium-blue'>
        Timetable Generator
      </h1>

      <div className='mb-6 flex flex-col sm:flex-row sm:items-center gap-4 justify-center'>
        <select
          className='border border-lavender-blue p-3 rounded-full w-full sm:w-60 focus:outline-none focus:ring-2 focus:ring-risd-blue'
          value={semester}
          onChange={(e) => {
            const sem = e.target.value;
            setSemester(sem);
            setSubjects(semesterSubjects[sem] || []);
            setLabSubjects(labSubjectsBySemester[sem] || []);
          }}>
          <option value=''>Select Semester</option>
          {Object.keys(semesterSubjects).map((sem) => (
            <option key={sem} value={sem}>
              Semester {sem}
            </option>
          ))}
        </select>

        <button
          className='bg-palatinate-blue text-white-smoke hover:bg-risd-blue text-white px-6 py-2 rounded-full shadow transition-colors duration-200'
          onClick={generateTimetable}>
          Generate Timetable
        </button>

        {timetable && (
          <button
            className='bg-cadmium-blue text-white-smoke hover:bg-dark-imperial-blue text-white px-6 py-2 rounded-full shadow transition-colors duration-200'
            onClick={downloadPDF}>
            Download PDF
          </button>
        )}
      </div>

      {timetable && (
        <div
          id='timetable-container'
          className='p-4 border border-lavender-blue rounded-lg mt-4 bg-white shadow-md overflow-x-auto'>
          <img
            src={logo}
            alt='Logo'
            className='w-full max-h-32 mb-5 object-contain'
          />
          <h2 className='text-xl font-semibold mb-4 text-center text-dark-imperial-blue'>
            Semester {semester} Timetable
          </h2>

          <table className='min-w-full border border-lavender-blue'>
            <thead>
              <tr className='bg-lavender-web text-dark-imperial-blue'>
                <th className='border border-lavender-blue p-2 bg-lavender-web'>
                  Day / Time
                </th>
                {timeSlots.map((slot, idx) => (
                  <th
                    key={idx}
                    className='border border-lavender-blue p-2 bg-lavender-web'>
                    {slot}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {timetable.map((daySchedule, dayIdx) => (
                <tr
                  key={dayIdx}
                  className='hover:bg-pale-lavender transition-colors duration-150'>
                  <td className='border border-lavender-blue p-2 font-semibold bg-lavender-web text-dark-imperial-blue'>
                    {weekdays[dayIdx]}
                  </td>
                  {daySchedule.map((subject, idx) => {
                    // Style breaks differently
                    const isBreak = subject === 'Break';
                    // Style labs differently
                    const isLab = labSubjects.includes(subject);

                    return (
                      <td
                        key={idx}
                        className={`border border-lavender-blue p-2 ${
                          isBreak
                            ? 'bg-lavender-web'
                            : isLab
                            ? 'bg-lavender-web bg-opacity-10 text-cadmium-blue font-medium'
                            : 'text-smoky-black'
                        }`}>
                        {subject}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>

          <div className='mt-4 text-sm text-gray text-right'>
            {/* Generated on {new Date().toLocaleDateString()} */}
            Generated on {new Date().toLocaleString()}
          </div>
        </div>
      )}
    </div>
  );
};

export default Schedule;
