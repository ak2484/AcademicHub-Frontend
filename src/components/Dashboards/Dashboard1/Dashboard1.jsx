import React from "react";
import StudentGreeting from "./DashComponents/StudentGreeting";
import StudentProgress from "./DashComponents/StudentProgress";
import AttendancePieChart from "./DashComponents/AttendancePieChart";

export default function Dashboard1() {
  const studentName = "Akash Nahak";
  const studentImageUrl = "./src/assets/Akash.jpg";
  return (
    <div className='flex'>
      <div className=''>
        <StudentGreeting name={studentName} imageUrl={studentImageUrl} />

        <div className='flex w-full '>
          <StudentProgress />
          <AttendancePieChart presentDays={75} totalDays={100} />
        </div>
      </div>
    </div>
  );
}
