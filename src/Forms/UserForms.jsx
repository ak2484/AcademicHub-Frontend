/*
  StudentForm - for creating students
  fields: firstName (required, textbox), lastName (required, textbox), fatherName (required, textbox), motherName(required, textbox), email (required, email), mobileNumber (required, number), password (required, password), passwordConfirm (required, password), gender (required, selection[Male, Female, Other]), dateOfBirth (required, date), address (required, textarea), addressCity (required, selection[based on state]), addressState (required, selection[based on country]), addressCountry (required, selection[only give India option]), addressPincode (required, number), profileImage, institute (can be auto-set, selection[available institute]), department (can be auto-set, selection[available department]), otherDepartments, instituteAllotedId (required, number), enrollmentDate (required, date), currentYear(number[range - 1 to 6]), currentSemester(number[range - 1 to 12]), division, batch, courses.
 */

export function StudentForm() {}

/*
  TeachingStaffForm - for creating teaching staff
  fields: firstName (required, textbox), lastName (required, textbox), fatherName (required, textbox), motherName(required, textbox), email (required, email), mobileNumber (required, number), password (required, password), passwordConfirm (required, password), gender (required, selection[Male, Female, Other]), dateOfBirth (required, date), address (required, textarea), addressCity (required, selection[based on state]), addressState (required, selection[based on country]), addressCountry (required, selection[only give India option]), addressPincode (required, number), profileImage, institute (can be auto-set, selection[available institute]), department (can be auto-set, selection[available department]), otherDepartments, instituteAllotedId (required, number), hireDate (required, date), designation (textbox), coursesIncharge (multiple selection [from avialabe courses]), labsIncharge (multiple selection [from avialable labs]).
 */

export function TeachingStaffForm() {}

/*
  NonTeachingStaffForm - for creating non-teaching staff
  fields: firstName (required, textbox), lastName (required, textbox), fatherName (required, textbox), motherName(required, textbox), email (required, email), mobileNumber (required, number), password (required, password), passwordConfirm (required, password), gender (required, selection[Male, Female, Other]), dateOfBirth (required, date), address (required, textarea), addressCity (required, selection[based on state]), addressState (required, selection[based on country]), addressCountry (required, selection[only give India option]), addressPincode (required, number), profileImage, institute (can be auto-set, selection[available institute]), department (can be auto-set, selection[available department]), otherDepartments, instituteAllotedId (required, number), hireDate (required, date), designation (textbox).
 */

export function NonTeachingStaffForm() {}

/*
  AdminForm - for creating admin
  fields: firstName (required, textbox), lastName (required, textbox), fatherName (required, textbox), motherName(required, textbox), email (required, email), mobileNumber (required, number), password (required, password), passwordConfirm (required, password), gender (required, selection[Male, Female, Other]), dateOfBirth (required, date), address (required, textarea), addressCity (required, selection[based on state]), addressState (required, selection[based on country]), addressCountry (required, selection[only give India option]), addressPincode (required, number), profileImage, institute (can be auto-set, selection[available institute]), department (can be auto-set, selection[available department]), otherDepartments, instituteAllotedId (required, number), hireDate (required, date), designation (textbox).
 */
export function AdminForm() {}

/*
  SystemAdminForm - for creating system admin
  fields: firstName (required, textbox), lastName (required, textbox), fatherName (required, textbox), motherName(required, textbox), email (required, email), mobileNumber (required, number), password (required, password), passwordConfirm (required, password), gender (required, selection[Male, Female, Other]), dateOfBirth (required, date), address (required, textarea), addressCity (required, selection[based on state]), addressState (required, selection[based on country]), addressCountry (required, selection[only give India option]), addressPincode (required, number), profileImage, institute (can be auto-set, selection[available institute]), department (can be auto-set, selection[available department]), otherDepartments, instituteAllotedId (required, number), hireDate (required, date), designation (textbox).
 */

export function SystemAdminForm() {}
