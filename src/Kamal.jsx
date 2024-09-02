import { EnrollForm, LoginForm } from "./Forms/AuthorizationForms";
import {
  AssignmentForm,
  ExperimentForm,
  CourseForm,
  LabForm,
  ExamForm,
  ExamScoreForm,
  SubmissionForm,
  ResourceForm,
} from "./Forms/AcademicForms";
import { InstituteForm, DepartmentForm } from "./Forms/InstituteForms";
import {
  StudentForm,
  AdminForm,
  NonTeachingStaffForm,
  SystemAdminForm,
  TeachingStaffForm,
} from "./Forms/UserForms";
import GroupForm from "./Forms/GroupForm"; 
const dummyData = {
  availableUsers: [
    { id: "1", name: "Alice Johnson" },
    { id: "2", name: "Bob Smith" },
    { id: "3", name: "Charlie Brown" },
    { id: "4", name: "Diana Prince" },
  ],
  institutes: [
    { id: "1", name: "Institute of Technology" },
    { id: "2", name: "School of Business" },
    { id: "3", name: "College of Engineering" },
  ],
  departments: [
    { id: "1", name: "Computer Science" },
    { id: "2", name: "Electrical Engineering" },
    { id: "3", name: "Mechanical Engineering" },
    { id: "4", name: "Business Administration" },
  ],
};

export default function Kamal() {
  return (
    <>
      <b>Authorization Forms</b>
      <h1>Login Form</h1>
      <LoginForm />

      <h1>Enroll Form</h1>
      <EnrollForm />

      <b>Academic Forms</b>
      <h1>Course Form</h1>
      <CourseForm
        departments={["Computer Science", "Mechanical", "Electrical"]}
        teachers={["Mr. Smith", "Ms. Johnson", "Dr. Brown"]}
      />

      <h1>Lab Form</h1>
      <LabForm
        courses={["Computer Science 101", "Physics 201", "Chemistry 301"]}
        departments={["Computer Science", "Mechanical", "Electrical"]}
        teachers={["Mr. Smith", "Ms. Johnson", "Dr. Brown"]}
        labAssistants={["John Doe", "Jane Roe", "Sam Smith"]}
      />

      <h1>Experiment Form</h1>
      <ExperimentForm
        labs={["Physics Lab", "Chemistry Lab", "Biology Lab"]}
        departments={["Computer Science", "Mechanical", "Electrical"]}
        teachers={["Mr. Smith", "Ms. Johnson", "Dr. Brown"]}
      />

      <h1>Assignment Form</h1>
      <AssignmentForm
        courses={["Math 101", "Physics 202", "Chemistry 303"]}
        labs={["Physics Lab", "Chemistry Lab", "Biology Lab"]}
      />

      <h1>Exam Form</h1>
      <ExamForm
        courses={["Math 101", "Physics 202", "Chemistry 303"]}
        labs={["Physics Lab", "Chemistry Lab", "Biology Lab"]}
      />

      <h1>Exam Score Form</h1>
      <ExamScoreForm
        exams={["Midterm Exam", "Final Exam"]}
        students={["John Doe", "Jane Smith", "Alice Johnson"]}
      />

      <h1>Submission Form</h1>
      <SubmissionForm
        students={["John Doe", "Jane Smith", "Alice Johnson"]}
        experiments={["Physics Experiment 1", "Chemistry Experiment 2"]}
        assignments={["Math Assignment 1", "English Assignment 2"]}
      />

      <h1>Resource Form</h1>
      <ResourceForm
        courses={["Math 101", "Physics 201"]}
        labs={["Physics Lab", "Chemistry Lab"]}
        users={["Professor John", "Dr. Smith", "TA Alice"]}
      />

      <b>Institute Forms</b>
      <h1>Institute Form</h1>
      <InstituteForm />

      <h1>Department Form</h1>
      <DepartmentForm />

      <b>User Forms</b>
      <h1>Student Form</h1>
      <StudentForm />

      <h1>Teaching Staff Form</h1>
      <TeachingStaffForm />

      <h1>Non-Teaching Staff Form</h1>
      <NonTeachingStaffForm />

      <h1>Admin Form</h1>
      <AdminForm />

      <h1>System Admin Form</h1>
      <SystemAdminForm />

      <h1>Create Group</h1>
      <GroupForm
        availableUsers={dummyData.availableUsers}
        institutes={dummyData.institutes}
        departments={dummyData.departments}
      />
    </>
  );
}
