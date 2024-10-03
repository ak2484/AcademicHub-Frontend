import React from "react";
import StudentGreeting from "./DashComponents/StudentGreeting";
import StudentProgress from "./DashComponents/StudentProgress";

export default function Dashboard1() {
  const studentName = "Akash Nahak";
  const studentImageUrl = "./src/assets/Akash.jpg";
  return (
    <div className='flex-col w-full -top-4'>
      <div className=''>
        <StudentGreeting name={studentName} imageUrl={studentImageUrl} />
        <StudentProgress />
      </div>
    </div>
  );
}
