import { EnrollForm, LoginForm  } from "./Forms/AuthorizationForms";
import {AssignmentForm, ExperimentForm, CourseForm , LabForm,  ExamForm , ExamScoreForm,SubmissionForm, ResourceForm} from "./Forms/AcademicForms"
import { GroupForm, InstituteForm , DepartmentForm } from "./Forms/InstituteForms";
import  { StudentForm, AdminForm, NonTeachingStaffForm, SystemAdminForm, TeachingStaffForm } from "./Forms/UserForms";

export default function Kamal() {
  return (
    <>
        <b>Authoriztion Forms</b>
        <h1>login Form</h1>
        <LoginForm/>
        <h1>Enroll Form</h1>
        <EnrollForm/>
 
        <b>Academic Forms</b>
        <h1>Course Form</h1>
        <CourseForm
        departments={['Computer Science', 'Mechanical', 'Electrical']}
        teachers={['Mr. Smith', 'Ms. Johnson', 'Dr. Brown']}
        />
        <h1>Lab Form</h1>
        <LabForm
        courses={['Computer Science 101', 'Physics 201', 'Chemistry 301']}
        departments={['Computer Science', 'Mechanical', 'Electrical']}
        teachers={['Mr. Smith', 'Ms. Johnson', 'Dr. Brown']}
        labAssistants={['John Doe', 'Jane Roe', 'Sam Smith']}
        />
        <h1>Experiment Form</h1>
        <ExperimentForm
        labs={['Physics Lab', 'Chemistry Lab', 'Biology Lab']}
        departments={['Computer Science', 'Mechanical', 'Electrical']}
        teachers={['Mr. Smith', 'Ms. Johnson', 'Dr. Brown']}
        />
        <h1>Assignment Form</h1>
        <AssignmentForm
        courses={['Math 101', 'Physics 202', 'Chemistry 303']}
        labs={['Physics Lab', 'Chemistry Lab', 'Biology Lab']}
        />
        <h1>Exam form</h1>
        <ExamForm
        courses={['Math 101', 'Physics 202', 'Chemistry 303']}
        labs={['Physics Lab', 'Chemistry Lab', 'Biology Lab']}
        />
        <h1>Exam score form</h1>
        <ExamScoreForm
        exams={['Midterm Exam', 'Final Exam']}
        students={['John Doe', 'Jane Smith', 'Alice Johnson']}
        />
        <h1>submission form</h1>
        <SubmissionForm
        students={['John Doe', 'Jane Smith', 'Alice Johnson']}
        experiments={['Physics Experiment 1', 'Chemistry Experiment 2']}
        assignments={['Math Assignment 1', 'English Assignment 2']}
        />
        <h1>Resource form</h1>
        <ResourceForm
        courses={['Math 101', 'Physics 201']}
        labs={['Physics Lab', 'Chemistry Lab']}
        users={['Professor John', 'Dr. Smith', 'TA Alice']}
        />


        <b>Institute Forms</b>
        <h1>Institute Form</h1>
        <InstituteForm/>
        <h1>Department form</h1>
        <DepartmentForm/>
        {/* <h1>Group form Not running because of multiple declaration and assignment issue</h1>
        <GroupForm/> */}


        <b>User Forms</b>
        <h1>student form</h1>
        <StudentForm/>
        <h1>TeachingStaff Form</h1>
        <TeachingStaffForm/>
        <h1>NonTeachingStaff Form</h1>
        <NonTeachingStaffForm/>
        <h1>Admin Form</h1>
        <AdminForm/>
        <h1>SystemAdmin Form</h1>
        <SystemAdminForm/>
       
    </>
  );
}
