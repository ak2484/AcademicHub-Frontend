// import { EnrollForm, LoginForm } from "./components/Forms/AuthorizationForms";
import {
  AssignmentForm,
  ExperimentForm,
  CourseForm,
  LabForm,
  ExamForm,
  ExamScoreForm,
  SubmissionForm,
  ResourceForm,
} from "./components/Forms/AcademicForms";
import {
  InstituteForm,
  DepartmentForm,
} from "./components/Forms/InstituteForms";
import {
  StudentForm,
  AdminForm,
  NonTeachingStaffForm,
  SystemAdminForm,
  TeachingStaffForm,
} from "./components/Forms/UserForms";
import GroupForm from "./components/Forms/GroupForm";

//
import {
  Exam,
  ExamCard,
  ExamScore,
  ExamScoreCard,
} from "./components/DataModelComponents/AcademicComponents/Exam.jsx";
import {
  DepartmentCard,
  Department,
} from "./components/DataModelComponents/InstituteComponents/Department.jsx";
import {
  CourseCard,
  Course,
} from "./components/DataModelComponents/AcademicComponents/Course.jsx";
import {
  AssignmentCard,
  Assignment,
} from "./components/DataModelComponents/AcademicComponents/Assignment.jsx";
import {
  ExperimentCard,
  Experiment,
} from "./components/DataModelComponents/AcademicComponents/Experiment.jsx";
import {
  LabCard,
  Lab,
} from "./components/DataModelComponents/AcademicComponents/Lab.jsx";
import {
  ResourceCard,
  Resource,
} from "./components/DataModelComponents/AcademicComponents/Resource.jsx";
import {
  SubmissionCard,
  Submission,
} from "./components/DataModelComponents/AcademicComponents/Submission.jsx";
import {
  InstituteCard,
  Institute,
} from "./components/DataModelComponents/InstituteComponents/Institute.jsx";
// import {GroupCard , Group} from "./components/DataModelComponents/UserComponents/Group.jsx";
import {
  AdminCard,
  Admin,
} from "./components/DataModelComponents/UserComponents/Admin.jsx";
import {
  SystemAdminCard,
  SystemAdmin,
} from "./components/DataModelComponents/UserComponents/SystemAdmin.jsx";
import {
  StudentCard,
  Student,
} from "./components/DataModelComponents/UserComponents/Student.jsx";
import {
  NonTeachingStaffCard,
  NonTeachingStaff,
} from "./components/DataModelComponents/UserComponents/NonTeachingStaff.jsx";
import {
  TeachingStaffCard,
  TeachingStaff,
} from "./components/DataModelComponents/UserComponents/TeachingStaff.jsx";

///---------------------DUMMY DATA FOR GROUP FORM SECTION-----------------------------------------------------///
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

///---------------------DUMMY DATA FOR DATAMODEL SECTION-----------------------------------------------------///

const sampleCourse = {
  name: "Introduction to Computer Science",
  code: "CS101",
  department: "Computer Science",
  year: 1,
  semester: 1,
  credits: 4,
  teachers: ["Dr. Smith", "Prof. Johnson"],
};

const sampleExam = {
  name: "Midterm Exam",
  date: "2024-10-10",
  course: "Math 101",
  duration: 2,
  totalMarks: 100,
};

const sampleScore = {
  studentName: "John Doe",
  examName: "Midterm Exam",
  course: "Math 101",
  marksObtained: 85,
  totalMarks: 100,
  grade: "A",
};

const sampleDepartment = {
  name: "Computer Science",
  headOfDepartment: "Dr. Alice Johnson",
  facultyCount: 25,
  courses: ["Data Structures", "Algorithms", "Operating Systems"],
  faculty: ["Prof. Bob Smith", "Prof. Charlie Brown", "Prof. Diana Prince"],
};

const sampleGroup = {
  name: "Study Group",
  description: "A group for collaborative study sessions.",
  memberCount: 10,
  creationDate: "2024-09-15",
  members: ["Alice Johnson", "Bob Smith", "Charlie Brown", "Diana Prince"],
};

const sampleInstitute = {
  name: "Institute of Technology",
  location: "New York",
  establishedYear: 1980,
  numberOfStudents: 5000,
  departments: [
    "Computer Science",
    "Mechanical Engineering",
    "Business Administration",
  ],
  coursesOffered: ["Data Structures", "Thermodynamics", "Financial Management"],
};

const sampleSubmission = {
  title: "Math Assignment 1",
  studentName: "John Doe",
  dateOfSubmission: "2024-09-18",
  status: "Completed",
  comments: "Well done, but needs improvement on the final section.",
  attachments: [
    { name: "Assignment File", link: "https://example.com/assignment1.pdf" },
  ],
};

const sampleResource = {
  title: "Data Structures Lecture Notes",
  type: "PDF",
  subject: "Computer Science",
  description: "Comprehensive notes on data structures for CS students.",
  uploadedBy: "Professor Jane Doe",
  uploadedAt: "2024-09-15",
  link: "https://example.com/resource.pdf",
};

const sampleLab = {
  name: "Physics Lab",
  department: "Science and Engineering",
  location: "Building 5, Room 301",
  equipment: ["Oscilloscope", "Spectrometer", "Voltmeter"],
  supervisor: "Dr. Jane Doe",
  description: "A laboratory equipped for experiments related to physics.",
};

