/*
  CourseForm - for creating courses
  fields: name (required, textbox), courseCode (required, textbox), year (required, number), semester (required, number), credits (required, number), department (required, selection[available department]), teachersIncharge (multiple selection [from avialable teaching staff])
*/
export function CourseForm() {}

//////////////////////////////////////////////////////////////////////////////////////////
/*
  LabForm - for creating labs
  fields: name (required, textbox), labCode (required, textbox), credits (required, number), year (required, number), semester (required, number), course (required, selection[available course]), department (required, selection[available department]), teachersIncharge (multiple selection [from avialable teaching staff]), labAssistants (multiple selection [from avialable non-teaching staff]).
 */
export function LabForm() {}

//////////////////////////////////////////////////////////////////////////////////////////
/*
  AssignmentForm - for creating assignments
  fields: name (required, textbox), instruction (required, textbox), dateOfPerformance (required, date), dateOfSubmission (required, date), subjectType (required, selection[Course, Lab]), subject (required, selection[available course or lab]), marks (required, number).
*/
export function AssignmentForm() {}

//////////////////////////////////////////////////////////////////////////////////////////
/*
  ExperimentForm - for creating experiments
  fields: name (required, textbox), instruction (required, textbox), dateOfPerformance (required, date), dateOfSubmission (required, date), subject (required, selection[available labs]), marks (required, number).
*/
export function ExperimentForm() {}

//////////////////////////////////////////////////////////////////////////////////////////
/*
  ExamForm - for creating examinations
  fields: name (required, textbox), description (textbox), subjectType (required, selection[Course, Lab]), subject (required, selection[available course or lab]), year (required, number), semester (required, number), examDate (required, date), marks (required, number), startTime (required, time), endTime (required, time).
*/
export function ExamForm() {}

//////////////////////////////////////////////////////////////////////////////////////////
/*
  ExamScoreForm - for creating exam scores
  fields: exam (required, selection[available exam]), student (required, selection[available student]), marks (required, number), remark (textbox).
 */
export function ExamScoreForm() {}

//////////////////////////////////////////////////////////////////////////////////////////
/*
  SubmissionForm - for creating submissions
  fields: student (required, selection[available student]), subjectType (required, selection[Experiment, Assignment]), subject (required, selection[available experiment or assignment]), dateOfSubmission (required, date), status (required, selection[Submitted, Not Submitted, Graded, Late]), submissionFile (textbox), feedback (textbox), marks (number).
*/
export function SubmissionForm() {}

//////////////////////////////////////////////////////////////////////////////////////////
/*
  ResourceForm - for creating resources
  fields: name (required, textbox), description (textbox), resourceURL (textbox), resourceFile (textbox), subjectType (required, selection[Course, Lab]), subject (required, selection[available course or lab]), uploadedBy (required, selection[available user]).
*/
export function ResourceForm() {}
