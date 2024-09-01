/* InstituteForm - for creating institute
  fields: name (required, textbox), instituteCode (required, textbox), contact (required, textbox), email (required, email), website (required, url), mobileNumber (required, number), address (required, textarea), addressCity (required, selection[based on state]), addressState (required, selection[based on country]), addressCountry (required, selection[only give India option]), addressPincode (required, number), establishedDate (required, date), accreditionDetails (textarea), instituteType (selection[central, state, private, autonomous, deemed-to-be]), universityAffiliation (textbox), principal, logo, missionStatement (textbox), visionStatement (textbox), campusArea (number), facilities (textarea)
 */

export function InstituteForm() {}

/* DepartmentForm - for creating department
  fields: name (required, textbox), departmentCode (required, textbox), departmentType (required, selection['Academic', 'Administrative', 'Student Service', 'Extracurricular and Co-curricular', 'Research and Development', 'Library and Learning Resources', 'Governance',]), headOfDepartment, institute.
 */

export function DepartmentForm() {}

/* GroupForm - for creating group
  fields: name (required, textbox), groupType (required, selection['Year', 'Semester', 'Division', 'Batch', 'Project', 'Tutorial', 'Elective', 'Mentor', 'Other',]), members (multiple selection [from avialable users]), groupIncharge, institute, department.
 */

export function GroupForm() {}