const sampleExperiment = {
  title: "Physics Lab Experiment 1",
  lab: "Physics Lab",
  date: "2024-09-15",
  objectives: "To study the laws of motion.",
  materials: "Inclined plane, stopwatch, weights, protractor.",
  procedure:
    "Set up the inclined plane and measure the time taken by different objects to slide down the plane at different angles.",
};

const sampleAssignment = {
  name: "Assignment 1",
  instruction: "Complete the exercises from Chapter 3",
  subject: "Mathematics",
  subjectType: "Course",
  dateOfPerformance: "2024-09-10",
  dateOfSubmission: "2024-09-17",
  marks: 100,
};

const sampleAdmin2 = {
  name: "John Doe",
  role: "System Administrator",
  email: "john.doe@example.com",
  phone: "+1 234 567 890",
  responsibilities: [
    "Manage user accounts",
    "Monitor system performance",
    "Handle technical support",
  ],
};
const sampleAdmin = {
  name: "Alice Admin",
  id: "A987654",
  role: "System Administrator",
  email: "alice.admin@example.com",
  phone: "+1 234 567 890",
  responsibilities: [
    "Manage system configurations",
    "Oversee user access controls",
    "Monitor system performance",
    "Implement security measures",
  ],
};

const sampleStudent = {
  name: "John Doe",
  id: "S123456",
  course: "Computer Science",
  email: "john.doe@example.com",
  phone: "+1 234 567 890",
  grades: [
    { subject: "Math", score: "A" },
    { subject: "Physics", score: "B+" },
    { subject: "Chemistry", score: "A-" },
  ],
  activities: ["Soccer Club", "Robotics Team"],
};
const sampleNonTeachStaff = {
  name: "Jane Doe",
  position: "Librarian",
  department: "Library Services",
  email: "jane.doe@example.com",
  phone: "+1 234 567 890",
  responsibilities: [
    "Manage library resources",
    "Assist students with research",
    "Organize events",
  ],
};
const sampleStaff = {
  name: "John Doe",
  id: "T123456",
  subject: "Mathematics",
  email: "john.doe@example.com",
  phone: "+1 234 567 890",
  qualifications: ["M.Sc. in Mathematics", "Ph.D. in Education"],
  responsibilities: [
    "Teach undergraduate courses",
    "Supervise research projects",
    "Conduct departmental meetings",
  ],
};
///---------------------MAIN FUNCTION-----------------------------------------------------///
export default function Kamal() {
  return (
    <>
      <TeachingStaffCard
        staff={sampleStaff}
        onClick={() => console.log("Teaching Staff Card Clicked")}
      />
      <TeachingStaff staff={sampleStaff} />

      <NonTeachingStaffCard
        staff={sampleNonTeachStaff}
        onClick={() => console.log("Non-Teaching Staff Card Clicked")}
      />
      <NonTeachingStaff staff={sampleNonTeachStaff} />

      <StudentCard
        student={sampleStudent}
        onClick={() => console.log("Student Card Clicked")}
      />
      <Student student={sampleStudent} />

      <SystemAdminCard
        admin={sampleAdmin}
        onClick={() => console.log("System Admin Card Clicked")}
      />
      <SystemAdmin admin={sampleAdmin} />

      <AdminCard
        admin={sampleAdmin2}
        onClick={() => console.log("Admin Card Clicked")}
      />
      <Admin admin={sampleAdmin2} />

      <AssignmentCard
        assignment={sampleAssignment}
        onClick={() => console.log("Assignment Card Clicked")}
      />
      <Assignment assignment={sampleAssignment} />

      <ExperimentCard
        experiment={sampleExperiment}
        onClick={() => console.log("Experiment Card Clicked")}
      />
      <Experiment experiment={sampleExperiment} />

      <LabCard
        lab={sampleLab}
        onClick={() => console.log("Lab Card Clicked")}
      />
      <Lab lab={sampleLab} />
      <ResourceCard
        resource={sampleResource}
        onClick={() => console.log("Resource Card Clicked")}
      />
      <Resource resource={sampleResource} />
      <SubmissionCard
        submission={sampleSubmission}
        onClick={() => console.log("Submission Card Clicked")}
      />
      <Submission submission={sampleSubmission} />

      <CourseCard
        course={sampleCourse}
        onClick={() => console.log("Course Card Clicked")}
      />
      <Course course={sampleCourse} />

      {/* <GroupCard
    group={sampleGroup}
    onClick={() => console.log('Group Card Clicked')}
  />
  <Group group={sampleGroup} /> */}

      <InstituteCard
        institute={sampleInstitute}
        onClick={() => console.log("Institute Card Clicked")}
      />
      <Institute institute={sampleInstitute} />

      <DepartmentCard
        department={sampleDepartment}
        onClick={() => console.log("Department Card Clicked")}
      />
      <Department department={sampleDepartment} />

      <ExamCard
        exam={sampleExam}
        onClick={() => console.log("Exam Card Clicked")}
      />
      <Exam exam={sampleExam} />

      <ExamScoreCard
        score={sampleScore}
        onClick={() => console.log("Exam Score Card Clicked")}
      />
      <ExamScore score={sampleScore} />

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

      <h1>Create Group Form</h1>
      <GroupForm
        availableUsers={dummyData.availableUsers}
        institutes={dummyData.institutes}
        departments={dummyData.departments}
      />

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
    </>
  );
}
